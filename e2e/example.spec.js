// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test.use({ launchOptions: { headless: false } });
test('vote', async ({ page }) => {

  // Navigate the page to a URL
  // await page.setViewport({width: 1080, height: 1024});//doesnt work in playwright
  // await page.goto('http://localhost:3000/',{ waitUntil: 'load' });
  await page.goto('https://webetmarkets.com/app/',{ waitUntil: 'load' });
  /**
   *  1. wait for the register/sign-in page 'close' and click on it
   *  */
  {
    console.log('1. Waiting For page to load...');
    //$('#vMain > div > div > div:nth-child(1) > div > div > div > div.v-snack__action > button > span')
    const searchResultSelector = '#vMain > div > div > div:nth-child(1) > div > div > div > div.v-snack__action > button > span';
    const eleSelected = await page.waitForSelector(searchResultSelector);
    // await clickOnElement(eleSelected);//testing... not sure if this works
  }
});
