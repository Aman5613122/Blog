const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");

//for static file (css)
app.use(express.static("public"));

//for ejs files (html)
app.set("view engine", "ejs");

//for parsing detail of the form
app.use(bodyParser.urlencoded({ extended: true }));

//roter passing
const route = require("./router")(app);

//for server
app.listen(3000, function () {
  console.log("server started");
});
