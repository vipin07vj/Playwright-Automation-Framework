import { Then } from '@cucumber/cucumber';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage'; 
let checkoutOverviewPage: CheckoutOverviewPage
import { pageFixture } from "./hooks/browserContextFixture";
import logger from '../logger/logger';


Then('I Finsh my request in Checkout: Overview', async function () {
  checkoutOverviewPage = new CheckoutOverviewPage(pageFixture.page); // create instance of your page object
  await checkoutOverviewPage.checkproducts();    // call the method from your POM
  logger.info("I completed my Order")
});


