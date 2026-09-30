import { test, expect } from '@playwright/test';

test('all pages render, images load, and layouts fit the viewport', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const routes = ['/', '/layouts', '/about', '/vision', '/why-aurex', '/contact', '/layouts/pusapatirega', '/layouts/pydibhimvaram', '/layouts/modavalasa'];
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response.status(), route).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map(image => {
        image.loading = 'eager';
        return image.decode().catch(() => {});
      }));
    });
    expect(await page.evaluate(() => [...document.images].filter(image => !image.naturalWidth).map(image => image.src)), route).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), route).toBe(true);
  }
  expect(errors).toEqual([]);
});

test('navigation and layout details preserve enquiry selection', async ({ page }, testInfo) => {
  await page.goto('/');
  if (testInfo.project.name === 'mobile') {
    await page.getByTestId('nav-mobile-menu-button').click();
    await expect(page.getByTestId('nav-mobile-menu-button')).toHaveAttribute('aria-expanded', 'true');
    await page.getByTestId('nav-mobile-link-layouts').click();
    await expect(page.getByTestId('nav-mobile-menu')).toHaveCount(0);
  } else {
    await page.getByTestId('nav-link-layouts').click();
  }
  await expect(page).toHaveURL(/\/layouts$/);
  await page.goto('/layouts/pusapatirega');
  await page.getByTestId('specification-toggle').click();
  await expect(page.getByTestId('specification-panel')).toBeVisible();
  await page.getByTestId('specification-toggle').click();
  await expect(page.getByTestId('specification-panel')).toHaveCount(0);
  await page.getByTestId('layout-book-visit-button').click();
  await expect(page.getByTestId('lead-form-layout-select')).toHaveValue('Aurex One @ Pusapatirega');
});

test('enquiry validates input and prepares WhatsApp without claiming delivery', async ({ page }) => {
  await page.goto('/contact');
  await page.getByTestId('lead-form-submit-button').click();
  await expect(page.getByTestId('lead-form-success')).toHaveCount(0);
  await page.getByTestId('lead-form-name-input').fill('Test Visitor');
  await page.getByTestId('lead-form-phone-input').fill('invalid-phone');
  await page.getByTestId('lead-form-submit-button').click();
  await expect(page.getByTestId('lead-form-success')).toHaveCount(0);
  expect(await page.getByTestId('lead-form-phone-input').evaluate(input => input.validity.patternMismatch)).toBe(true);
  await page.getByTestId('lead-form-phone-input').fill('+91 99999 00000');
  await page.getByTestId('lead-form-message-input').fill('Please arrange a site visit.');
  // Prevent real navigation or communication during the test.
  await page.evaluate(() => { window.open = url => { window.__preparedUrl = url; return null; }; });
  await page.getByTestId('lead-form-submit-button').click();
  await expect(page.getByTestId('lead-form-success')).toContainText('pressing Send in WhatsApp');
  const url = await page.evaluate(() => window.__preparedUrl);
  expect(new URL(url).hostname).toBe('wa.me');
  expect(new URL(url).searchParams.get('text')).toContain('Test Visitor');
  await page.getByRole('button', { name: 'Edit enquiry' }).click();
  await expect(page.getByTestId('lead-form-name-input')).toHaveValue('Test Visitor');
});

test('unknown pages return a real 404', async ({ page }) => {
  for (const path of ['/missing-page', '/layouts/missing-layout']) {
    const response = await page.goto(path);
    expect(response.status()).toBe(404);
    await expect(page.getByRole('link', { name: 'Return to Aurex One' })).toBeVisible();
  }
});
