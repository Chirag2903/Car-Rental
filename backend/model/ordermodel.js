const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userDetails: {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        address1: { type: String, required: true },
        address2: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
        phonenumber: { type: Number, required: true },
        email: { type: String, required: true }
    },
    bookingDetails: {
        location: { type: String, required: true },
        pickup: { type: String, required: true },
        return: { type: String, required: true }
    },
    orderitems: {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        days: { type: Number, required: true },
        image: { type: String, required: true },
        product: { type: mongoose.Schema.ObjectId, ref: "Product", required: true },
        extras: {
            childseat: { type: Boolean, default: false },
            gpsnavigation: { type: Boolean, default: false },
            extendedinsurance: { type: Boolean, default: false },
            wifihotspot: { type: Boolean, default: false },
        }
    },
    user: {
        type: mongoose.Schema.ObjectId, ref: "User", required: true
    },
    totalprice: {
        type: Number, default: 0,
    }
});

module.exports = mongoose.model("Order", orderSchema);