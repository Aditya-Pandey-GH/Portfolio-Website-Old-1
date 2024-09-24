const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LangSchema = new Schema({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	skill: {
		type: Number,
		required: true,
	},
	logo: {
		type: String,
		required: true,
	},
});

module.exports = Lang = mongoose.model('Lang', LangSchema);
