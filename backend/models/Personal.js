const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonalSchema = new Schema({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	lang: {
		type: Object,
		required: true,
	},
	logo: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
});

module.exports = Personal = mongoose.model('Personal', PersonalSchema);
