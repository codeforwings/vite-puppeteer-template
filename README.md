# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# Links
* [StackBlitz Demo](https://stackblitz.com/~/github.com/codeforwings/vite-puppeteer-template)
# Notes
* Vitest doesn't quite support puppeteer yet. Only Webdriver.io and Playwright.
  * `Webdriver.io` is sponsored by BrowserStack, and based on Selenium.
  * `Playwright` is sponsored by Microsoft, and is a newer project that supports multiple browsers.
    * Syntax more similar to Puppeteer with async/await.
* StackBlitz uses Node 20
  * Can't install for some reason?
* https://replit.com/
* 
# Install
* Vite Test
* Puppeteer
  * Core is for existing chrome installs
```bash
# Install Dev Dependencies
pnpm add puppeteer -D
# smaller package
# pnpm add puppeteer-core -D

# Vitest
pnpm add vitest -D

pnpm add @vitest/ui -D # optional dashboard

# One time
pnpx puppeteer browsers install chrome
npx puppeteer browsers install chrome

pnpx vitest --run --testNamePattern='^ ?Example.com example.com - headless$' tests/example-headless.test.js

# Testing
pnpx run test-headless
sudo pnpx run test-headless
```

# Example
```js
const browser = await puppeteer.launch({
  // headless:false,//default is true
});
const pages = await browser.pages() // Get the first page if it exists
const page = pages.length > 0 ? pages[0] : await browser.newPage();

// Navigate the page to a URL
await page.setViewport({width: 1080, height: 1024});
await page.goto('https://example.com/',{ waitUntil: 'load' });
{
  const element =
      await page.waitForSelector('body > div:nth-child(1) > h1');
  // check the text
  const text = await element?.evaluate(el => el.textContent);
  expect(text).toBe('Example Domain');
}
```
