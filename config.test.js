"use strict";

describe("config can come from env", function () {
  // Test to verify that config values can be retrieved from environment variables
  test("works", function() {
    // Setting environment variables
    process.env.SECRET_KEY = "abc";
    process.env.PORT = "5000";
    // process.env.DATABASE_URL = "other";
    // process.env.NODE_ENV = "other";

    // Importing config module
    const config = require("./config");

    // Assertions to check if config values match the set environment variables
    expect(config.SECRET_KEY).toEqual("abc");
    expect(config.PORT).toEqual(5000);
    expect(config.BCRYPT_WORK_FACTOR).toEqual(1); // Default BCRYPT_WORK_FACTOR

    // Cleaning up environment variables
    delete process.env.SECRET_KEY;
    delete process.env.PORT;
    delete process.env.BCRYPT_WORK_FACTOR;
    delete process.env.DATABASE_URL;

    // Asserting default value for DATABASE_URL when NODE_ENV is not set
    expect(config.getDatabaseUri()).toEqual("postgresql:///jobly_test");

    // Setting NODE_ENV to "test"
    process.env.NODE_ENV = "test";

    // Asserting value for DATABASE_URL when NODE_ENV is set to "test"
    expect(config.getDatabaseUri()).toEqual("postgresql:///jobly_test");
  });
});
