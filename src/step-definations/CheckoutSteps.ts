import { Then} from '@cucumber/cucumber';
import { CheckoutPage } from '../pages/CheckoutPage';
import { pageFixture } from "./hooks/browserContextFixture";
import logger from '../logger/logger';

let checkoutPage: CheckoutPage;


Then('I click on checkout in your cart page', async function () {
  checkoutPage = new CheckoutPage(pageFixture.page); 
  await checkoutPage.checkproducts();   
  logger.info("I checkout from my cart")
});

Then('I click on remove button to remove the products', async function () {
  checkoutPage = new CheckoutPage(pageFixture.page); 
   await checkoutPage.removeProductInCart();    
   logger.info("I remove the item")
});

Then('I click on remove button to remove the product from multiple products', async function () {
  checkoutPage = new CheckoutPage(pageFixture.page); 
   await checkoutPage.removeProductInCartfrommultiple();    
   logger.info("I remove the item")
});
