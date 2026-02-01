import { expect, When, Then } from "../fixtures/Page.fixture.ts";

When(
  /^I change the filter from Price (low to high)$/,
  async ({ inventoryPage }, filter: string) => {
    await inventoryPage.changeFilterSettings(filter);
  },
);

Then(
  /^I should see the inventory page with products sorted by Price (low to high)$/,
  async ({ inventoryPage }, _filter: string) => {
    await inventoryPage.checkAmountOrderAfterFilter();
  },
);

Then(`I click on menu button`, async ({ inventoryPage }) => {
  await inventoryPage.clickMenuButton();
});

Then(`I click on logout button`, async ({ inventoryPage }) => {
  await inventoryPage.clickLogoutButton();
});

When("I click on the first product", async ({ inventoryPage }) => {
  await inventoryPage.clickFirstProduct();
});

Then(
  "I should be redirected to the product page",
  async ({ inventoryPage }) => {
    await inventoryPage.verifyProductPage();
  },
);

When("I should see the page title", async ({ page }) => {
  expect(await page.locator('div[class="app_logo"]').isVisible()).toBeTruthy();
});
