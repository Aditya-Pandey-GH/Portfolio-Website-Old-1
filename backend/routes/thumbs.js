const express = require('express');
const app = express.Router();

const Thumb = require('../models/Thumb');

app.get('/', (req, res) => {

	Thumb.find()
		.then(thumb => {
			res.send(thumb);
		})
		.catch(err => res.status(404).json({ nomenuitemsfound: 'No thumbnail found' }));
});

module.exports = app;
