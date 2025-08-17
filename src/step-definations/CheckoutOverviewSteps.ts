import { Then } from '@cucumber/cucumber';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage'; 
let checkoutOverviewPage: CheckoutOverviewPage
import { pageFixture } from "./hooks/browserContextFixture";
import logger from '../logger/logger';


Then('I Finsh my request in Checkout: Overview', async function () {
  checkoutOverviewPage = new CheckoutOverviewPage(pageFixture.page); 
  await checkoutOverviewPage.checkproducts();  
  logger.info("I completed my Order")
});


