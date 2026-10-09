import { test, expect } from '@playwright/test';

test('buscar zapatillas en Mercado Libre', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar/');
  await page.getByPlaceholder('Buscar productos, marcas y más…').fill('zapatillas');
  await page.getByPlaceholder('Buscar productos, marcas y más…').press('Enter');
  await expect(page).toHaveURL(/.*zapatillas/);
  await expect(page.getByText('Zapatillas').first()).toBeVisible();
});

test('entrar en carrefour', async ({ page }) => {
  await page.goto('https://www.carrefour.com.ar/');
  await page.getByText('Electro').first().click();
  await expect(page).toHaveURL(/.*electro/);
});