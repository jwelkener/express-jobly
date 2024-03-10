const request = require("supertest"); // Importing supertest for making HTTP requests
const app = require("./app"); // Importing the Express application instance
const db = require("./db"); // Importing the database connection instance

// Test for 404 Not Found
test("not found for site 404", async function () {
  // Making a GET request to a non-existing route
  const resp = await request(app).get("/no-such-path");
  // Expecting the response status code to be 404
  expect(resp.statusCode).toEqual(404);
});

// Test for 404 Not Found with Stack Print
test("not found for site 404 (test stack print)", async function () {
  process.env.NODE_ENV = ""; // Setting NODE_ENV to empty string
  // Making a GET request to a non-existing route
  const resp = await request(app).get("/no-such-path");
  // Expecting the response status code to be 404
  expect(resp.statusCode).toEqual(404);
  delete process.env.NODE_ENV; // Deleting NODE_ENV variable after the test
});

// Teardown: Closing the database connection after all tests have completed
afterAll(function () {
  db.end();
});
