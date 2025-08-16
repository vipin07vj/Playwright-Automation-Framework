import { expect, Locator, Page } from "playwright/test";

export class CheckoutYourInfo {
  private readonly page: Page;
  private readonly firstName: Locator;
  private readonly secondname: Locator;
  private readonly Zip: Locator;
  private readonly continue : Locator
  private readonly errorMessage: Locator
  private readonly cancel: Locator


  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
        this.secondname = page.locator('#last-name');
        this.Zip = page.locator('#postal-code')
        this.continue = page.locator('#continue')
        this.errorMessage = page.locator("div[class='error-message-container error']")
        this.cancel = page.locator("#cancel")
     }

  async continued(): Promise<void> {
    await this.firstName.fill("qwerty");
    await this.secondname.fill("ghjkl");
    await this.Zip.fill("19001");
    await this.continue.click();
   // await this.page.pause();
    //await this.cancel.click;
    
  }

  async validationissue(): Promise<void> {
   await this.continue.click();
   const errormessage = this.errorMessage.getAttribute;
   //await this.page.waitForTimeout(4000);
   console.log("errormessage" + errormessage);
   // expect(errormessage).toMatch('Error: First Name is required');
  };


  }