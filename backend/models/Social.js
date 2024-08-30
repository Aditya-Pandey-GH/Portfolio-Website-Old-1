const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SocialSchema = new Schema({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	logo: {
		type: String,
		required: true,
	},
	logoM: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	msg: {
		type: String,
		required: true,
	},
});

module.exports = Social = mongoose.model('Social', SocialSchema);
