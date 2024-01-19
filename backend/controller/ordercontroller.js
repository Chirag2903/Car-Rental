const Order = require("../model/ordermodel");
const ErrorHandler = require("../utils/ErrorHandler");
const mongoose = require("mongoose");
const catchasyncerror = require("../middleware/catchasyncerror");

//Create Order
exports.neworder = catchasyncerror(async (req, res, next) => {

    const { userDetails, bookingDetails, totalprice, orderitems, user } = req.body;

    const order = await Order.create({
        userDetails, bookingDetails, totalprice, orderitems,
        user
    });

    res.status(201).json({
        success: true, order
    })
});


//Get logged in user order 
exports.myorders = catchasyncerror(async (req, res, next) => {

    const orders = await Order.find({ user: req.user._id })

    res.status(200).json({
        success: true, orders
    })
});


//Single Order Details
exports.getsingleorder = catchasyncerror(async (req, res, next) => {

    const order = await Order.findById(req.params.id).populate("user", "name email");
    //req.aprams.id se user ki id milegi jise woh user wala databade se jakar vo user ka name and email lekar aayega isliye populate use kiya h
    if (!order) {
        return next(new ErrorHandler(`Order Not found with this id : ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true, order
    })
});