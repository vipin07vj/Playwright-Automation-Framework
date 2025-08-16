import { Then } from '@cucumber/cucumber';
import { ProductPage } from '../pages/ProductPage';
import { pageFixture } from "./hooks/browserContextFixture";

let productsPage: ProductPage;

import { chromium } from 'playwright';



Then('I add products in cart', async function () {
  productsPage = new ProductPage(pageFixture.page); // create instance of your page object
  await productsPage.addProductsInCart();    // call the method from your POM
});

Then('I add multiple products in cart', async function () {
  productsPage = new ProductPage(pageFixture.page); // create instance of your page object
  await productsPage.addmultipltProductsInCart();    // call the method from your POM
});



 Then('I sort products by A-Z', async function () {
     productsPage = new ProductPage(pageFixture.page); // create instance of your page object
     await productsPage.clickonsorting();    // call the method from your POM
 });


Then('I sort products by Z-A', async function () {
  productsPage = new ProductPage(pageFixture.page); // create instance of your page object
  await productsPage.clickonreversesorting();    // call the method from your POM
});


Then('I sort products by Price low to high', async function () {
  productsPage = new ProductPage(pageFixture.page); // create instance of your page object
  await productsPage.clickonprice();    // call the method from your POM
});



Then('I sort products by Price high to low', async function () {
  productsPage = new ProductPage(pageFixture.page); // create instance of your page object
  await productsPage.clickonpricehightolow();    // call the method from your POM
});

Then('I add products in cart and remove it from there', async function () {
  productsPage = new ProductPage(pageFixture.page); // create instance of your page object
  await productsPage.addandremoveProductsInCart();    // call the method from your POM
});










