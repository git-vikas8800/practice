const express =require('express');
const router = express.Router();
const passport=require("passport")


const usercontroller = require("../controllers/user-controller")

router.get("/signin",usercontroller.signin);
router.get("/signup",usercontroller.signup);


router.post("/signup",usercontroller.createuser);
router.post('/login',passport.authenticate(
    "local",
    {failureRedirect: "/signup",failureMessage: true}

    ),usercontroller.createSession); 
module.exports= router;