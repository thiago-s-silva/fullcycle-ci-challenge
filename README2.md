## Run sonarqube web app container
```js
docker run -d --name sonarqube -p 9000:9000 --network serverNetwork davealdon/sonarqube-with-docker-and-m1-macs
```

## Run sonar scanner container
```js
docker run \
    --rm \
    --name sonar-scanner \
    --network serverNetwork \
    -e SONAR_HOST_URL="http://sonarqube:9000" \
    -e SONAR_LOGIN="54fb5e09ce6e5c429b9993d4ffa2f114f8bd9e15" \
    -v "/Users/thiagosilva/docker-compose/sonarQube/node-rest-api/src" \
    sonarsource/sonar-scanner-cli
```