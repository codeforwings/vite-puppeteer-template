# Quick Cheat Sheet
## Getting Started
```bash
# Hardcoded Directory
cd "D:\dev_drive_git_repos\webstorm-local\vite-puppeteer-template\tmp"

## relative
cd ./scratchpad/docker-experiments/selenium-grid-hub-nodes

# Docker Compose Command
docker-compose up -d # detached mode
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


# oh this launches it
# curl.exe -X POST http://host.docker.internal:4444/wd/hub/session -H "Content-Type: application/json" -d '{"capabilities": {"alwaysMatch": {"browserName": "chrome"}}}'
```

## Debug / Development
```bash
docker-compose up -d # detached mode
docker-compose up
docker-compose down # remove

docker network ls
```
