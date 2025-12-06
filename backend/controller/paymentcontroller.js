const catchasyncerror = require("../middleware/catchasyncerror");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment = catchasyncerror(async (req, res, next) => {
    const myPayment = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "inr",
        metadata: {
            company: "CarRental",
        },
        description: `Car rental payment from ${req.body.name} (${req.body.email})`,
        shipping: {
            name: req.body.name,
            address: {
                line1: req.body.address1,
                city: req.body.city,
                state: req.body.state,
                postal_code: req.body.postal_code || "000000",
                country: "IN",
            },
            phone: req.body.phone || undefined
        },
    });

    res.status(200).json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchasyncerror(async (req, res, next) => {
    res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
