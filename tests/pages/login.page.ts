import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';

test('mi primera compra automatica', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // 1. Login con Page Object
  await loginPage.login('standard_user', 'secret_sauce');

  // 2. Flujo de compra
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');
  await page.click('[data-test="checkout"]');

  await page.fill('[data-test="firstName"]', 'Adrian');
  await page.fill('[data-test="lastName"]', 'Lencina');
  await page.fill('[data-test="postalCode"]', '1663');
  await page.click('[data-test="continue"]');
  await page.click('[data-test="finish"]');

  // 3. Validación final
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});