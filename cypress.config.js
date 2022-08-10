const cucumber = require('cypress-cucumber-preprocessor').default
const sqlServer = require('cypress-sql-server');
// for sql server
const dbConfig = require('../CypressAutomationBDD/cypress.config.js');

//for mysql
const mysql = require('mysql')
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials given below
  const connection = mysql.createConnection(config.env.db)
  // start connection to db
  connection.connect()
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}

module.exports = {
  projectId: 'vgkos1',
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 10000,
 // reporter: 'mochawesome',
 reporter: "cypress-multi-reporters",
 reporterOptions: {
   reporterEnabled: "mochawesome",
   mochawesomeReporterOptions: {
     reportDir: "cypress/reports/mocha",
     screenshotOnRunFailure: true,
     quite: true,
     overwrite: false,
     html: false,
     json: true
   }

 },
screenshotsFolder: "cypress/reports/mochareports/assets",
  retries: {
    runMode: 0,
    openMode: 0
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      //for BDD
      on('file:preprocessor', cucumber())

      //for mysql
      // Usage: cy.task('queryDb', query)
      on('task', {
        queryDb: query => {
          return queryTestDb(query, config)
        },
      })
      return config;

      // for sql server
      tasks = sqlServer.loadDBPlugin(dbConfig.db);
      on('task', tasks);

    },
    specPattern: ['cypress/integration/examples/BDD/*.feature', 'cypress/integration/examples/*.js', 'cypress/integration/examples/API/*.js']
  },




  // framework: 'cypress',

  // mochaOpts: {
  //     reporter: 'mochawesome-screenshots',
  //     reporterOptions: {
  //         reportDir: 'customReportDir',
  //         reportName: 'customReportName',
  //         reportTitle: 'customReportTitle',
  //         reportPageTitle: 'customReportPageTitle',
  //         takePassedScreenshot: false,
  //         clearOldScreenshots: true,
  //         shortScrFileNames: false,
  //         jsonReport: false,
  //         multiReport: false
  //     },
  //     timeout: 600000
  // },

  //for mysql
  env: {
    url: 'https://rahulshettyacademy.com',
    db: {
      host: "localhost",
      user: "root",
      password: "root",
      database: "shl"
    },
  },

  /* for sql server - not tried need sql server azure account
  db: {
    userName: "root",
    password: "root",
    server: "127.0.0.1",
    options: {
      database: "shl",
      encrypt: true,
      rowCollectionOnRequestCompletion: true
    }
  },*/

}


