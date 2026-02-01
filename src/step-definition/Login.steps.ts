import { Given, Then } from "../fixtures/Page.fixture.ts";

Given(
  /^I login to the application with username (.*) and password (.*)$/,
  async ({ loginPage }, username, password) => {
    await loginPage.completeLoginProcess(username, password);
  },
);

Then("I am on home page", async ({ loginPage }) => {
  await loginPage.verifyDashboard();
});
