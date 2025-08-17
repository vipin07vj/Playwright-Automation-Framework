import { Given } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage'; 
import { pageFixture } from "./hooks/browserContextFixture";

let loginPage: LoginPage

// Given('I login with valid username and password', async function () {
//   loginPage = new LoginPage(pageFixture.page); // create instance of your page object
//   await loginPage.login(username, password);    // call the method from your POM
// });

Given('I login with invalid {string} and {string}', async function (username: string, password: string) {
  loginPage = new LoginPage(pageFixture.page); 
  await loginPage.InValidlogin(username, password);    
});

Given('I login with valid {string} and {string}', async function (username: string, password: string) {
  loginPage = new LoginPage(pageFixture.page);
  await loginPage.login(username, password);
});
