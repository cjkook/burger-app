// Dependencies
var exhandle = require("express-handlebars");
var express = require("express");
var routes = require("./controllers/burgers_controller.js");
var connection = require("./config/connection.js");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exhandle({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// * Routes
app.use(routes)

app.listen(PORT, function() {
  console.log("App now listening on:" + PORT);
});
