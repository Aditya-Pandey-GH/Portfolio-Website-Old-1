const express = require('express');
const app = express.Router();

const XP = require('../models/XP');

app.get('/', (req, res) => {

	XP.find()
		.then(xp => {
			res.send(xp);
		})
		.catch(err => res.status(404).json({ nomenuitemsfound: 'No experience details found' }));
});

module.exports = app;
