var mysql = require("mysql");

// set up the connection
module.exports = mysql.createConnection({
	host: "localhost",
	post: "3306",
	user: "scandrews",
	password: "RutBud17",
	database: "burgers_db"
});

