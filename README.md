# silver-mene

## deveopment instructions

install client packages

```bash
cd client
npm i
```

install backend packages

```bash
cd backend
npm i
```

In the project root, install npm concurrently and run client and backend simultaneusly

```bash
npm i
npm start
```

## Docker

Build and push to dockerhub

```bash
docker login
docker build . -t jmsalonen/silver-mene:latest
docker push jmsalonen/silver-mene:latest
```

Docker run

```bash
docker run -p 3000:3000 jmsalonen/silver-mene:latest
```
