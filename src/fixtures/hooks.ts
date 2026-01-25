import { createBdd } from "playwright-bdd";
import { test } from "./Page.fixture";
import { attachment } from "allure-js-commons";

const { Before, After } = createBdd(test);


Before(async ({ $testInfo }) => {});

After(async ({ page, $testInfo }) => {
  if ($testInfo.status === "failed") {
    const screenshot = await page.screenshot();
    attachment("Failed Screenshot", screenshot, {
      contentType: "image/png",
    });
  }
});
