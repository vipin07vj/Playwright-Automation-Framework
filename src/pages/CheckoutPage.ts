import { Locator, Page } from "playwright/test";

export class CheckoutPage {
  private readonly page: Page;
  private readonly remove: Locator;
  private readonly checkout: Locator


  constructor(page: Page) {
    this.page = page;
    this.remove = page.locator("button[class='btn btn_secondary btn_small cart_button']");
    this.checkout = page.locator("#checkout");
  }

  async checkproducts(): Promise<void> {
    await this.checkout.click();
  }

  async removeProductInCart(): Promise<void> {
   this.remove.click();
  }



   
  }