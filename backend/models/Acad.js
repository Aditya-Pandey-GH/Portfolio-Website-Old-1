const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const acadSchema = new Schema({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	start: {
		type: String,
		required: true,
	},
	end: {
		type: String,
		required: true,
	},
	school: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	board: {
		type: String,
		required: true,
	},
});

module.exports = Acad = mongoose.model('acad', acadSchema);
