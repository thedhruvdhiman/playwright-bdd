import { Browser, chromium, Page} from '@playwright/test';

const globalSetup = async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.context().storageState({ path: 'storageState.json' });
    await browser.close();
}

export default globalSetup;
