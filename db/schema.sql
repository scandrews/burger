CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id integer (10) auto_increment not null,
	burger_name varchar (30),
	devoured tinyint,
	burgertime datetime,
	PRIMARY KEY (id)
);

SELECT * FROM burgers;
