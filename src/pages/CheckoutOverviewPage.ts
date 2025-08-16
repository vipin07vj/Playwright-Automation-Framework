import { Locator, Page } from "playwright/test";

export class CheckoutOverviewPage {
  private readonly page: Page;
  private readonly cancel: Locator;
  private readonly finish: Locator


  constructor(page: Page) {
    this.page = page;
    this.finish = page.locator("#finish");
    this.cancel = page.locator("#cancel");
  }

  async checkproducts(): Promise<void> {
    await this.finish.click();
  

  } 
  }