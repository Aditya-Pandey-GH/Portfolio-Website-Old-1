const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfSchema = new Schema({
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

module.exports = Prof = mongoose.model('Prof', ProfSchema);
