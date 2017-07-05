// The server file for week 14 homework - the burger app

// Dependencies
var bodyParser = require("body-parser");
var path = require("path");
var methodOverride = require("method-override");
var express = require("express");

// Set up application dependencies
var connection = require("./config/connection.js");
// set up database access dependencies
var db_accessLinks = require("./config/orm.js");
var ormfunctions = require("./models/burger.js");

// Set up Express
var app = express();
// set up the port
var PORT = process.env.PORT || 3000;
// var port = 3000;

// Override with POST having ?_method=add
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up Express for data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//------------------------
// route for the style sheet
app.get("/style", function(req, res){
	res.sendFile(path.join(__dirname, "/public/assets/css/style.css"));
});

// route for the image
app.get("/image", function(req, res){
	res.sendFile(path.join(__dirname, "/public/assets/images/burger.png"));
});

// routes for functionality
app.get("/", function(req, res) {
	ormfunctions.getAllFromdb(res);
});

app.put("/", function(req, res) {
	ormfunctions.InsertNewBurger(req, res);
    res.redirect("/");
  });

app.post("/", function(req, res) {
	ormfunctions.updateABurger(req, res);
  });


app.listen(PORT);
console.log("Listening on port - " + PORT);
