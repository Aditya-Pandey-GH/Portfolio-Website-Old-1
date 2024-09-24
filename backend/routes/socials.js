const express = require("express");
const app = express.Router();

const Social = require("../models/Social");

app.get("/", (req, res) => {
	Social.find()
		.sort({ _id: 1 })
		.then((social) => {
			res.send(social);
		})
		.catch((err) => res.status(404).json({ nomenuitemsfound: "No social media accounts found" }));
});

module.exports = app;
