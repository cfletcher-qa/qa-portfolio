import { test, expect } from './fixtures';

test('user can add item to cart and see it in cart page', async ({ loginPage, inventoryPage, cartPage }: { loginPage: any; inventoryPage: any; cartPage: any }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addItemToCart('Sauce Labs Backpack');
  expect(await inventoryPage.getCartCount()).toBe(1);

  await inventoryPage.openCart();
  expect(await cartPage.getItemCount()).toBe(1);

  const items = await cartPage.getCartItemNames();
  expect(items).toContain('Sauce Labs Backpack');
});

test('user can remove item from cart', async ({ loginPage, inventoryPage, cartPage }: { loginPage: any; inventoryPage: any; cartPage: any }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addItemToCart('Sauce Labs Backpack');
  await inventoryPage.openCart();
  expect(await cartPage.getItemCount()).toBe(1);

  await cartPage.removeItem('Sauce Labs Backpack');
  expect(await cartPage.getItemCount()).toBe(0);
});