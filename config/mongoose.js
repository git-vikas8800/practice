const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/appDB");
const db = mongoose.connection;
db.on("error",console.error.bind(console,"Error connecting to mongodb"));
db.once("open",function(){
	console.log("connected database:: MongoDB")
})
module.exports= db;