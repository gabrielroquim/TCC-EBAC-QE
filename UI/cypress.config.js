const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    //specPattern: 'cypress/api/integration/*.cy.js',
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: "http://lojaebac.ebaconline.art.br",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  },
});