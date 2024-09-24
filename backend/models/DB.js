const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DBSchema = new Schema({
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

module.exports = DB = mongoose.model('DB', DBSchema);
