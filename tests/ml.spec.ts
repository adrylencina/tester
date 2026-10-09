import { test, expect } from '@playwright/test';

test('mi primera compra automatica', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();
  await page.locator('#checkout').click();
  await page.locator('#first-name').fill('Juan');
  await page.locator('#last-name').fill('Perez');
  await page.locator('#postal-code').fill('1663');
  await page.locator('#continue').click();
  await page.locator('#finish').click();
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});