const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CertSchema = new Schema({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	by: {
		type: String,
		required: true,
	},
	on: {
		type: String,
		required: true,
	},
	logo: {
		type: String,
		required: true,
	},
	preview: {
		type: String,
		required: true,
	},
});

module.exports = Cert = mongoose.model('Cert', CertSchema);
