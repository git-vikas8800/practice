const express= require("express");
const db =require("./config/mongoose");
const ejs = require("ejs");

const passportLocal = require('./config/passport-local');
const passport = require('passport');
const session = require("express-session");

const app = express();
const path = require("path");
const port = 3000;
const bodyParser = require("body-parser");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

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