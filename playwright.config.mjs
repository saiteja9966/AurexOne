import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  timeout: 60000,
  use: {
    baseURL: 'http://localhost:3107',
    trace: 'retain-on-failure',
    launchOptions: { channel: 'chrome' },
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 1000 } } },
    { name: 'mobile', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } },
  ],
  webServer: {
    command: 'npm run start -- --port 3107',
    url: 'http://localhost:3107',
    reuseExistingServer: false,
    timeout: 120000,
  },
});
