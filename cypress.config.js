const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
   specPattern: 'api/integration/*.spec.js',
    baseUrl: "http://lojaebac.ebaconline.art.br",
   // specPattern: 'tcc-ebac-qe/api/integration/*.spec.js',
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  },
  

});
