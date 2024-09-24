const express = require("express");
const app = express.Router();

const Design = require("../models/Design");

app.get("/", (req, res) => {
	Design.find()
		.sort({ _id: 1 })
		.then((design) => {
			res.send(design);
		})
		.catch((err) => res.status(404).json({ nomenuitemsfound: "No design found" }));
});

module.exports = app;
