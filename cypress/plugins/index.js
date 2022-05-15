/// <reference types="cypress" />

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const {execSync} = require('child_process')

//import * as CSV_To_JSON_convertor from "./CSV_To_JSON_convertor.mjs";
//const CSV_To_JSON_convertor = require('./CSV_To_JSON_convertor.mjs'); 

module.exports = (on, config) => {
   // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

//below syntax of before:run is to execute only once before all tests (as our test data conversion is a single step
// converting only once is fine
on('before:run', (details) => {
//on('before:before', (details) => {
		execSync("npm run refresh_Json_Test_data");
})
}



