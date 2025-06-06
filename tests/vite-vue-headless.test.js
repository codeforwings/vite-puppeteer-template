/**
 readme_nvm_vite_node_vue_2024.md
 pnpm add -D vitest
 pnpm add lodash -D
 */
import { describe, test,vi,beforeAll,afterAll} from 'vitest';
import { expect,assert} from 'vitest';

/**
 * Should put this somewhere safe
 * todo filepath needs to be initialized as well...
 * @param fileName .json
 * @param data will automatically be changed
 */
import fs from 'node:fs';
export function writeToFile(fileName,data,space=2){
  const sFileName = /\./.test(fileName) ? fileName : fileName + '.json';
  const filePath = `tmp/${sFileName}`
  fs.writeFileSync(filePath,
      typeof data === 'string' ? data :JSON.stringify(data,null,+space)
  );
}
//learn vi.mock

import puppeteer from 'puppeteer';
describe('vite-vue-headless.test.js - localhost', function(){
  test('localhost - non-headless', async function(){
    const browser = await puppeteer.launch({
      // headless:false,//default is true
    });
    const pages = await browser.pages() // Get the first page if it exists
    const page = pages.length > 0 ? pages[0] : await browser.newPage();

    // Navigate the page to a URL
    await page.setViewport({width: 1080, height: 1024});
    await page.goto('http://localhost:5173/',{ waitUntil: 'load' });
    {

      const element =
          await page.waitForSelector('#app > div.card > button');
      // check the text
      const text = await element?.evaluate(el => el.textContent);
      expect(text).toBe('count is 0');
    }

  });
  test.skip('example.com - headless', async function(){
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

  });
});
