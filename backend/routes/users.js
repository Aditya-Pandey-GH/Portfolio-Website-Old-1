const express = require("express");
const app = express.Router();

const User = require("../models/User");

app.get("/", (req, res) => {
	User.find()
		.sort({ _id: 1 })
		.then((user) => {
			res.send(user[0]);
		})
		.catch((err) => res.status(404).json({ nomenuitemsfound: "No users found" }));
});

module.exports = app;
