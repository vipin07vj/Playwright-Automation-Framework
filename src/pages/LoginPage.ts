import { time } from "console";
import { Locator, Page } from "playwright/test";

export class LoginPage {
  private readonly page: Page;
  private readonly userName: Locator;
  private readonly password: Locator;
  private readonly loginBtn: Locator;


  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
  }

  async login(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/')
    await this.userName.fill('standard_user');
    await this.password.fill('secret_sauce');
    await this.loginBtn.click();
  }

  async InValidlogin(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/')
    await this.userName.fill('standard_userxxx');
    await this.password.fill('secet_sauce');
    await this.loginBtn.click();
    await this.page.waitForTimeout(3000)
}
}