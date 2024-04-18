const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const userSchema = new mongoose.Schema({
	name:String,
    contect:{
        type: Number,
        require:true,
    },
	username:{
		type: String,
		required: true,
		unique: true,
	},
	password:{ 
		type: String,
		required: true, 
	},
},{timestamps: true});
const User= mongoose.model("User",userSchema);
module.exports = User;
