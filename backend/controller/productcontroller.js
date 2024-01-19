const Product = require("../model/productmodel");
const ErrorHandler = require("../utils/ErrorHandler");
const mongoose = require("mongoose");
const catchasyncerror = require("../middleware/catchasyncerror");

// Create Product 
exports.createProduct = catchasyncerror(async (req, res, next) => {

    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product,
    });
});


// Get All Product 
exports.getAllProducts = catchasyncerror(async (req, res, next) => {

    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    });
});

//Individual Products
exports.getProductDetails = catchasyncerror(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
        success: true,
        product
    });
});