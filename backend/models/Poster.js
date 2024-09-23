const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PosterSchema = new Schema({
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
	logo: {
		type: String,
		required: true,
	},
	// preview: {
	// 	type: String,
	// 	required: true,
	// },
});

module.exports = Poster = mongoose.model("Poster", PosterSchema);
