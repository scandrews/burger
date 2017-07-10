
var express = require("express");
var runburger = require("../models/burger.js");
var router = express.Router();


// routes for functionality
router.get("/", function(req, res) {
	runburger.getAllFromdb(req, res);
});

router.put("/", function(req, res) {
	runburger.InsertNewBurger(req, res);
    res.redirect("/");
  });

router.post("/", function(req, res) {
	runburger.updateABurger(req, res);
  });

router.delete("/", function(req, res) {
	runburger.deleteABurger(req, res);
  });

//------------------------
// route for the style sheet
// router.get("/style", function(req, res){
// 	res.sendFile(path.join(__dirname, "../public/assets/css/style.css"));
// });

// // route for the image
// router.get("/url", function(req, res){
// 	console.log("we got the image request");
// 	res.sendFile(path.join(__dirname, "../public/assets/images/burger.png"));
// });


module.exports = router;