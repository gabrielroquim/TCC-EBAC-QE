const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: { 
    specPattern: 'cypress/api/integration/*.cy.js',
    specPattern: 'ui/cypress/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: "http://lojaebac.ebaconline.art.br",
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
   
      return config;      
    }    
  },   
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
  },

  

});
