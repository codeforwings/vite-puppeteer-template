# Quick Cheat Sheet
## Getting Started
```bash
# Hardcoded Directory
cd "D:\dev_drive_git_repos\webstorm-local\vite-puppeteer-template\tmp"

## relative
cd ./scratchpad/docker-experiments/selenium-grid-hub-nodes

# Docker Compose Command
docker-compose up -d # detached mode

# one time:
docker network create grid
```
## Links
* http://host.docker.internal:4444/ui/#
* http://host.docker.internal:7900/
* http://host.docker.internal:7901

### unit test
* todo
```bash
# just curl to see if two chromes are running
curl.exe -X GET http://host.docker.internal:4444/wd/hub/status

# kill sessions manually:
curl.exe -X DELETE http://host.docker.internal:4444/wd/hub/session/{sessionId}
## http://host.docker.internal:4444/ui/#/sessions
curl.exe -X DELETE http://host.docker.internal:4444/wd/hub/session/


# oh this launches it
# curl.exe -X POST http://host.docker.internal:4444/wd/hub/session -H "Content-Type: application/json" -d '{"capabilities": {"alwaysMatch": {"browserName": "chrome"}}}'
```
### js unit test
* todo
* `    "test-webdriverio-docker": "vitest --run --testNamePattern=^webdriver\\.io remote example\\.com$ ./tests/selenium-grid-docker.spec.js"
`
```bash
pnpm run test-webdriverio-docker
```


## Debug / Development
```bash
docker-compose up -d # detached mode
docker-compose up
docker-compose down # remove

docker network ls
docker network create grid
```



# Docker / WSL debug
* https://stackoverflow.com/questions/62314789/no-internet-connection-on-wsl-ubuntu-windows-subsystem-for-linux
* i think my wsl might have issues
```ps1
gsudo.exe

netsh winsock reset
netsh int ip reset all
netsh winhttp reset proxy
ipconfig /flushdns

# then reboot now windows
Restart-Computer
```