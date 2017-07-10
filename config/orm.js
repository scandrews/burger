var connection = require("./connection.js");

module.exports = {
	selectAll: function(query, req, res){
		connection.query(query, function(error, data){
			if (error){
				console.log("query All error");
				throw error;
			};
			console.log(data);
			for (i=0; i<data.length; i++){
				if (data[i].devoured === 1){
					data[i].devoured = true;
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
		console.log(query);
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
	},

	deleteOne: function(query, req, res){
		console.log(query);
		connection.query(query, function(err, result) {
		    if (err) {
		      throw err;
		    }
			connection.query("SELECT * FROM burgers", function(error, data){
				if (error){
					console.log("query All error");
					throw error;
				};
				console.log(data);
				// for (i=0; i<data.length; i++){
				// 	if (data[i].devoured === 1){
				// 		data[i].devoured = true;
				// 	}
				// };
				res.render("index", { burgers: data });
			});
		});
	}


// end module exports
}
