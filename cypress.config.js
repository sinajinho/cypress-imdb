const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl: 'https://www.imdb.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    scrollBehavior: false,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    chromeWebSecurity: false,
    supportFile: 'cypress/support/e2e.js',
  },
});
