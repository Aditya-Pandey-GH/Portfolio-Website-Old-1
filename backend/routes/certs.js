const express = require("express");
const app = express.Router();

const Cert = require("../models/Cert");

app.get("/", (req, res) => {
	Cert.find()
		.sort({ _id: 1 })
		.then((cert) => {
			res.send(cert);
		})
		.catch((err) => res.status(404).json({ nomenuitemsfound: "No certificates found" }));
});

module.exports = app;
