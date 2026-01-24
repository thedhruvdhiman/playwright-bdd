import { Browser, chromium, Page, type FullConfig } from '@playwright/test';

const globalSetup = async (config: FullConfig) => {
    const {baseURL} = config.projects[0].use;
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
}

export default globalSetup;
