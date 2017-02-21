---
showonlyimage: false
image: https://placeimg.com/350/150/tech?3
date: "2017-01-23T13:00:00-02:00"
title: "Node and TypeScript"
weight: 0
categories:
  - Node
  - TypeScript
---


Recently I met the TypeScript, through the Angular2.

Since then, I started learning about it and decided to create a PoC to check the pros and cons of a backend app written using TypeScript.
<!--more-->

## Transpile
As I said, I met TypeScript through the Angular2. Since Angular runs on the client side (browser) we need to use some transpiler to "translate" the ts code into something that the browser can understand.

As we know, Typescript is a superset of ES2015. So this is the first transpiler that we need. ES2015 is super cool but not 100% available yet. It means we need another transpiler: ES2015 => ES5 - the old known Javascript.

But on the server side, we have more control over the environment. I may not know what's the version of your current browser, I can't be sure if you have the latest Javascript feature. But I can choose which Node version I'll use to run the server.

The latest LTS version of Node has a great support of ES2015. It's safe to use in production.
In this case, we don't need to use that extra transpiler. The first one will be enough: TypeScript => ES2015

## Webpack
Another common component in an Angular2 project is the Webpack. It's an import tool that helps us to build the project. Webpack can apply transpiler in the JS/TS files and also in the SASS/LESS styles. It helps in the minification and concatenation of all resources, creating a single `scripts.min.js` or `styles.min.css`, to name a few. All important steps in a web project.

But in a server side app, none of these processes make sense.
We don't need to minify or concatenate our source.
We still need the transpiler, but just it. Load the Webpack just to generate the Javascript from TypeScript is the same as use a cannon to kill a mosquito. Let's keep it simple.

## Let's code
To start, create a new folder in your workspace, `cd` to this folder, and create a new npm project.
```shell
$ mkdir ~/workspace/node_ts
$ cd ~/workspace/node_ts
$ npm init -y
```

## Express
In spite of our new stack, some things won't change: the framework to manage our endpoints. Yes, [Express](http://expressjs.com/).
We can add the Express in the npm dependencies:

```
$ npm i -S express
```

We are good to start coding our server. Create a new file: `/src/App.ts`

```javascript
import * as express from "express";

class Server {

  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
  }
}

export = Server.bootstrap().app;
```

## Typings
If you're using an IDE/text editor that supports TypeScript, you can see an error: `Could not find a declaration file for module 'express'.`
- If your IDE doesn't support/highlight the TypeScript errors there is no point in using TS. Go there and look for a TypeScript plugin for your IDE.
And it makes sense: the Express isn't a TypeScript project, how can our app know how it works?

We can teach the app how to understand Express: using [Typings](https://github.com/typings/typings). Just add this extra dependency:

```
$ npm i -S @types/express
```

## tsconfig.json
Now it's time to use the transpiler: Create a new config file: `/tsconfig.json`
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "outDir": "./dist",
    "sourceMap": false,
    "target": "es6"
  },
  "include": [
    "src/**"
  ]
}
```
Overview: it'll read all ts source from `/src` folder and generate the Javascript version in the `/dist` folder.

We also need to install the transpiler. It's a node global package (like bower or gulp)
```
$ npm i -g typescript
```
This command allows us to call the transpiler from the command line. Try this:
```
$ tsc
```
The TypeScript compiler reads the config file and "automagically" generate all our js files :D


## Routes
There is another important step: the express' routes. As in a regular node/express project, we still need to register our URIs. Create a new `/src/Routes.ts`
```javascript
import { Router, Request, Response } from "express";

export class Routes {
  public router: Router;

  constructor() {
    this.router = Router();

    // avoid adding login inside a constructor
    this.config();
  }

  config() {
    // here we can register a simple URL: /
    this.router.get('/', (req: Request, res: Response) => {

      // As usual, we can call res.json()
      res.json({
        message: 'Hello World'
      });
    });
  }
}
```

And add this new class inside the `/src/App.ts`
```javascript
import * as express from "express";

// 1: We need to import our new class:
import {Routes} from './Routes';

class Server {

  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();

    // 2: again: avoid login inside constructors
    this.configRoutes();
  }

  configRoutes() {
    // 3: create a new instance of the new class
    const routes = new Routes();

    // 4: Make the app 'use' our routes
    this.app.use(routes.router);
  }
}

export = Server.bootstrap().app;
```

Remind to compile the code again:
```
$ tsc
```

## Running
As you may have noted, we are creating an Express app but not listening to any port.
It'll be useful when we need to test our app.
In order to start our app we can create a simple script. Create a new `/bin/www` file:
```javascript
#!/usr/bin/env node
"use strict";

//module dependencies.
var app = require("../dist/App");
var http = require("http");

//get port from environment and store in Express.
var port = process.env.PORT || 3000;
app.set("port", port);

//create http server
var server = http.createServer(app);

//listen on provided ports
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

As you can see, we are starting the app from the `/dist` folder. It means: plain Javascript.
Check that:
```
$ node bin/www
# Listening on port 3000
```

Now, try to access [http://localhost:3000/](http://localhost:3000/):
![It works!](/images/2017/01/screenshot1.png)


## Conclusion
This app is simple but can show how easy is to use TypeScript in our Node server. The possibilities from this point are endless.
I hope you've enjoyed this small tutorial and consider to use TypeScript in your next project.
