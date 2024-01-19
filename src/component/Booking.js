import React, { useEffect, useState } from 'react'
import '../css/Booking.css'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { clearerrors, getproductdetails, saveorderdetails } from '../action/productaction'
import Loader from './layout/Loader'

const Booking = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();
    const { loading, error, product } = useSelector(state => state.product)

    const [total, settotal] = useState(product.price)

    const [bookingDetails, setBookingDetails] = useState({
        location: '',
        pickup: '',
        return: '',
    });
    const [userDetails, setUserDetails] = useState({
        firstname: '',
        lastname: '',
        address1: '',
        address2: '',
        city: '',
        country: '',
        phonenumber: '',
        email: '',
    });

    const [extras, setExtras] = useState({
        childseat: false,
        gpsnavigation: false,
        extendedinsurance: false,
        wifihotspot: false,
    });

    const handleExtrasChange = (extra, isChecked) => {
        setExtras((prevExtras) => ({
            ...prevExtras,
            [extra]: isChecked,
        }));
    };

    useEffect(() => {
        const calculateTotal = () => {
            let updatedTotal = product.price;

            if (extras.childseat) {
                updatedTotal += 250;
            }
            if (extras.gpsnavigation) {
                updatedTotal += 550;
            }
            if (extras.extendedinsurance) {
                updatedTotal += 2050;
            }
            if (extras.wifihotspot) {
                updatedTotal += 100;
            }

            settotal(updatedTotal);
        };
        calculateTotal();
    }, [extras, product.price]);

    useEffect(() => {
        if (error) {
            dispatch(clearerrors())
        }
        dispatch(getproductdetails(id))

    }, [dispatch, error, id])

    const handleconfirmation = () => {
        if (
            !bookingDetails.location ||
            !bookingDetails.pickup ||
            !bookingDetails.return ||
            !userDetails.firstname ||
            !userDetails.lastname ||
            !userDetails.address1 ||
            !userDetails.address2 ||
            !userDetails.city ||
            !userDetails.country ||
            !userDetails.phonenumber ||
            !userDetails.email
        ) {
            alert('Please Fill In All Required Fields');
            return;
        }
        if (!document.getElementById('agreementCheckbox').checked) {
            alert('Please agree to the terms and conditions');
            return;
        }
        const pickupDate = new Date(bookingDetails.pickup);
        const returnDate = new Date(bookingDetails.return);

        if (returnDate < pickupDate) {
            alert('Return date must be the same or after the pickup date');
            return;
        }

        dispatch(saveorderdetails({ bookingDetails, userDetails, extras, total }));
        navigate(`/confirmation/${id}`)

    }
    return (
        <>
            {
                loading ? <Loader /> : (
                    <>
                        <div className='booking'>
                            <div className='booking-container-1'>
                                <h1>BOOKING INFO</h1>
                                <div className='booking-detail-page'>
                                    <form class="booking-detail-form">
                                        <div class="booking-detail-group">
                                            <label for="location">Location</label>
                                            <input type="text" id="location" name="location" placeholder="Enter Your Location" required value={bookingDetails.pickupDate}
                                                onChange={(e) => setBookingDetails({ ...bookingDetails, location: e.target.value })} />
                                        </div>

                                        <div class="book-group">
                                            <label for="pickup-date">Pickup Date</label>
                                            <input type="date" id="pickup-date" name="pickup-date" required value={bookingDetails.pickup}
                                                onChange={(e) => setBookingDetails({ ...bookingDetails, pickup: e.target.value })} />
                                        </div>

                                        <div class="book-group">
                                            <label for="return-date">Return Date</label>
                                            <input type="date" id="return-date" name="return-date"
                                                value={bookingDetails.return}
                                                onChange={(e) => setBookingDetails({ ...bookingDetails, return: e.target.value })} required />
                                        </div>

                                    </form>
                                </div>

                                <h1>YOUR DETAILS</h1>
                                <div className='booking-page'>
                                    <form class="booking-form">
                                        <div class="book-group">
                                            <label for="first-name">First Name</label>
                                            <input type="text" id="first-name" name="first-name"
                                                value={userDetails.firstname}
                                                onChange={(e) => setUserDetails({ ...userDetails, firstname: e.target.value })}
                                                placeholder="Enter Your First Name" required />
                                        </div>
                                        <div class="book-group">
                                            <label for="last-name">Last Name</label>
                                            <input type="text" id="last-name" name="last-name" placeholder="Enter Your Last Name" value={userDetails.lastname}
                                                onChange={(e) => setUserDetails({ ...userDetails, lastname: e.target.value })} required />
                                        </div>
                                        <div class="book-group">
                                            <label for="adress-1">Address 1</label>
                                            <input type="text" id="address-1" name="address-1" placeholder="Enter Address 1" value={userDetails.address1}
                                                onChange={(e) => setUserDetails({ ...userDetails, address1: e.target.value })} required />
                                        </div>
                                        <div class="book-group">
                                            <label for="adress-2">Address 2</label>
                                            <input type="text" id="address-2" name="Address 2" placeholder="Enter Address 2" value={userDetails.address2}
                                                onChange={(e) => setUserDetails({ ...userDetails, address2: e.target.value })} required />
                                        </div>
                                        <div class="book-group">
                                            <label for="city">City</label>
                                            <input type="text" id="city" name="city" placeholder="Enter City" value={userDetails.city}
                                                onChange={(e) => setUserDetails({ ...userDetails, city: e.target.value })}
                                                required />
                                        </div>
                                        <div class="book-group">
                                            <label for="country">Country</label>
                                            <input type="text" id="country" name="country" placeholder="Enter Country" value={userDetails.country}
                                                onChange={(e) => setUserDetails({ ...userDetails, country: e.target.value })}
                                                required />
                                        </div>
                                        <div class="book-group">
                                            <label for="phone">Phone</label>
                                            <input type="number" id="phone" name="phone" placeholder="Enter Phone Number" value={userDetails.phonenumber}
                                                onChange={(e) => setUserDetails({ ...userDetails, phonenumber: e.target.value })}
                                                required />
                                        </div>
                                        <div class="book-group">
                                            <label for="email">Email</label>
                                            <input type="email" id="email" name="email" placeholder="Enter Email" value={userDetails.email}
                                                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                                required />
                                        </div>
                                    </form>

                                </div>


                                <h1>ADD EXTRAS</h1>
                                <div className='add-extra-page'>
                                    <form class="extra-form">
                                        <div class="extra-group">
                                            <div className='extra-group-1'>
                                                <input
                                                    type="checkbox"
                                                    id="child-seat"
                                                    name="child-seat"
                                                    checked={extras.childseat}
                                                    onChange={(e) => {
                                                        handleExtrasChange('childseat', e.target.checked);
                                                    }}
                                                />
                                                <label for="first-name">Child Seat,  Rs250/day</label>
                                            </div>
                                            <p>
                                                Add a child seat for your little one. We offer comfortable and safe child seats for a pleasant journey.
                                            </p>
                                        </div>
                                        <div class="extra-group">
                                            <div className='extra-group-1'>
                                                <input
                                                    type="checkbox"
                                                    id="gps-navigation"
                                                    name="gps-navigation"
                                                    checked={extras.gpsnavigation}
                                                    onChange={(e) => {
                                                        handleExtrasChange('gpsnavigation', e.target.checked);
                                                    }}
                                                />
                                                <label for="first-name">GPS Navigation,  Rs550/day</label>
                                            </div>
                                            <p>
                                                When renting a car, you are oftening driving in new and unfamiliar area. Choose a gurantee GPS to never get lost, and to be directed through the quickest or most scenic routes.
                                            </p>
                                        </div>
                                        <div class="extra-group">
                                            <div className='extra-group-1'>
                                                <input
                                                    type="checkbox"
                                                    id="extended-insurance"
                                                    name="extended-insurance"
                                                    checked={extras.extendedinsurance}
                                                    onChange={(e) => {
                                                        handleExtrasChange('extendedinsurance', e.target.checked);
                                                    }}
                                                />
                                                <label for="first-name">Extended Insurance,  Rs2050/day</label>
                                            </div>
                                            <p>
                                                We offer an extended insurance plan that includes additional services at no cost in the event of breakdowns, loss of keys and similar incidents.
                                            </p>
                                        </div>
                                        <div class="extra-group">
                                            <div className='extra-group-1'>
                                                <input
                                                    type="checkbox"
                                                    id="wifi-hotspot"
                                                    name="wifi-hotspot"
                                                    checked={extras.wifihotspot}
                                                    onChange={(e) => {
                                                        handleExtrasChange('wifihotspot', e.target.checked);
                                                    }}

                                                />
                                                <label for="first-name">Wifi Hotspot,  Rs100/day</label>
                                            </div>
                                            <p>
                                                The Wifi Hotspot allows up to 5 devices to connect to the Hotspot within your rental car. Our devices also comes with a language translator, maps, local guides and more.
                                            </p>
                                        </div>

                                    </form>

                                    <div className='booking-last'>
                                        <div class="extra-group">
                                            <div className='extra-group-1'>
                                                <input type="checkbox" id="agreementCheckbox" name="first-name" placeholder="Enter Your First Name" required />
                                                <label >I agree with the Terms & conditions and Privacy Policy</label>
                                            </div>
                                        </div>
                                        <button type='submit' onClick={handleconfirmation}>Book Now</button>
                                    </div>

                                </div>

                            </div>
                            <div className='booking-container-2'>
                                <h1>BOOKING DETAILS</h1>
                                <img src={product.images && product.images.length > 0 ? product.images[0].url : ''} alt='car' />
                                <div className='booking-container-2-box'>
                                    <h2>{product.name}</h2>
                                    <h3>Pickup : {bookingDetails.pickup ? bookingDetails.pickup : '-'}</h3>
                                    <h3>Return : {bookingDetails.return ? bookingDetails.return : '-'}</h3>
                                    <h2>Total: Rs {total}/day</h2>
                                </div>

                            </div>

                        </div>
                    </>
                )
            }
        </>
    )
}

export default Booking