import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'src/features/*.feature',
  steps: 'src/{step-definition,fixtures}/*.ts',
});

export default defineConfig({
  testDir,
  reporter: "html",
  headless: false,
  use: {
    baseURL: 'https://www.saucedemo.com/',
    storageState: 'storageState.json',
  },
  // globalSetup: require.resolve('./src/fixtures/global-setup.ts'),
  globalSetup: require.resolve('./src/fixtures/global-setup.ts'),
  globalTeardown: require.resolve('./src/fixtures/global-teardown.ts'),
});
