import { defineConfig } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  testDir: "./tests",
  workers: 1, 
  use: {
    headless: true,
    baseURL: "https://www.saucedemo.com/",
    connectOptions: {
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
        JSON.stringify({
          browserName: "Chrome",
          browserVersion: "latest",
          platform: "Windows 11",
          build: "Playwright-LambdaTest",
          name: "My Cloud Test",
          user: process.env.LT_USERNAME,
          accessKey: process.env.LT_ACCESS_KEY,
        })
      )}`,
    },
  },
});
