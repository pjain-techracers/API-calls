# Hinge Health Services - Javascript

Coding Challenge that exposes 2 APIs to get or update a tree.

## Environment
- NodeJs [v13+](https://nodejs.org/en/download/)
## Packages used
- Express [v4.18.2](https://www.npmjs.com/package/express)


## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependancies. In the root folder run below command.

```bash
npm install
```

## Usage
To run server run

```bash
npm start
```

Else 
- To start your server, run `node index.js`.  Open up your favorite browser and navigate to http://localhost:3001/ and you should see "Hello World!".

Fix eslint of javascript files
```bash
npm run lint:fix
```
## Run with Docker
Build the docker image
```bash
docker build -t hinge-health .
```
Run the docker image 
```bash
docker run -d -p 3001:3001 hinge-health
```

## Assumptions
1. There is no authentication in the APIs.
2. Application used file based in-memory data/tree.json to store the content


