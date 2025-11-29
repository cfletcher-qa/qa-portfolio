const { test, expect } = require('@playwright/test');

test('successful login on SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Assert successful login by checking URL
  await expect(page).toHaveURL(/.*inventory/);

  // Assert that the products page is visible
  const title = page.locator('.title');
  await expect(title).toHaveText('Products');
});

test('failed login on SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'no_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

// Expect to remain on login page and see an error container
  await expect(page).toHaveURL(/.*saucedemo/);

  // Assert that the products page is visible
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Username and password do not match any user in this service');
});
