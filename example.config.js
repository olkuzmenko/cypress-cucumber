const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://telnyx.com/',
    specPattern: 'cypress/**/*.feature',
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
  env:{
    allureReuseAfterSpec: true,
  },
  video: true,
  defaultCommandTimeout: 5000,
  responseTimeout: 20000,
  retries: {"runMode": 2, "openMode": 3},
  requestTimeout: 5000,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  video: false
});