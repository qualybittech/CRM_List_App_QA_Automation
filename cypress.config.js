const { defineConfig } = require("cypress");

module.exports = defineConfig({
    defaultCommandTimeout: 30000,
    chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/e2e/**/*.{js,jsx,ts,tsx}",
    experimentalSessionAndOrigin: true
  },
  video: false,
  videoCompression: 32,
  videosFolder: 'cypress/videos',
  viewportHeight: 1000,
  viewportWidth: 1400,
  env: {
    environment: "QA",
  }
});
