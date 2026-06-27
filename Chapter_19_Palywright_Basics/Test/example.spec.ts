import { test, expect } from '@playwright/test'

test("Verify the page has title TTA_Cart", async ({ page }) => {

  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  await expect(page).toHaveTitle("TTACart - Login");
  await page.waitForTimeout(5000);
})

