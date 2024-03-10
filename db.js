"use strict";
/** Database setup for jobly. */

const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

// Checking the environment to determine database configuration
if (process.env.NODE_ENV === "production") {
  // In production environment, use SSL configuration
  db = new Client({
    connectionString: getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false // Disabling SSL certificate validation
    }
  });
} else {
  // In non-production environments, use regular configuration
  db = new Client({
    connectionString: getDatabaseUri()
  });
}

// Connecting to the database
db.connect();

module.exports = db;
