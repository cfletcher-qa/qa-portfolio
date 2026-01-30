import { test, expect } from './fixtures';

test.describe('Login Tests', () => {
  test('Successful login', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/.*inventory/);
    const title = page.locator('.title');
    await expect(title).toHaveText('Products');
  });

  test('Failed login shows error message', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('invalid_user', 'wrong_password');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      'Username and password do not match any user in this service'
    );
  });
});