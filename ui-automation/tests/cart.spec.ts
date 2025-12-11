import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';

test('user can add item to cart and see it in cart page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addItemToCart('Sauce Labs Backpack');
  expect(await inventoryPage.getCartCount()).toBe(1);

  await inventoryPage.openCart();
  expect(await cartPage.getItemCount()).toBe(1);

  const items = await cartPage.getCartItemNames();
  expect(items).toContain('Sauce Labs Backpack');
});

test('user can remove item from cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addItemToCart('Sauce Labs Backpack');
  await inventoryPage.openCart();
  expect(await cartPage.getItemCount()).toBe(1);

  await cartPage.removeItem('Sauce Labs Backpack');
  expect(await cartPage.getItemCount()).toBe(0);
});

