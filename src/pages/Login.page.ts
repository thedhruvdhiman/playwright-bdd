// import { Page } from "@playwright/test";
// import { PageFixture } from "../hooks/pageFixture.ts";
import { expect, Page } from "@playwright/test";
import BasePage from "./Base.page.ts";

const baseURL = process.env.BASE_URL ? process.env.BASE_URL : "https://www.saucedemo.com/";

class LoginPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  private readonly dashboardURL: string =
    "https://www.saucedemo.com/inventory.html";

  private readonly loginURL: string = "https://www.saucedemo.com/";

  private readonly errorMessage =
    "Epic sadface: Username and password do not match any user in this service";

  private locators = {
    username: "Username",
    password: "Password",
    loginButton: "#login-button",
  };

  async completeLoginProcess(username: string, password: string) {
    await this.gotoLoginPage();
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
    await this.verifyDashboard();
  }

  async gotoLoginPage() {
    console.log('Navigating to login page');
    await this.page.goto(this.loginURL, {
      waitUntil: "domcontentloaded",
    });
  }

  async enterUsername(username: string) {
    await this.page.getByPlaceholder(this.locators.username).fill(username);
  }

  async enterPassword(password: string) {
    await this.page.getByPlaceholder(this.locators.password).fill(password);
  }

  async clickLoginButton() {
    await this.page.locator(this.locators.loginButton).click();
  }

  async verifyDashboard() {
    await this.page.waitForURL(this.dashboardURL);
  }

  async verifyErrorMessage() {
    expect(await this.page.locator(`h3[data-test="error"]`).innerText()).toBe(
      this.errorMessage,
    );
  }
}

export default LoginPage;


//npx playwright test src/features/Login.feature --headed