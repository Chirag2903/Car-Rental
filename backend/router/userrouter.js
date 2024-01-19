const express = require("express");
const { getuserdetails, registeruser, logout, loginuser } = require("../controller/usercontroller");
const { isauthenticateduser } = require("../middleware/authenticate")

const router = express.Router();

router.route('/register').post(registeruser);
router.route('/login').post(loginuser);

router.route('/profile').get(isauthenticateduser, getuserdetails);

router.route('/logout').get(logout);


module.exports = router;