var mysql = require("mysql");

// set up the connection
if (process.env.JAWSDB_URL){
	connection = mysql.createconnection(process.env.JAWSDB_URL);
} else {
	
var connection = mysql.createConnection({
	host: "localhost",
	post: "3306",
	user: "scandrews",
	password: "hacktheplanet",
	database: "todoagain_db"
}
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