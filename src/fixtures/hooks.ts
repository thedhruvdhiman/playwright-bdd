import { Before, After } from "./Page.fixture";
import { attachment } from "allure-js-commons";

Before(async ({ $testInfo }) => {});

After(async ({ page, $testInfo }) => {
  if ($testInfo.status === "failed") {
    const screenshot = await page.screenshot();
    attachment("Failed Screenshot", screenshot, {
      contentType: "image/png",
    });
  }
});
