var mysql = require("mysql");
var connection;

// set up the connection
if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "scandrews",
	password: "RutBud17",
	database: "burgers_db"
});
};

// connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting - " + err.stack);
    return;
  }
  console.log("connected as id - " + connection.threadId);
});

module.exports = connection;