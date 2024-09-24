const express = require("express");
const app = express.Router();

const Prof = require("../models/Prof");

app.get("/", (req, res) => {
	Prof.find()
		.sort({ _id: 1 })
		.then((prof) => {
			res.send(prof);
		})
		.catch((err) => res.status(404).json({ nomenuitemsfound: "No professional projects found" }));
});

module.exports = app;
