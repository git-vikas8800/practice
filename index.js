const express= require("express");
const db =require("./config/mongoose");
const ejs = require("ejs");

const passport = require('passport');
const passportLocal = require('./config/passport-local');
const session = require("express-session");

const path = require("path");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");



app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(session({
	name : "user",
	//change secret before deployment
	secret: "blablah",
	saveUninitialized: false,
	resave:false,
	cookie:{
		maxAge:(1000*60*100)
	}
	}));
app.use(passport.initialize());
app.use (passport.session());

app.use("/",require("./routes"));
app.listen(port,()=>{
    console.log("app is listening on port: ",port)
});