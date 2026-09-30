import { test, expect } from '@playwright/test';

async function scrollTour(page, progress) {
  await page.getByTestId('masterplan-tour').evaluate((element, fraction) => {
    const start = element.getBoundingClientRect().top + window.scrollY;
    const distance = element.offsetHeight - window.innerHeight;
    window.scrollTo({ top: start + distance * fraction, behavior: 'instant' });
  }, progress);
}

test('scrolling highlights each map location in order and reverses correctly', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  const tour = page.getByTestId('masterplan-tour');
  const image = tour.locator('img');
  for (const [progress, location] of [[.12, 'pydibhimvaram'], [.5, 'pusapatirega'], [.85, 'modavalasa'], [.5, 'pusapatirega'], [.12, 'pydibhimvaram']]) {
    await scrollTour(page, progress);
    await expect(tour).toHaveAttribute('data-active-stop', location);
    await expect(page.getByTestId(`masterplan-marker-${location}`)).toHaveAttribute('data-active', 'true');
    await expect(page.getByTestId(`masterplan-select-${location}`)).toHaveAttribute('aria-pressed', 'true');
    const bounds = await image.boundingBox();
    const viewport = page.viewportSize();
    expect(bounds.y).toBeGreaterThanOrEqual(65);
    expect(bounds.y + bounds.height).toBeLessThan(viewport.height);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  await page.getByTestId('masterplan-select-modavalasa').click();
  await expect(tour).toHaveAttribute('data-active-stop', 'modavalasa');
  await expect(page.getByTestId('masterplan-select-modavalasa')).toHaveAttribute('aria-pressed', 'true');
  expect(errors).toEqual([]);
});

test('reduced motion keeps the map static and locations selectable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const tour = page.getByTestId('masterplan-tour');
  await tour.scrollIntoViewIfNeeded();
  await page.getByTestId('masterplan-select-pusapatirega').click();
  await expect(tour).toHaveAttribute('data-active-stop', 'pusapatirega');
  expect(await page.getByTestId('masterplan-cursor').locator('svg').evaluate(el => getComputedStyle(el).animationName)).toBe('none');
  expect(await tour.evaluate(el => el.offsetHeight < innerHeight * 1.5)).toBe(true);
});
