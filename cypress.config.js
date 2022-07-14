const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  projectId: '7q723p',
  env: {
    ambiente: 'http://automationpractice.com',
  },
  chromeWebSecurity: false,
  screenshotsFolder: 'cypress/reports/mochareports/assets',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      chart: true,
      ignoreTestFiles: ['*.js', '*.ts', '*.md'],
      reportPageTitle: 'Hervin Camargo',
      embeddedScreenshots: true,
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"]
  },
})
