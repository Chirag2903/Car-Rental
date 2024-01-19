const ErrorHandler = require("../utils/ErrorHandler");
const catchasyncerror = require("./catchasyncerror");
const jwt = require("jsonwebtoken");
const User = require("../model/usermodel");



exports.isauthenticateduser = catchasyncerror(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        next(new ErrorHandler("Please Login to access this resources", 401));
    }

    const decodeddata = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodeddata.id);

    next();
})
