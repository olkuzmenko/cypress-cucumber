const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    async setupNodeEvents(on, config) {
      allureWriter(on, config);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
      // implement node event listeners here
    },
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  env:{
    allureReuseAfterSpec: true,
    mainPageUrl: 'https://telnyx.com/',
    loginPageUrl: 'https://portal.telnyx.com/#/login/sign-in'
  }
  
});
