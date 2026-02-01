import { test as PageFixtureObjects, createBdd } from "playwright-bdd";
import { expect as Expect } from "@playwright/test";
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

export const {
  Given,
  When,
  Then,
  Step,
  BeforeAll,
  AfterAll,
  Before,
  After,
  BeforeWorker,
  AfterWorker,
  BeforeScenario,
  AfterScenario,
  BeforeStep,
  AfterStep,
} = createBdd(pageFixture);

export const test = pageFixture;
export const expect = Expect;
