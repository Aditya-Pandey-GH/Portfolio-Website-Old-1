const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const XPSchema = new Schema({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	xp: {
		type: String,
		required: true,
	},
	logo: {
		type: String,
		required: true,
	},
	from: {
		type: String,
		required: true,
	},
	to: {
		type: String,
		required: true,
	},
});

module.exports = XP = mongoose.model('XP', XPSchema);
