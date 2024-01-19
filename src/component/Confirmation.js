import "../css/Confirmation.css"
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { clearerrors, getproductdetails } from '../action/productaction'
import Loader from "./layout/Loader"


const Confirmation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();
    const { loading, error, orderinfo } = useSelector(state => state.orderinfo)
    const { product } = useSelector(state => state.product)
    const { user } = useSelector(state => state.user);


    const [totalamount, settotalamount] = useState(orderinfo.total);


    const date1String = orderinfo.bookingDetails.pickup;
    const date2String = orderinfo.bookingDetails.return;

    // Split the date string into year, month, and day
    const [year1, month1, day1] = date1String.split('-').map(Number);
    const [year2, month2, day2] = date2String.split('-').map(Number);

    // Create Date objects
    const date1 = new Date(year1, month1 - 1, day1);
    const date2 = new Date(year2, month2 - 1, day2);
    const totalDays = ((date2 - date1) / (24 * 3600 * 1000)) + 1;


    useEffect(() => {
        if (error) {
            clearerrors();
        }
        settotalamount(totalDays * orderinfo.total);
        dispatch(getproductdetails(id))

    }, [dispatch, error, id, orderinfo.total, totalDays])


    const orderitems = {
        name: product.name,
        price: product.price,
        days: totalDays,
        image: product.images && product.images.length > 0 ? product.images[0].url : '',
        product: product._id,
        extras: orderinfo.extras
    }
    const handleconfirmation = async () => {
        try {
            const orderData = {
                totalprice: totalamount,
                userDetails: orderinfo.userDetails,
                bookingDetails: orderinfo.bookingDetails,
                orderitems: orderitems,
                user: user._id,
            };

            // dispatch(createorder(orderData));
            sessionStorage.setItem('orderData', JSON.stringify(orderData));
            navigate(`/payment`);
        } catch (error) {
            console.error("Error confirming booking:", error);
        }
    };
    return (
        <>
            {
                loading ? <Loader /> : (
                    <>
                        <div className='confirmation'>
                            <div className="confirmation-heading">
                                <h1>BOOKING CONFIRMATION</h1>
                            </div>
                            <div className='confirmation-container-1'>
                                <h1>BOOKING INFO</h1>
                                <div className='confirmation-detail-page'>
                                    <form class="confirmation-detail-form">
                                        <div class="confirmation-group">
                                            <label for="location">Location</label>
                                            <h2>{orderinfo.bookingDetails.location}</h2>
                                        </div>

                                        <div class="confirmation-group">
                                            <label for="pickup-date">Pickup Date</label>
                                            <h2>{orderinfo.bookingDetails.pickup}</h2>
                                        </div>

                                        <div class="confirmation-group">
                                            <label for="return-date">Return Date</label>
                                            <h2>{orderinfo.bookingDetails.return}</h2>
                                        </div>

                                    </form>
                                </div>

                                <h1>YOUR DETAILS</h1>
                                <div className='confirmation-page'>
                                    <form class="confirmation-form">
                                        <div class="confirmation-group">
                                            <label for="first-name">First Name</label>
                                            <h2>{orderinfo.userDetails.firstname}</h2>

                                        </div>
                                        <div class="confirmation-group">
                                            <label for="last-name">Last Name</label>
                                            <h2>{orderinfo.userDetails.lastname}</h2>
                                        </div>
                                        <div class="confirmation-group">
                                            <label for="adress-1">Address 1</label>
                                            <h2>{orderinfo.userDetails.address1}</h2>

                                        </div>
                                        <div class="confirmation-group">
                                            <label for="adress-2">Address 2</label>
                                            <h2>{orderinfo.userDetails.address2}</h2>

                                        </div>
                                        <div class="confirmation-group">
                                            <label for="city">City</label>
                                            <h2>{orderinfo.userDetails.city}</h2>

                                        </div>
                                        <div class="confirmation-group">
                                            <label for="country">Country</label>
                                            <h2>{orderinfo.userDetails.country}</h2>

                                        </div>
                                        <div class="confirmation-group">
                                            <label for="phone">Phone</label>
                                            <h2>{orderinfo.userDetails.phonenumber}</h2>

                                        </div>
                                        <div class="confirmation-group">
                                            <label for="email">Email</label>
                                            <h2>{orderinfo.userDetails.email}</h2>

                                        </div>
                                    </form>

                                </div>


                                <h1>ADDED EXTRAS</h1>
                                <div className='confirmation-extra-page'>
                                    <form class="confirmation-extra-form">
                                        {
                                            orderinfo.extras.childseat && (
                                                <div class="confirmation-extra-group">
                                                    <div className='confirmation-extra-group-1'>
                                                        <label for="first-name"><img width="30" height="30" src="https://img.icons8.com/color/48/checked-2.png" alt="checked-2" /> Child Seat, Rs250/day</label>
                                                    </div>
                                                    <p>
                                                        Add a child seat for your little one. We offer comfortable and safe child seats for a pleasant journey.
                                                    </p>
                                                </div>
                                            )
                                        }
                                        {
                                            orderinfo.extras.gpsnavigation && (
                                                <div class="confirmation-extra-group">
                                                    <div className='confirmation-extra-group-1'>

                                                        <label for="first-name"><img width="30" height="30" src="https://img.icons8.com/color/48/checked-2.png" alt="checked-2" /> GPS Navigation,  Rs550/day</label>
                                                    </div>
                                                    <p>
                                                        When renting a car, you are oftening driving in new and unfamiliar area. Choose a gurantee GPS to never get lost, and to be directed through the quickest or most scenic routes.
                                                    </p>
                                                </div>)
                                        }
                                        {
                                            orderinfo.extras.extendedinsurance && (
                                                <div class="confirmation-extra-group">
                                                    <div className='confirmation-extra-group-1'>

                                                        <label for="first-name"><img width="30" height="30" src="https://img.icons8.com/color/48/checked-2.png" alt="checked-2" /> Extended Insurance,  Rs2050/day</label>
                                                    </div>
                                                    <p>
                                                        We offer an extended insurance plan that includes additional services at no cost in the event of breakdowns, loss of keys and similar incidents.
                                                    </p>
                                                </div>
                                            )
                                        }
                                        {
                                            orderinfo.extras.wifihotspot && (
                                                <div class="confirmation-extra-group">
                                                    <div className='confirmation-extra-group-1'>

                                                        <label for="first-name"><img width="30" height="30" src="https://img.icons8.com/color/48/checked-2.png" alt="checked-2" /> Wifi Hotspot,  Rs100/day</label>
                                                    </div>
                                                    <p>
                                                        The Wifi Hotspot allows up to 5 devices to connect to the Hotspot within your rental car. Our devices also comes with a language translator, maps, local guides and more.
                                                    </p>
                                                </div>
                                            )
                                        }
                                        {
                                            !(orderinfo.extras.childseat || orderinfo.extras.gpsnavigation || orderinfo.extras.extendedinsurance || orderinfo.extras.wifihotspot) && (
                                                <div class="NoExtra">
                                                    <p>No extra added</p>
                                                </div>
                                            )
                                        }
                                    </form>


                                </div>

                            </div>
                            <div className='confirmation-container-2'>
                                <h1>BOOKING DETAILS</h1>
                                <img src={product.images && product.images.length > 0 ? product.images[0].url : ''} alt='car' />
                                <div className='confirmation-container-2-box'>
                                    <div className="confirmation-container-2-box-2">
                                        <div className="subtotal-calculator">
                                            <h3>Car Model</h3>
                                            <h3>{product.name}</h3>
                                        </div>
                                        <div className="subtotal-calculator">
                                            <h3>Subtotal</h3>
                                            <h3>Rs {orderinfo.total}/day</h3>
                                        </div>
                                        <div className="subtotal-calculator">
                                            <h3>Pickup</h3>
                                            <h3>{orderinfo.bookingDetails.pickup}</h3>
                                        </div>
                                        <div className="subtotal-calculator">
                                            <h3>Return</h3>
                                            <h3>{orderinfo.bookingDetails.return}</h3>
                                        </div>
                                        <div className="subtotal-calculator">
                                            <h3>Total Days</h3>
                                            <h3>{isNaN(totalDays) ? 0 : totalDays}</h3>
                                        </div>
                                        <div className="subtotal-calculator-total">
                                            <h3>Total Amout</h3>
                                            <h3>Rs {totalamount}</h3>
                                        </div>
                                    </div>
                                    <button type='submit' onClick={handleconfirmation}>Confirm Booking</button>
                                </div>
                            </div>

                        </div >
                    </>
                )
            }
        </>
    )
}

export default Confirmation