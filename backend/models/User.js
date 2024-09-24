const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	regularName: {
		type: String,
		required: true
	},
	capsName: {
		type: String,
		required: true
	},
	dob: {
		type: String,
		required: true
	},
	profession: {
		type: Object,
		required: true
	},
	pfp: {
		type: String,
		required: true
	},
	resumeLink: {
		type: String,
		required: true
	},
});

module.exports = User = mongoose.model('user', userSchema);
