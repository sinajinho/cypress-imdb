const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.imdb.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    scrollBehavior: false,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    chromeWebSecurity: false,
    supportFile: 'cypress/support/e2e.js',
  },
});
