import path from "node:path";

import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: "on-first-retry",
    baseURL: "http://localhost:3000",
    actionTimeout: 20000,
    navigationTimeout: 20000,
  },
  timeout: 20000,
  expect: {
    timeout: 20000,
  },
  testDir: path.join(process.cwd(), "e2e"),
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "yarn start",
    port: 3000,
    reuseExistingServer: true,
  },
  outputDir: "test-results/",
};

export default config;
