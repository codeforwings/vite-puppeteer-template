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
describe('Example.com', function(){
  test('example.com - non-headless', async function(){
    const browser = await puppeteer.launch({
      headless:false,//default is true
    });
    const pages = await browser.pages() // Get the first page if it exists
    const page = pages.length > 0 ? pages[0] : await browser.newPage();

    // Navigate the page to a URL
    await page.setViewport({width: 1080, height: 1024});
    await page.goto('http://localhost:3000/',{ waitUntil: 'load' });

  });
});
