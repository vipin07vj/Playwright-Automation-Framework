import { Then } from '@cucumber/cucumber';
import { CheckoutYourInfo } from '../pages/CheckoutYourInfo';
import { pageFixture } from "./hooks/browserContextFixture";
import logger from '../logger/logger';


let checkoutYourInfo: CheckoutYourInfo;

Then('I proceed to Checkout: Your Information', async function () {
  checkoutYourInfo = new CheckoutYourInfo(pageFixture.page); 
  await checkoutYourInfo.continued();    
    logger.info("I checkout after adding the details")

});


Then('I proceed to Checkout: Your Information and and cant procced without adding details', async function () {
  checkoutYourInfo = new CheckoutYourInfo(pageFixture.page); 
  await checkoutYourInfo.validationissue();    
    logger.info("I checkout from my cart")

});
