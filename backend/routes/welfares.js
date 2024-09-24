const express = require("express");
const app = express.Router();

const Welfare = require("../models/Welfare");

app.get("/", (req, res) => {
	Welfare.find()
		.sort({ _id: 1 })
		.then((welfare) => {
			res.send(welfare);
		})
		.catch((err) => res.status(404).json({ nomenuitemsfound: "No social welfare details found" }));
});

module.exports = app;
