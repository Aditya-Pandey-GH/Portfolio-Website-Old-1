const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AchSchema = new Schema({
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
	logo: {
		type: String,
		required: true,
	},
});

module.exports = Ach = mongoose.model('Ach', AchSchema);
