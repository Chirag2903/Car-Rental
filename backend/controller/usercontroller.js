const catchasyncerror = require("../middleware/catchasyncerror");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../model/usermodel")
const sendToken = require("../utils/jwtwebtoken")


//Register User
exports.registeruser = catchasyncerror(async (req, res, next) => {

    const { username, email, password } = req.body;

    const user = await User.create({
        username,
        email,
        password,
    });
    sendToken(user, 201, res);
});
//Login User 
exports.loginuser = catchasyncerror(async (req, res, next) => {
    const { email, password } = req.body;
    // check if user has given password and email both
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email and Password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invlid Email and Password ", 401))
    }

    const ispasswordmatched = await user.comparePassword(password)  //Ye comparePassword wala function maine userSchema mein likha h(usermodel.js)
    if (!ispasswordmatched) {
        return next(new ErrorHandler("Invlid Email and Password ", 401))
    }
    sendToken(user, 200, res);
})

//Logout User
exports.logout = catchasyncerror(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    res.status(200).json({
        success: true,
        message: "Logged out"
    })
})


//Get user detail when reload, Token compare karne ke baad user milne per isme hi save kiya h, so basically konse user ko search karna hai woh token ke basis par decide hoga , and isliye token ke basis par user dhundha uski id as a input diya h
exports.getuserdetails = catchasyncerror(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true, user
    });
});
