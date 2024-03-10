// Importing strict mode to enforce better coding practices
"use strict";

// Importing the Express application instance from the app.js file
const app = require("./app");

// Importing the PORT constant from the config.js file
const { PORT } = require("./config");

// Starting the Express server and making it listen on the specified port
app.listen(PORT, function () {
  // Logging a message to indicate that the server has started
  console.log(`Server started on http://localhost:${PORT}`);
});
