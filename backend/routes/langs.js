const express = require("express");
const app = express.Router();

const Lang = require("../models/Lang");

app.get("/", (req, res) => {
	Lang.find()
		.sort({ _id: 1 })
		.then((lang) => {
			res.send(lang);
		})
		.catch((err) => res.status(404).json({ nomenuitemsfound: "No programming languages related details found" }));
});

module.exports = app;
