const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  videoCompression: false,
  videosFolder: 'cypress/videos'
})
