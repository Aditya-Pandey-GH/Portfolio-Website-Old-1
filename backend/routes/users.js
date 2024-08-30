const express = require('express');
const app = express.Router();

const User = require('../models/User');

app.get('/', (req, res) => {

	User.find()
		.then(user => {
			res.send(user[0]);
		})
		.catch(err => res.status(404).json({ nomenuitemsfound: 'No users found' }));


	// try {
	// 	const userDetails = User.findOne({ regularName: req.query.regularName });
	// 	if (userDetails)
	// 		res.json(userDetails)
	// 	else
	// 		res.status(404).send("Not found")
	// } catch (err) {
	// 	res.status(500).send("Server error");
	// }
});

module.exports = app;
