const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TechSchema = new Schema({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	tech: {
		type: String,
		required: true,
	},
	sect: {
		type: String,
		required: true,
	},
	lang: {
		type: String,
		required: true,
	},
	logo: {
		type: String,
		required: true,
	},
});

module.exports = Tech = mongoose.model('Tech', TechSchema);
