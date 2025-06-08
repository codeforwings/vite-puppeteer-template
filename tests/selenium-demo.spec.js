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
      // protocol: 'http',

      // hostname: 'localhost', // or your Docker host IP
      // hostname: '192.168.1.58', // or your Docker host IP
      // protocol: 'http',
      // hostname:"172.17.0.2",
      /* Other Machine */
      // hostname: "192.168.1.116", // host.docker.internal work?
      // port: 4444,
      // path: '/wd/hub',

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

    await browser.deleteSession();
    expect(text).toBe('Example Domain');
  });

  test('webetmarkets.com', async function(){
    const browser = await remote({
      capabilities: {
        browserName: 'chrome',
        // 'goog:chromeOptions': { args: ['--headless', '--disable-gpu'] }
      },

    });
    await browser.url('https://webetmarkets.com/app/');
    {
      const text = await browser.$(
        '#vMain > div > div > div:nth-child(1) > div > div > div > div.v-snack__action > button > span'
      )
        .getText();
      console.log(text);
      expect(text).toBe('CLOSE');
      // expect(text).toBe('Example Domain');//dev: uncomment to keep it open
    }
    {
      //try clicking in the middle of the line?

      //Get Element of the canvas
      console.log('1. Check Graph Element Dimensions');
      const sChartSelector = '#mvbpPageLayout2025-real-default > div.px-0.mx-0.py-0.mx-0.col.col-12';
      // const graphElement = await browser.$(sChartSelector).getElement();
      const graphElement = await browser.$(sChartSelector);
      console.log(graphElement.selector);
      const {x,y} = await graphElement.getLocation();
      const {width,height} = await graphElement.getSize();
      const rect = { x, y, width, height };
      //log dimensions
      // const rect = await browser.getElementRect(graphElement.getElement().elementId);
      // const ryect = await graphElement.get
      console.log('Graph Element Dimensions:', rect);
      // const { x, y, width, height } = rect;
      // const { x, y, width, height } = rect;


      const midX = width / 2;
      const midY = height / 2;
      const xClick = x + Math.floor(midX);
      const yClick = Math.floor(y + midY);
      console.log('Clicking at:', { x: xClick, y: yClick });
      //might be off
      // await graphElement.click({
      await browser.$('body').click({
        x: xClick,
        y: yClick
      });
      // await page.mouse.click(x + midX, y + midY);//pretty close i think

    }



    await browser.deleteSession();
  });
},100000);


