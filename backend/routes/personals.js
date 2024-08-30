const express = require('express');
const app = express.Router();

const Personal = require('../models/Personal');

app.get('/', (req, res) => {

	Personal.find()
		.then(personal => {
			res.send(personal);
		})
		.catch(err => res.status(404).json({ nomenuitemsfound: 'No personal projects found' }));
});

module.exports = app;
