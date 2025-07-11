# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# Links
* [StackBlitz Demo](https://stackblitz.com/~/github.com/codeforwings/vite-puppeteer-template)
* [repl.it](https://replit.com/@jason198/vite-puppeteer-template)
# Notes
* Vitest doesn't quite support puppeteer yet. Only Webdriver.io and Playwright.
  * `Webdriver.io` is sponsored by BrowserStack, and based on Selenium.
  * `Playwright` is sponsored by Microsoft, and is a newer project that supports multiple browsers.
    * Syntax more similar to Puppeteer with async/await.
* StackBlitz uses Node 20
  * Can't install for some reason?
  * 
* https://replit.com/
  * Doesn't work either, at least by default 
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
npx puppeteer browsers install chrome
pnpm exec puppeteer browsers install --help

pnpm exec puppeteer browsers install chrome
pnpm exec puppeteer browsers install chromium-headless-shell



pnpx vitest --run --testNamePattern='^ ?Example.com example.com - headless$' tests/example-headless.test.js

# Testing
pnpx run test-headless
sudo pnpx run test-headless
```
## PlayWright
* https://playwright.dev/docs/intro
* also has `playwright.config.js`/ts
  * Can be configured to launch server
* default is e2e or tests. tests-example as well
```bash
pnpm create playwright
# using: js, GA, install playwright

# done in the wizard:
pnpm exec playwright install
pnpm exec playwright install --help

# looking at the playwright.yml
npx playwright install --with-deps chromium
```
```bash
# Playwright server? for remote browser?
npx playwright install
npx playwright launch-server chromium
# launches a browser server and prints the ws:// endpoint
```

### Run/Test
```bash
# Working so far on new project
# pnpm install playwright -D
pnpm install @playwright/test -D
pnpm exec playwright install --with-deps chromium

# Exec - e2e is in the config
pnpm exec playwright test

pnpm exec playwright test

```
## Selenium-WebDriver
* * https://www.selenium.dev/documentation/grid/getting_started/
### Java - Linux
* Seems easier
```bash
# Ubuntu 24
# check java version
java -version
which java

# Install java jre or jdk
apt list --installed | grep default-jre
# apt list --installed | grep default-jdk
sudo apt install default-jdk
```
```bash
# Run - Ubuntu/Debian
tmux
java -jar /opt/selenium/selenium-server.jar standalone --help
java -jar /opt/selenium/selenium-server.jar standalone
## With first IP address
java -jar /opt/selenium/selenium-server.jar standalone --host $(hostname -I | awk '{print $1}') --allow-cors true

# Get the first IP address from hostname -I
ip=$(hostname -I | awk '{print $1}')
echo $ip

curl http://example.com
```

#### debug
```bash
tree /opt/google/chrome/chrome
tree /opt/google/chrome/
```

### Docker
* [ ] Fix Docker Network settings. for java it's --host
  * https://www.selenium.dev/documentation/grid/configuration/cli_options/
```bash
### Selenium WebDriver
* https://www.npmjs.com/package/selenium-webdriver
  * `selenium-webdriver`
* requires `chromedriver`
* https://github.com/SeleniumHQ/docker-selenium
  * Docker Selenium is the one that uses noVNC
* webdriver.io can run on Selenium-webdriver


* http://localhost:4444/ui/
```
```bash
# Can try with minis on linux as well to see
# docker run -d -p 4444:4444 selenium/standalone-chrome
# 127.0.0.1:9000:9000/udp
# docker run -d -p 172.17.0.2:4444:4444/udp 172.17.0.2:4444:4444/tcp selenium/standalone-chrome
# docker run -d -p 172.17.0.2:4444:4444/udp -p 172.17.0.2:4444:4444/tcp selenium/standalone-chrome
# docker run -d -p 4444:4444/udp -p 4444:4444/tcp selenium/standalone-chrome

# nope.. but at least it's kinda close? also should add the exec for testing. and the shm size...
docker run -p 4444:4444 -e SE_NODE_HOST=host.docker.internal -e SE_BIND_HOST=0.0.0.0 selenium/standalone-chrome
docker run -p 4444:4444 -e SE_NODE_HOST=host.docker.internal -e SE_BIND_HOST=192.168.1.58 selenium/standalone-chrome
docker container ls
```
* [ ] check readmeSelenium.md for more details and add. i have the settings there

```bash
# sudo run 2025
sudo docker pull selenium/standalone-chrome:latest
sudo docker run --name c1 -d -p 4444:4444 -p 7900:7900 --shm-size="2g" --hostname c1 selenium/standalone-chrome:latest

# trying with extra settings
sudo docker run --name c1 -d -p 4444:4444 -p 5900:5900 -p 7900:7900 --shm-size="2g" --hostname c1 selenium/standalone-chrome:latest


sudo docker container ls
sudo docker network ls
sudo docker network inspect host
sudo docker inspect c1

sudo docker start c1
sudo docker stop c1
sudo docker rm c1
```

```bash
docker run -d -p 4444:4444 -p 5900:5900 --shm-size="2g" selenium/standalone-chrome:4.33.0-20250606


# launch  -d vs --rm -it
sudo docker run -d --shm-size="2g" --name=c1 --network=host selenium/standalone-chrome:latest
# launch inside
sudo docker run --rm -it --shm-size="2g" --name=c1 --network=host selenium/standalone-chrome:latest



# SE_NODE_GRID_URL=http://<hostMachine>:4444
$ docker run -d -p 5555:5555 `
    --shm-size="2g" `
    -e SE_EVENT_BUS_HOST=<ip-from-machine-1> `
    -e SE_NODE_HOST=<ip-from-machine-2> `
    selenium/node-chrome:4.33.0-20250606
```



## Other versions?
* https://github.com/SeleniumHQ/docker-selenium
  * docs
* https://hub.docker.com/r/selenium/standalone-chrome
  * the one tried first
* https://hub.docker.com/r/selenium/standalone-docker
#### Docker Network Check / Install hub
* https://hub.docker.com/r/selenium/hub
```bash
sudo docker network ls # Check for network called selenium-hub
sudo docker network ls | grep grid
```
* host.docker.internal
* http://172.18.0.2:4444/
```bash
sudo docker network create grid

# delete if needed
sudo docker inspect grid
sudo docker network rm grid
```
```bash
sudo docker stop selenium-hub
sudo docker rm selenium-hub

sudo docker container ls --all
sudo docker container ls | grep c1

# C1 - debug
sudo docker inspect c1
sudo docker container ls
sudo docker start c1
sudo docker stop c1
sudo docker rm c1

sudo docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' c1
sudo docker inspect c1
sudo docker inspect c1 |grep -i SE_NODE_GRID_URL
sudo docker inspect c1 |grep -i URL
sudo docker inspect c1 |grep -i SE_

```
* SE_START_XVFB - for headless
##### 1. Hub
* meant for running on remote
```bash
sudo docker run -d -p 4442-4444:4442-4444 --net grid --name selenium-hub selenium/hub:latest

sudo docker container ls
sudo docker container ls |grep selenium-hub
```
#### 2. Nodes
```bash
# renamed to c1
docker run -d --net grid -e SE_EVENT_BUS_HOST=selenium-hub --shm-size="2g" -e SE_EVENT_BUS_PUBLISH_PORT=4442 -e SE_EVENT_BUS_SUBSCRIBE_PORT=4443 --name c1 selenium/node-chrome:latest
```
* difference seems like selenium/`standalone`-chrome vs `node`-chrome
  * standalone is meant for local only. hub + node[s] is for remote
```bash
# Full Example from docs
docker run -d --net grid -e SE_EVENT_BUS_HOST=selenium-hub \
    --shm-size="2g" \
    -e SE_EVENT_BUS_PUBLISH_PORT=4442 \
    -e SE_EVENT_BUS_SUBSCRIBE_PORT=4443 \
    selenium/node-chrome:latest

docker run -d --net grid -e SE_EVENT_BUS_HOST=selenium-hub \
    --shm-size="2g" \
    -e SE_EVENT_BUS_PUBLISH_PORT=4442 \
    -e SE_EVENT_BUS_SUBSCRIBE_PORT=4443 \
    selenium/node-edge:latest

docker run -d --net grid -e SE_EVENT_BUS_HOST=selenium-hub \
    --shm-size="2g" \
    -e SE_EVENT_BUS_PUBLISH_PORT=4442 \
    -e SE_EVENT_BUS_SUBSCRIBE_PORT=4443 \
    selenium/node-firefox:latest

```

* misc commands:
  * http://localhost:4444/ui/
  * http://172.18.0.3:5555
    * c1 node
```bash
sudo docker image ls
sudo docker container ls
```
```ps1
sudo docker network ls
# shows bridge,host,none - linux
# shows bridge,conda-jupyter-node_default,docker_default,host,none - windows
# more information
sudo docker network inspect bridge # 172.17.0.0/16 172.17.0.1
sudo docker network inspect docker_default #172.21.0.0/16 172.21.0.1
sudo docker network inspect host

# inspect c1 container
sudo docker inspect c1
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
