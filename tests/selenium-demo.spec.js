/**
 * using webdriver.io
 */
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
import { remote } from 'webdriverio';


/**
 * https://webdriver.io/docs/seleniumgrid/
 * "webSocketUrl": "ws://172.17.0.2:4444/session/e32fdcf15489792d5b39edd2bd7e5dd9/se/bidi",
 * https://www.gridlastic.com/webdriverio.html
 */
describe('webdriverio', function(){
  test('example.com', async function(){
    //https://webdriver.io/docs/api/webdriverBidi/
    //https://webdriver.io/docs/api/modules#remoteoptions-modifier
    const browser = await remote({
        protocol: 'http',

      // hostname: 'localhost', // or your Docker host IP
      // hostname: '192.168.1.58', // or your Docker host IP
      hostname: "192.168.1.116", // host.docker.internal work?
      // protocol: 'http',
      // hostname:"172.17.0.2",
      port: 4444,
      path: '/wd/hub',

      capabilities: {
        browserName: 'chrome',
        // wdio:{
        //   'enforceWebDriverClassic': true
        // },
        'goog:chromeOptions': { args: ['--headless', '--disable-gpu'] }
      },

    });
    await browser.url('http://example.com');
    const text = await browser.$('h1').getText();
    // console.log(text);
    expect(text).toBe('Example Domain');
    await browser.deleteSession();
  });
},100000);


