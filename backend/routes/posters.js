const express = require('express');
const app = express.Router();

const Poster = require('../models/Poster');

app.get('/', (req, res) => {

	Poster.find()
		.then(poster => {
			res.send(poster);
		})
		.catch(err => res.status(404).json({ nomenuitemsfound: 'No poster found' }));
});

module.exports = app;
