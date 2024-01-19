const express = require("express");
const { createProduct, getAllProducts, getProductDetails } = require("../controller/productcontroller");
const { isauthenticateduser } = require("../middleware/authenticate");
const router = express.Router();

router.route('/product/new').post(isauthenticateduser, createProduct)
router.route('/allproducts').get(getAllProducts)
router.route('/car/:id').get(getProductDetails)



module.exports = router;
