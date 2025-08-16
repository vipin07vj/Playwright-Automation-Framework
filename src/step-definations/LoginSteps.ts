import { Given } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage'; 
import { pageFixture } from "./hooks/browserContextFixture";

let loginPage: LoginPage

Given('I login with valid username and password', async function () {
  loginPage = new LoginPage(pageFixture.page); // create instance of your page object
  await loginPage.login();    // call the method from your POM
});

Given('I login with invalid username and password', async function () {
  loginPage = new LoginPage(pageFixture.page); // create instance of your page object
  await loginPage.InValidlogin();    // call the method from your POM
});
