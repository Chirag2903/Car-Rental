import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements, } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { createorder, clearerrors } from "../action/orderaction";
import "../css/Payment.css"

const Payment = () => {

    const orderData = JSON.parse(sessionStorage.getItem("orderData"));

    orderData.totalprice = Number(orderData.totalprice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();
    const payBtn = useRef(null);

    const { user } = useSelector((state) => state.user);
    const { error } = useSelector((state) => state.neworder);

    const paymentData = {
        amount: Math.round(orderData.totalprice * 100),
    };


    const submitHandler = async (e) => {
        e.preventDefault();

        payBtn.current.disabled = true;

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post("/payment/process", paymentData, config);

            const client_secret = data.client_secret;

            if (!stripe || !elements) return;

            const result = await stripe.confirmCardPayment(client_secret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                        name: user.name,
                        email: user.email,
                        address: {
                            line1: orderData.userDetails.address1,
                            city: orderData.userDetails.city,
                            state: orderData.userDetails.address2,
                            postal_code: "400001",
                            country: 'IN',
                        },
                    },
                },
            });

            if (result.error) {
                payBtn.current.disabled = false;

                alert(result.error.message);
            }
            else {
                if (result.paymentIntent.status === "succeeded") {

                    dispatch(createorder(orderData));
                    navigate("/success");
                }
                else {
                    alert("There's some issue while processing payment ");
                }
            }
        } catch (error) {
            payBtn.current.disabled = false;
            alert(error.response.data.message);
        }
    };

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearerrors());
        }
    }, [dispatch, error]);
    return (
        <div className="paymentContainer">
            <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
                <h1>Payment Details</h1>
                <div className="payment-box">
                    <img width="30" height="30" src="https://img.icons8.com/ios/50/939393/bank-card-back-side.png" alt="bank-card-back-side" />
                    <CardNumberElement className="paymentInput" options={{
                        placeholder: "4242 4242 4242 4242",
                    }} />
                </div>
                <div className="payment-box">
                    <img width="30" height="30" src="https://img.icons8.com/material-outlined/24/939393/calendar.png" alt="calendar" />
                    <CardExpiryElement className="paymentInput" />
                </div>
                <div className="payment-box">
                    <img width="30" height="30" src="https://img.icons8.com/material-outlined/24/939393/key--v1.png" alt="key--v1" />
                    <CardCvcElement className="paymentInput" />
                </div>

                <input
                    type="submit"
                    value={`Pay - ₹${orderData && orderData.totalprice}`}
                    ref={payBtn}
                    className="paymentFormBtn"
                />
            </form>
        </div>

    )
}

export default Payment