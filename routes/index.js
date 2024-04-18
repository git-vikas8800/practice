const express =require('express');
const router = express.Router();

const homecontroller = require("../controllers/home-controller");
router.use("/",require("./user"));

router.get("/",homecontroller.home);


module.exports= router;