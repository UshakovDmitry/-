Error: You are attempting to run a TypeScript file, but do not have TypeScript installed. Ensure you have 'typescript' installed to enable TypeScript support.

The file: C:\Users\ushakov.dmitriy\Desktop\Projects\cypress\alser.testui.cypresslibrary\cypress\e2e\alsertest.alser.kz\transport-page\dropdownCities.cy.ts
    at Object.handler (C:\Users\ushakov.dmitriy\AppData\Local\Cypress\Cache\12.17.4\Cypress\resources\app\node_modules\@packages\server\node_modules\@cypress\webpack-batteries-included-preprocessor\index.js:191:29)
    at invoke (C:\Users\ushakov.dmitriy\AppData\Local\Cypress\Cache\12.17.4\Cypress\resources\app\node_modules\@packages\server\lib\plugins\child\run_plugins.js:183:18)
    at C:\Users\ushakov.dmitriy\AppData\Local\Cypress\Cache\12.17.4\Cypress\resources\app\node_modules\@packages\server\lib\plugins\util.js:59:14
    at tryCatcher (C:\Users\ushakov.dmitriy\AppData\Local\Cypress\Cache\12.17.4\Cypress\resources\app\node_modules\bluebird\js\release\util.js:16:23)
    at Function.Promise.attempt.Promise.try (C:\Users\ushakov.dmitriy\AppData\Local\Cypress\Cache\12.17.4\Cypress\resources\app\node_modules\bluebird\js\release\method.js:39:29)
    at Object.wrapChildPromise (C:\Users\ushakov.dmitriy\AppData\Local\Cypress\Cache\12.17.4\Cypress\resources\app\node_modules\@packages\server\lib\plugins\util.js:58:23)
    at Object.wrap (C:\Users\ushakov.dmitriy\AppData\Local\Cypress\Cache\12.17.4\Cypress\resources\app\node_modules\@packages\server\lib\plugins\child\preprocessor.js:47:8)
    at RunPlugins.execute (C:\Users\ushakov.dmitriy\AppData\Local\Cypress\Cache\12.17.4\Cypress\resources\app\node_modules\@packages\server\lib\plugins\child\run_plugins.js:157:29)
    at EventEmitter.<anonymous> (C:\Users\ushakov.dmitriy\AppData\Local\Cypress\Cache\12.17.4\Cypress\resources\app\node_modules\@packages\server\lib\plugins\child\run_plugins.js:56:12)
    at EventEmitter.emit (node:events:526:28)
    at process.<anonymous> (C:\Users\ushakov.dmitriy\AppData\Local\Cypress\Cache\12.17.4\Cypress\resources\app\node_modules\@packages\server\lib\plugins\util.js:33:22)
    at process.emit (node:events:526:28)
    at emit (node:internal/child_process:938:14)
    at processTicksAndRej









const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1536,
  viewportHeight: 864,
  e2e: {
    baseUrl: "http://tms.next.local",
    // baseUrl: "https://alsertest.alser.kz",
  },
});
