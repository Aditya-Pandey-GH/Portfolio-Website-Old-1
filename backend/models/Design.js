const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DesignSchema = new Schema({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	type: {
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

module.exports = Design = mongoose.model("Design", DesignSchema);
