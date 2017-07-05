var connection = require("./connection.js");

// connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting - " + err.stack);
    return;
  }
  console.log("connected as id - " + connection.threadId);
});


module.exports = {
	selectAll: function(query, res){
		connection.query(query, function(error, data){
			if (error){
				console.log("query All error");
				throw error;
			};
			console.log(data);
			var availableBurgers = [];
			var eatenBurgers = [];
			for (i=0; i<data.length; i++){
				if (data[i].devoured === 1){
					data[i].devoured = true;
				}
				if (data[i].noteaten === 1){
					data[i].noteaten = true;
				}
			}
			res.render("index", { burgers: data });
		});
	
	},

	insertOne: function(query){
		connection.query(query, function(err, result) {
		    if (err) {
		      throw err;
		    }
		});
	},

	updateOne: function(query, req, res){
		connection.query(query, function(err, result) {
		    if (err) {
		      throw err;
		    }
		    console.log("we're about the re call select all");
	   		query=("SELECT * FROM burgers");
		   	connection.query(query, function(error, data){
				if (error){
					console.log("query All error");
					throw error;
				};
				res.render("index", { burgers: data })
			});
			
		});
	}

// end module exports
}
