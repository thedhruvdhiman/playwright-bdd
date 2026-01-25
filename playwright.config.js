import { defineConfig } from "@playwright/test";
import { defineBddConfig, cucumberReporter } from "playwright-bdd";
import dateAndTime from "./src/utils/getCurrentTime";
import runTag from "./src/utils/runTags";


const testDir = defineBddConfig({
  features: "src/features/*.feature",
  steps: "src/{step-definition,fixtures}/*.ts",
});

export default defineConfig({
  testDir,
  reporter: [
    cucumberReporter("html", {
      outputFile: `report/cucumber-report/${runTag}_${dateAndTime}.html`,
    }),

    [
      "allure-playwright",
      {
        resultsDir: `results/${runTag}_${dateAndTime}`,
        detail: true,
        suiteTitle: true,
        plugins: {
          awesome: {
            options: {
              name: "Test",
            },
          },
        },
      },
    ],
  ],
  headless: false,
  use: {
    baseURL: "https://www.saucedemo.com/",
    storageState: "storageState.json",
  },
  globalSetup: require.resolve("./src/fixtures/global-setup.ts"),
  globalTeardown: require.resolve("./src/fixtures/global-teardown.ts"),
});
