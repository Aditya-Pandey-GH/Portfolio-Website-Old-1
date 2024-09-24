const express = require("express");
const app = express.Router();

const DB = require("../models/DB");

app.get("/", (req, res) => {
	DB.find()
		.sort({ skill: -1 })
		.then((db) => {
			res.send(db);
		})
		.catch((err) => res.status(404).json({ nomenuitemsfound: "No database related details found" }));
});

module.exports = app;
