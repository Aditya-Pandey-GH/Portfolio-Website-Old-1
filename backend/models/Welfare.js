const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WelfareSchema = new Schema({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	year: {
		type: String,
		required: true,
	},
});

module.exports = Welfare = mongoose.model('Welfare', WelfareSchema);
