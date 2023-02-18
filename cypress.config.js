const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'x3oxe3',
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br",
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  },

});
