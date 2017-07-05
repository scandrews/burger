
var express = require("express");
var runburger = require("./burger.js");


// route for the style sheet
module.exports = app.get("/style", function(req, res){
  res.sendFile(path.join(__dirname, "/public/assets/css/style.css"));
});

// route for the image
module.exports = app.get("/image", function(req, res){
  res.sendFile(path.join(__dirname, "/public/assets/images/burger.png"));
});

// routes for functionality
module.exports = app.get("/", function(req, res) {
  ormfunctions.getAllFromdb(res);
});

module.exports = app.put("/", function(req, res) {
  ormfunctions.InsertNewBurger(req, res);
    res.redirect("/");
  });

module.exports = app.post("/", function(req, res) {
  ormfunctions.updateABurger(req, res);
  });

