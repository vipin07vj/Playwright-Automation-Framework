import { expect, Locator, Page } from "playwright/test";
import assert from 'assert';


export class ProductPage {
  private readonly page: Page;
  private readonly item1: Locator;
  private readonly shoppingcardicon: Locator;
  private readonly remove: Locator
  private readonly filter: Locator;
  private readonly item2: Locator;


  constructor(page: Page) {
    this.page = page;
    this.item1 = page.locator("#add-to-cart-sauce-labs-backpack");
    this.item2 = page.locator("button[data-test='add-to-cart-sauce-labs-bike-light']")
    this.shoppingcardicon = page.locator("span[class='shopping_cart_badge']")
    this.remove = page.locator("button[class='btn btn_secondary btn_small btn_inventory ']")
    this.filter = page.locator("select[class='product_sort_container']");
  }

  async addProductsInCart(): Promise<void> {
   
    await this.item1.click();
    await this.shoppingcardicon.click();

  }

  async addmultipltProductsInCart(): Promise<void> {
   
    await this.item1.click();
    await this.item2.click();
    await this.shoppingcardicon.click();
  }

    async clickonsorting(): Promise<void> {
                await this.filter.waitFor({ state: 'visible' });
                     const filterDropdown =   await this.filter.click();
                 await this.filter.selectOption('az');
                     const names = await this.page.locator('.inventory_item_name').allTextContents();
            const sorted = [...names].sort((a, b) => a.localeCompare(b));  
            expect(names).toEqual(sorted);
              console.log("Items are sorted A–Z:", names);
    }

    async clickonreversesorting(): Promise<void> {
        await this.filter.waitFor({ state: 'visible' });
     const filterDropdown =   await this.filter.click();
         await this.page.waitForTimeout(3000);  
         await this.filter.selectOption('za');
          const names = await this.page.locator('.inventory_item_name').allTextContents();
            const expected = [...names].sort((a, b) => b.localeCompare(a));
    expect(names).toEqual(expected);
              console.log("Items are sorted Z-A:", names);
}

async addandremoveProductsInCart(): Promise<void> {
       await this.item1.click();
       await this.page.waitForTimeout(1000);
       await this.remove.click(); 
       await this.page.waitForTimeout(2000);
}
async clickonprice(): Promise<void> {
     const filterDropdown =   await this.filter.click();
         await this.filter.selectOption('lohi');
         const priceTexts = await this.page.locator('.inventory_item_price').allTextContents();
const prices = priceTexts.map(p => parseFloat(p.replace('$', '')));

for (let i = 0; i < prices.length - 1; i++) {
  expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
}
console.log("Prices are in ascending order:", prices);
}

async clickonpricehightolow(): Promise<void> {
     const filterDropdown =   await this.filter.click();
         await this.filter.selectOption('hilo');
         const priceTexts = await this.page.locator('.inventory_item_price').allTextContents();
const prices = priceTexts.map(p => parseFloat(p.replace('$', '')));

for (let i = 0; i < prices.length - 1; i++) {
  expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
}
console.log("Prices are in ascending order:", prices);
}  
  
}