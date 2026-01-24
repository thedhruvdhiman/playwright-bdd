import { test as PageFixtureObjects } from "playwright-bdd";
import LoginPage from "../pages/Login.page";
import InventoryPage from "../pages/Inventory.page";

type pageClasses = {
  inventoryPage: InventoryPage;
  loginPage: LoginPage;
};

const pageFixture = PageFixtureObjects.extend<pageClasses>({
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export const test = pageFixture;
export const expect = test.expect;