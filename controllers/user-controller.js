const path = require("path");
const passport = require("passport");
const User = require("../models/user");


module.exports.signin = function(req,res){
    res.render("signin")
};

module.exports.signup = function(req,res){
    res.render("signup")
};

module.exports.createuser = async function(req,res){
	try{
		if(req.body.password!=req.body.confirm_password){
			res.redirect("back");
		}
		let user = await User.findOne({username: req.body.Username});
		if(user==null){
			console.log(  user ,"req body:   ",req.body)
			await User.create({
			name: req.body.Name,
            contect: req.body.Mobile,
			username: req.body.Username,
			password: req.body.Password,
			})
			res.redirect("/signin");

		}else{
			console.log("please fill other user name");
		}
		

	}
	catch(err){
		return res.redirect("back");
	}
};

module.exports.createSession = async function(req,res){
	let user = await User.findOne({username: req.body.username});
	console.log(user);
	return res.render("main");
}
