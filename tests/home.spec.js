// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('https://www.latamairlines.com/pe/es');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/LATAM/);
});