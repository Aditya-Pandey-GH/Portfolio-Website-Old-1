const express = require("express");
const app = express.Router();

const Acad = require("../models/Acad");

app.get("/", (req, res) => {
	Acad.find()
		.sort({ _id: 1 })
		.then((acad) => {
			res.send(acad);
		})
		.catch((err) => res.status(404).json({ nomenuitemsfound: "No academic details found" }));
});

module.exports = app;
