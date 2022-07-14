// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';
// Alternatively you can use CommonJS syntax:
// require('./commands')


Cypress.Screenshot.defaults({
    capture: 'fullPage', scale: false,
    screenshotOnRunFailure: false,
    overwrite: false
  })
  /*
  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      Cypress.runner.stop()
    }
  })
  */
Cypress.on("test:after:run", (test, runnable) => {  
  if (test.state === "failed") {    
    const screenshot =`assets/${Cypress.spec.name}/${runnable.parent.title} --       ${test.title} (failed).png`;    
    addContext({ test }, screenshot);  
  }
})
