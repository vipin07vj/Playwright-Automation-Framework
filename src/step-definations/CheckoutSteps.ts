import { Then} from '@cucumber/cucumber';
import { CheckoutPage } from '../pages/CheckoutPage';
import { pageFixture } from "./hooks/browserContextFixture";
import logger from '../logger/logger';

let checkoutPage: CheckoutPage;


Then('I click on checkout in your cart page', async function () {
  checkoutPage = new CheckoutPage(pageFixture.page); // create instance of your page object
  await checkoutPage.checkproducts();    // call the method from your POM
  logger.info("I checkout from my cart")
});

Then('I click on remove button to remove the products', async function () {
  checkoutPage = new CheckoutPage(pageFixture.page); // create instance of your page object
   await checkoutPage.removeProductInCart();    // call the method from your POM
   logger.info("I remove the item")
});
