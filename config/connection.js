var mysql = require("mysql");

// set up the connection
var connection = mysql.createConnection({
	host: "localhost",
	post: "3306",
	user: "scandrews",
	password: "RutBud17",
	database: "burgers_db"
});

// connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting - " + err.stack);
    return;
  }
  console.log("connected as id - " + connection.threadId);
});

module.exports = connection;