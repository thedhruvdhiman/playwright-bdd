import { Page } from '@playwright/test';

class BasePage {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Get element locator
   * @param locator - CSS or XPath selector
   * @returns Playwright locator
   */
  getElement(locator: string) {
    return this.page.locator(locator);
  }

  /**
   * Get all elements matching locator
   * @param locator - CSS or XPath selector
   * @returns Array of locators
   */
  async getElements(locator: string) {
    await this.page.locator(locator).first().waitFor();
    return this.page.locator(locator).all();
  }

  /**
   * Get text content of element
   * @param locator - CSS or XPath selector
   * @returns Text content
   */
  async getText(locator: string) {
    return this.page.locator(locator).innerText();
  }

  /**
   * Get text by visible text
   * @param text - Visible text to search for
   * @returns Text content
   */
  async getTextByContent(text: string) {
    return this.page.getByText(text).innerText();
  }

  /**
   * Click an element
   * @param locator - CSS or XPath selector
   */
  async clickElement(locator: string) {
    await this.page.locator(locator).click();
  }

  /**
   * Fill an input field
   * @param locator - CSS or XPath selector
   * @param text - Text to fill
   */
  async fillInput(locator: string, text: string) {
    await this.page.locator(locator).fill(text);
  }

  /**
   * Wait for element to be visible
   * @param locator - CSS or XPath selector
   */
  async waitForElement(locator: string) {
    await this.page.locator(locator).waitFor();
  }
}

export default BasePage;