
var name = require("../config/orm.js");

module.exports = {
	getAllFromdb: function(request, results){
		query=("SELECT * FROM burgers");
		name.selectAll(query, request, results);
	},

	InsertNewBurger: function(req, res){
		query = "INSERT INTO burgers (burger_name, devoured, burgertime) VALUES ('" + [req.body.burger_name] + "', false, current_timestamp())";
		name.insertOne(query);
	},

	updateABurger: function(req, res){
		query = "UPDATE burgers SET devoured = 1 WHERE id = " + [req.body.id];
		name.updateOne(query, req, res)
	},

	deleteABurger: function(req, res){
		query = "DELETE FROM burgers WHERE id = " + [req.body.id];
		name.deleteOne(query, req, res)
	}
};
