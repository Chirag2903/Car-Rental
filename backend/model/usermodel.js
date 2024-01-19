const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requied: [true, "Please Enter Your Name"],
        maxLength: [30, "Cannot exceed 30 characters"],
        minLenght: [4, "Name Should have more than 4 characters"]
    },
    email: {
        type: String,
        requied: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"]
    },
    password: {
        type: String,
        requied: [true, "Please Enter Your Email"],
        minLenght: [8, "Password Should have more than 4 characters"],
        select: false
    },
})

userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);

})


userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
}

// Comapre Paasowrd
userSchema.methods.comparePassword = async function (enteredpassword) {
    return await bcrypt.compare(enteredpassword, this.password);
}

module.exports = mongoose.model("User", userSchema);