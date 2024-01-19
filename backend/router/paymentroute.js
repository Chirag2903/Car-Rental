const express = require("express");
const { processPayment, sendStripeApiKey } = require("../controller/paymentcontroller");
const router = express.Router();
const { isauthenticateduser } = require("../middleware/authenticate");

router.route("/payment/process").post(isauthenticateduser, processPayment);

router.route("/stripeapikey").get(isauthenticateduser, sendStripeApiKey);

module.exports = router;