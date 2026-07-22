
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  reporter: 'html',

  use: {
    headless: false,

    launchOptions: {
      slowMo: 1000,
    },

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});