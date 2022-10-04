# Node Playground
## Overview
### Purpose
Bare bones Node / TypeScript project skeleton for fast prototyping

### Technologies / Concepts

The following technologies / concepts have been used in this proof of concept:
- [NodeJS](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language that builds on JavaScript
- [Docker](https://docs.docker.com/) - For containerisation of services
- [Docker Compose](https://docs.docker.com/compose/) - For docker container orchestration
- [TS Node](https://www.npmjs.com/package/ts-node) - TypeScript execution engine and REPL for Node.js for JIT transformation of TS into JS
- [ESLint](https://eslint.org/) - In this context this is used for linting the TypeScript
- [JestJS](https://jestjs.io/) - Unit testing / Integrated testing
- [Git](https://git-scm.com/) Version control

## Installation

### Prerequisites
- Docker
- Docker Compose

### Installation steps
`./bin/docker/quickstart`

This command will:
- Create `.env` file from the `.env.dist` file if it doesn't already exist (create it yourself and edit if you want to change the values)
- Build your docker container(s)
- Install node dependencies to the api container
- Start the containers

## Useful scripts

- Quickstart the application `./bin/docker/quickstart`
- Run application (use this if the app is already installed) `./bin/docker/run start.dev`
- Run npm jobs inside the API container from the host `./bin/docker/npm [insert task name here] // e.g. ./bin/docker/npm install`

## Debugging

To configure Visual Code Studio:

- Click Debug icon
- Create a launch file
- Node JS

Add the following to the configurations array in launch.json:

```
{
    "name": "Attach",
    "port": 9229,
    "request": "attach",
    "skipFiles": [
        "<node_internals>/**"
    ],
    "type": "node",
    "remoteRoot": "./app",
    "localRoot": "${workspaceFolder}"
}
```

To run the app in debug mode, run:
`./bin/docker/npm run start.debug`

Because the --inspect-brk flag is present, the code will break on the first line. To start your debugging session in VS code, click the "Start debugging" button (or hit F5).