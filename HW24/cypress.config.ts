import { defineConfig } from "cypress";
import { assetsFolder, baseUrl, defaultWaitingTime } from "./cypress/support/constants/constants";
import AllureWriter from "@shelex/cypress-allure-plugin/writer"

export default defineConfig({
  e2e: {
    specPattern: "HW24/cypress/e2e/**/*.cy.ts",
    baseUrl: baseUrl,
    defaultCommandTimeout: defaultWaitingTime * 5,
    supportFile: "HW24/cypress/support/index.ts",
    videosFolder: `${assetsFolder}/videos`,
    downloadsFolder: `${assetsFolder}/downloads`,
    screenshotsFolder: `${assetsFolder}/screenshots`,
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      AllureWriter(on, config);
      return config;
    },
    env: {
      allure: "true",
      allureResultsPath: `${assetsFolder}/allure-results`
    }

  },
});
