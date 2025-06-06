# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

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
pnpm add @vitest/ui -D

# One time
npx puppeteer browsers install chrome
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
