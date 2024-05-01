const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const User = require("../models/user");





passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField : 'password'
},
function(username,password,done){
    console.log(username,password);
    User.findOne({username: username}).then((user)=>{
        console.log(user,"passport");
        if(!user){
            console.log("error in passport user is not found");
            return done(null,false);
        }
        if (user.password!=password){
            console.log("password not verify");
            return done(null,false);
        }
        
        console.log("sucess")
        return done(null,user)
    }).catch((err)=>{
            console.log("error in passport",err);
            return done(err);
        });
}
));


passport.serializeUser(function(user,done){
    done(null,user.id);
});


passport.deserializeUser( function(id,done){
    User.findById(id).then((id,function(user){
        return done(null,user);
    })).catch((err)=>{
            console.log("error");
            return done(err);
        })

})

module.exports = passport;