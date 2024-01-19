import React, { useEffect } from 'react'
import "../css/OrderDetails.css"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { clearerrors, getOrderDetails } from '../action/orderaction';
import Loader from "../component/layout/Loader"

const OrderDetails = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { order, error, loading } = useSelector((state) => state.orderdetails);

    useEffect(() => {
        if (error) {
            dispatch(clearerrors());
        }
        dispatch(getOrderDetails(id));
    }, [dispatch, error, id])

    const Total = order && order.totalprice;
    const totaldays = order && order.orderitems && order.orderitems.days;
    const subtotal = Total / totaldays;

    return (
        <>
            {
                loading ? <Loader /> :
                    (
                        <>
                            <div className='orderdetails'>
                                <div className="orderdetails-heading">
                                    <h1>ORDER DETAILS</h1>
                                </div>
                                <div className='orderdetails-container-1'>
                                    <h1>ORDER INFO</h1>
                                    <div className='orderdetails-detail-page'>
                                        <form class="orderdetails-detail-form">
                                            <div class="orderdetails-group">
                                                <label for="location">Location</label>
                                                <h2>{order.bookingDetails && order.bookingDetails.location}</h2>
                                            </div>

                                            <div class="orderdetails-group">
                                                <label for="pickup-date">Pickup Date</label>
                                                <h2>{order.bookingDetails && order.bookingDetails.pickup} </h2>
                                            </div>

                                            <div class="orderdetails-group">
                                                <label for="return-date">Return Date</label>
                                                <h2>{order.bookingDetails && order.bookingDetails.return}</h2>
                                            </div>

                                        </form>
                                    </div>

                                    <h1>YOUR DETAILS</h1>
                                    <div className='orderdetails-page'>
                                        <form class="orderdetails-form">
                                            <div class="orderdetails-group">
                                                <label for="first-name">First Name</label>
                                                <h2>{order.userDetails && order.userDetails.firstname}</h2>

                                            </div>
                                            <div class="orderdetails-group">
                                                <label for="last-name">Last Name</label>
                                                <h2>{order.userDetails && order.userDetails.lastname}</h2>
                                            </div>
                                            <div class="orderdetails-group">
                                                <label for="adress-1">Address 1</label>
                                                <h2>{order.userDetails && order.userDetails.address1}</h2>

                                            </div>
                                            <div class="orderdetails-group">
                                                <label for="adress-2">Address 2</label>
                                                <h2>{order.userDetails && order.userDetails.address2}</h2>

                                            </div>
                                            <div class="orderdetails-group">
                                                <label for="city">City</label>
                                                <h2>{order.userDetails && order.userDetails.city}</h2>

                                            </div>
                                            <div class="orderdetails-group">
                                                <label for="country">Country</label>
                                                <h2>{order.userDetails && order.userDetails.country}</h2>

                                            </div>
                                            <div class="orderdetails-group">
                                                <label for="phone">Phone</label>
                                                <h2>{order.userDetails && order.userDetails.phonenumber}</h2>

                                            </div>
                                            <div class="orderdetails-group">
                                                <label for="email">Email</label>
                                                <h2>{order.userDetails && order.userDetails.email}</h2>

                                            </div>
                                        </form>

                                    </div>


                                    <h1>ADDED EXTRAS</h1>
                                    <div className='orderdetails-extra-page'>
                                        <form class="orderdetails-extra-form">

                                            {
                                                order.orderitems && order.orderitems.extras.childseat && (
                                                    <div class="orderdetails-extra-group">
                                                        <div className='orderdetails-extra-group-1'>
                                                            <label for="first-name"><img width="30" height="30" src="https://img.icons8.com/color/48/checked-2.png" alt="checked-2" /> Child Seat, Rs250/day</label>
                                                        </div>
                                                        <p>
                                                            Add a child seat for your little one. We offer comfortable and safe child seats for a pleasant journey.
                                                        </p>
                                                    </div>
                                                )
                                            }


                                            {
                                                order.orderitems && order.orderitems.extras.gpsnavigation && (
                                                    <div class="orderdetails-extra-group">
                                                        <div className='orderdetails-extra-group-1'>

                                                            <label for="first-name"><img width="30" height="30" src="https://img.icons8.com/color/48/checked-2.png" alt="checked-2" /> GPS Navigation,  Rs550/day</label>
                                                        </div>
                                                        <p>
                                                            When renting a car, you are oftening driving in new and unfamiliar area. Choose a gurantee GPS to never get lost, and to be directed through the quickest or most scenic routes.
                                                        </p>
                                                    </div>)
                                            }

                                            {
                                                order.orderitems && order.orderitems.extras.extendedinsurance && (
                                                    <div class="orderdetails-extra-group">
                                                        <div className='orderdetails-extra-group-1'>

                                                            <label for="first-name"><img width="30" height="30" src="https://img.icons8.com/color/48/checked-2.png" alt="checked-2" /> Extended Insurance,  Rs2050/day</label>
                                                        </div>
                                                        <p>
                                                            We offer an extended insurance plan that includes additional services at no cost in the event of breakdowns, loss of keys and similar incidents.
                                                        </p>
                                                    </div>
                                                )
                                            }
                                            {
                                                order.orderitems && order.orderitems.extras.wifihotspot && (
                                                    <div class="orderdetails-extra-group">
                                                        <div className='orderdetails-extra-group-1'>

                                                            <label for="first-name"><img width="30" height="30" src="https://img.icons8.com/color/48/checked-2.png" alt="checked-2" /> Wifi Hotspot,  Rs100/day</label>
                                                        </div>
                                                        <p>
                                                            The Wifi Hotspot allows up to 5 devices to connect to the Hotspot within your rental car. Our devices also comes with a language translator, maps, local guides and more.
                                                        </p>
                                                    </div>
                                                )
                                            }
                                            {
                                                !((order.orderitems && order.orderitems.extras.childseat) || (order.orderitems && order.orderitems.extras.gpsnavigation) || (order.orderitems && order.orderitems.extras.extendedinsurance) || (order.orderitems && order.orderitems.extras.wifihotspot)) && (
                                                    <div class="NoExtra-orderdetails">
                                                        <p>No extra added</p>
                                                    </div>
                                                )
                                            }
                                        </form>


                                    </div>

                                </div>
                                <div className='orderdetails-container-2'>
                                    <h1>CAR DETAILS</h1>
                                    <img src={order.orderitems && order.orderitems.image} alt='car' />
                                    <div className='orderdetails-container-2-box'>
                                        <div className="orderdetails-container-2-box-2">
                                            <div className="orderdetails-calculator">
                                                <h3>Car Model</h3>
                                                <h3>{order.orderitems && order.orderitems.name}</h3>
                                            </div>
                                            <div className="orderdetails-calculator">
                                                <h3>Subtotal</h3>
                                                <h3>Rs {subtotal}/day</h3>
                                            </div>
                                            <div className="orderdetails-calculator">
                                                <h3>Pickup</h3>
                                                <h3>{order.bookingDetails && order.bookingDetails.pickup}</h3>
                                            </div>
                                            <div className="orderdetails-calculator">
                                                <h3>Return</h3>
                                                <h3>{order.bookingDetails && order.bookingDetails.pickup}</h3>
                                            </div>
                                            <div className="orderdetails-calculator">
                                                <h3>Total Days</h3>
                                                <h3>{order.orderitems && order.orderitems.days}</h3>
                                            </div>
                                            <div className="orderdetails-calculator-total">
                                                <h3>Total Amout</h3>
                                                <h3>Rs {order && order.totalprice}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div >
                        </>
                    )
            }
        </>

    )
}

export default OrderDetails