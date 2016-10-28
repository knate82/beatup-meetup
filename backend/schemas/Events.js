var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = require('./Users').Schema;

var EventSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	location: {
		street: String,
		city: String,
		state: String
	},
	organizer: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	members: [{
		type: Schema.Types.ObjectId,
		ref: "User"
	}],
	region: {
		type: String,
		required: true,
		enum: ['Salt Lake City', 'Phoenix', 'Seattle', 'New York City']
	},
	comments: [{
		content: String,
		owner: {
			type: Schema.Types.ObjectId,
			ref: "User"
		}
	}],
	imgUrl: String
});

module.exports = mongoose.model('Event', EventSchema);