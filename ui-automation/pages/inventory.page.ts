import { Page, Locator } from '@playwright/test';

export class InventoryPage {
readonly page: Page;
readonly pageTitle: Locator;
readonly cartLink: Locator;
readonly cartBadge: Locator;


constructor(page: Page){
this.page = page;
this.pageTitle = page.locator('span.title');
this.cartLink = page.locator('.shopping_cart_link');
this.cartBadge = page.locator('.shopping_cart_badge');
}

async getTitle(){
return this.pageTitle.textContent();
}

async addItemToCart(itemName: string){
    const selector = `[data-test="add-to-cart-${this.formatItemName(itemName)}"]`;
     console.log("Using selector:", selector); 
    await this.page.locator(selector).click();
}

async removeItemCart(itemName: string){
    const selector = `[data-test="remove-${this.formatItemName(itemName)}"]`;
    await this.page.locator(selector).click();
}

async openCart() {
 await this.cartLink.click();
}

 async getCartCount(): Promise<number> {
    const text = await this.cartBadge.textContent();
    return text ? parseInt(text) : 0;
}

  private formatItemName(itemName: string): string {
    return itemName.toLowerCase().replace(/ /g, '-');
}

}

