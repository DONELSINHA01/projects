const mng = require("mongoose");
const mngSchema = mng.Schema;

const ProductData = new mngSchema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	tenth: {
		type: Number,
		required: true,
	},
	twelth: {
		type: Number,
		required: true,
	},
	graduation: {
		type: Number,
		required: true,
	},
	graduationYear: {
		type: String,
		required: true,
	},
	logginEmail: {
		type: String,
		required: true,
	},
	resume: {
		type: String,
		required: true,
	},
	option: {
		type: String,
		required: true,
	},
});

module.exports = mng.model("ProductData", ProductData);
