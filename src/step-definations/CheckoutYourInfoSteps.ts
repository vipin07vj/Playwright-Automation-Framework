import { Then } from '@cucumber/cucumber';
import { CheckoutYourInfo } from '../pages/CheckoutYourInfo';
import { pageFixture } from "./hooks/browserContextFixture";
import logger from '../logger/logger';


let checkoutYourInfo: CheckoutYourInfo;

Then('I proceed to Checkout: Your Information', async function () {
  checkoutYourInfo = new CheckoutYourInfo(pageFixture.page); // create instance of your page object
  await checkoutYourInfo.continued();    // call the method from your POM
    logger.info("I checkout after adding the details")

});


Then('I proceed to Checkout: Your Information and and cant procced without adding details', async function () {
  checkoutYourInfo = new CheckoutYourInfo(pageFixture.page); // create instance of your page object
  await checkoutYourInfo.validationissue();    // call the method from your POM
    logger.info("I checkout from my cart")

});
