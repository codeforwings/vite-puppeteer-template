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
 * https://www.npmjs.com/package/webdriver#example
 */

/**
 * https://webdriver.io/docs/seleniumgrid/
 * "webSocketUrl": "ws://172.17.0.2:4444/session/e32fdcf15489792d5b39edd2bd7e5dd9/se/bidi",
 * https://www.gridlastic.com/webdriverio.html
 *
 *
 * Using Docker to run hub and single chrome node
 * might add dockercompose / dockerfile to this project later
 * standalone is meant for local dev only
 */
describe('webdriver.io remote', function(){
  test('example.com', async function(){
    //https://webdriver.io/docs/api/webdriverBidi/
    //https://webdriver.io/docs/api/modules#remoteoptions-modifier
    //hmm different configs
    // https://www.npmjs.com/package/webdriverio
    const browser = await remote({
      protocol: 'http',

      // hostname: 'selenium.localhost', // or your Docker host IP
      // port: 80,
      // hostname: 'localhost', // or your Docker host IP
      hostname: 'host.docker.internal', // or your Docker host IP
      port: 4444,
      // hostname: '192.168.1.58', // or your Docker host IP
      // protocol: 'http',
      // hostname:"172.17.0.2",
      /* Other Machine */
      // hostname: "192.168.1.116", // host.docker.internal work?

      acceptInsecureCerts: true,
      // webSocketUrl: true,
      // webSocketUrl: false, // does nothing here either
      // https://webdriver.io/docs/proxy
      // maybe just need proxy?


      /* fix test */
      // transformRequest
      // transformResponse

      /* port stuff */

      path: '/wd/hub',

      capabilities: {
        // webSocketUrl: true,
        webSocketUrl: false,//doesnt opt out
        browserName: 'chrome',
        // 'goog:chromeOptions': { args: ['--headless', '--disable-gpu'] }
        // 'goog:chromeOptions': { args: ['headless', 'disable-gpu'] }
        //headless at least works for sure
        //http://host.docker.internal:7900/
        //http://host.docker.internal:4444/ui/#
      },
      //dont think this does anything
    remoteModifier: (capabilities) => {
        console.log('remoteModifier',capabilities);
    }
    });
    await browser.url('http://example.com');
    const text = await browser.$('h1').getText();
    // console.log(text);

    await browser.deleteSession();
    expect(text).toBe('Example Domain');
  });

},100000);


