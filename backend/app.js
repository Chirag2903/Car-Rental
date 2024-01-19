const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser");
const errormiddleware = require("./middleware/Error")
const path = require("path");
const app = express();

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


const user = require("./router/userrouter");
const product = require("./router/productroute");
const payment = require("./router/paymentroute")
const order = require("./router/orderroute")

app.use(user);
app.use(product);
app.use(payment);
app.use(order);


app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"))
})

app.use(errormiddleware);

const connectdatabase = () => {
    mongoose.connect(process.env.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};
connectdatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server is Listening on http://localhost:${process.env.PORT}`);
})