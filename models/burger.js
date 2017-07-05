
var name = require("../config/orm.js");

module.exports = {
	getAllFromdb: function(results){
		query=("SELECT * FROM burgers");
		name.selectAll(query, results);
	},

	InsertNewBurger: function(req, res){
		query = "INSERT INTO burgers (burger_name, devoured, noteaten) VALUES ('" + [req.body.burger_name] + "', false, true)";
		name.insertOne(query);
	},

	updateABurger: function(req, res){
		query = "UPDATE burgers SET devoured = 1, noteaten = 0 WHERE id = " + [req.body.id];
		name.updateOne(query, req, res)
	}
};
