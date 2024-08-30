const express = require('express');
const app = express.Router();

const Tech = require('../models/Tech');

app.get('/', (req, res) => {

	Tech.find()
		.then(tech => {
			res.send(tech);
		})
		.catch(err => res.status(404).json({ nomenuitemsfound: 'No tech stack details found' }));
});

module.exports = app;
