
DROP DATABASE if EXISTS seingeld_db;

CREATE DATABASE seinfeld_db;

USE seinfeld_db;

CREATE TABLE actors (
	id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    coolness_points INT NOT NULL,
    attitude VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO actors  VALUES ("Jerry", 30, "sarcastic");
INSERT INTO actors  VALUES ("Elaine", 50, "funny");
INSERT INTO actors  VALUES ("George", 2, "annoying");
INSERT INTO actors  VALUES ("Kramer", 100, "crazy");


