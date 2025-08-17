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
  productsPage = new ProductPage(pageFixture.page); 
  await productsPage.addmultipltProductsInCart();    
});



 Then('I sort products by A-Z', async function () {
     productsPage = new ProductPage(pageFixture.page); 
     await productsPage.clickonsorting();   
});

Then('I sort products by Z-A', async function () {
  productsPage = new ProductPage(pageFixture.page); 
  await productsPage.clickonreversesorting();    
});


Then('I sort products by Price low to high', async function () {
  productsPage = new ProductPage(pageFixture.page);
  await productsPage.clickonprice();    
});



Then('I sort products by Price high to low', async function () {
  productsPage = new ProductPage(pageFixture.page); 
  await productsPage.clickonpricehightolow();    
});

Then('I add products in cart and remove it from there', async function () {
  productsPage = new ProductPage(pageFixture.page); 
  await productsPage.addandremoveProductsInCart();    
});










