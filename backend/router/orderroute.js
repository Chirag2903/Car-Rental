const express = require("express");
const { neworder, myorders, getsingleorder } = require("../controller/ordercontroller");
const { isauthenticateduser } = require("../middleware/authenticate");
const router = express.Router();

router.route('/order/new').post(isauthenticateduser, neworder)
router.route('/my/orders').get(isauthenticateduser, myorders)
router.route("/order/:id").get(isauthenticateduser, getsingleorder);



module.exports = router;

