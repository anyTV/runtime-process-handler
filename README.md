# Zoro
Handler for runtime processes and events on NodeJS

<img src="https://i.pinimg.com/originals/ce/0d/9c/ce0d9c3de975cabe693fc1bec8982100.jpg" height="500">

# Overview
This library provides the following:
  1. Error monitoring during runtime processes
      - create error listeners for catching all code-based issues during project runtime
      - format as message to provide informative reports

# Installation
To use this, simply install it on a nodejs project by `npm i runtime-process-handler`

# Prerequisite
To be able to know what are the process events you can trigger or start listening to, you may refer to the following reference:
[NodeJS Process](https://nodejs.org/api/process.html)

# Usage

1. On your index.js / server.js / app.js, require the package
```javascript
const RuntimeProcessHandler = require('runtime-process-handler');
```
2. Create an instance of the handler
```javascript
let runtimeProcessHandler = new RuntimeProcessHandler(
  processInstanceOfYourNodeJsProject, // process
  listOfEventsToHandleInArrayFormat, // [ 'processEvent1', 'processEvent2' ... ]
  callbackWhenEventsAreTriggered
);
```

3. Start the runtime process handler
```javascript
runtimeProcessHandler.start();
```

4. (Sample) Your events' callback function
```javascript
function callbackWhenEventsAreTriggered (res) {
   sendEmailFunc(res);
}
```
