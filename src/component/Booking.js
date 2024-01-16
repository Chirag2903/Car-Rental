import React from 'react'
import image from "../assests/Car3.png"
import '../css/Booking.css'
import { useNavigate } from 'react-router'

const Booking = () => {

    const navigate = useNavigate();
    const handlepayment = () => {
        navigate('/successful')
    }
    return (
        <>
            <div className='booking'>
                <div className='booking-container-1'>
                    <h1>BOOKING INFO</h1>
                    <div className='booking-detail-page'>
                        <form class="booking-detail-form">
                            <div class="booking-detail-group">
                                <label for="location">Location</label>
                                <input type="text" id="location" name="location" placeholder="Enter Your Location" required />
                            </div>

                            <div class="book-group">
                                <label for="pickup-date">Pickup Date</label>
                                <input type="date" id="pickup-date" name="pickup-date" required />
                            </div>

                            <div class="book-group">
                                <label for="return-date">Return Date</label>
                                <input type="date" id="return-date" name="return-date" required />
                            </div>

                        </form>
                    </div>

                    <h1>YOUR DETAILS</h1>
                    <div className='booking-page'>
                        <form class="booking-form">
                            <div class="book-group">
                                <label for="first-name">First Name</label>
                                <input type="text" id="first-name" name="first-name" placeholder="Enter Your First Name" required />
                            </div>
                            <div class="book-group">
                                <label for="last-name">Last Name</label>
                                <input type="text" id="last-name" name="last-name" placeholder="Enter Your Last Name" required />
                            </div>
                            <div class="book-group">
                                <label for="adress-1">Address 1</label>
                                <input type="text" id="address-1" name="address-1" placeholder="Enter Address 1" required />
                            </div>
                            <div class="book-group">
                                <label for="adress-2">Address 2</label>
                                <input type="text" id="address-2" name="Address 2" placeholder="Enter Address 2" required />
                            </div>
                            <div class="book-group">
                                <label for="city">City</label>
                                <input type="text" id="city" name="city" placeholder="Enter City" required />
                            </div>
                            <div class="book-group">
                                <label for="country">Country</label>
                                <input type="text" id="country" name="country" placeholder="Enter Country" required />
                            </div>
                            <div class="book-group">
                                <label for="phone">Phone</label>
                                <input type="number" id="phone" name="phone" placeholder="Enter Phone Number" required />
                            </div>
                            <div class="book-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter Email" required />
                            </div>
                        </form>

                    </div>


                    <h1>ADD EXTRAS</h1>
                    <div className='add-extra-page'>
                        <form class="extra-form">
                            <div class="extra-group">
                                <div className='extra-group-1'>
                                    <input type="checkbox" id="first-name" name="first-name" placeholder="Enter Your First Name" required />
                                    <label for="first-name">Child Seat,  Rs250/day</label>
                                </div>
                                <p>
                                    Add a child seat for your little one. We offer comfortable and safe child seats for a pleasant journey.
                                </p>
                            </div>
                            <div class="extra-group">
                                <div className='extra-group-1'>
                                    <input type="checkbox" id="first-name" name="first-name" placeholder="Enter Your First Name" required />
                                    <label for="first-name">GPS Navigation,  Rs550/day</label>
                                </div>
                                <p>
                                    When renting a car, you are oftening driving in new and unfamiliar area. Choose a gurantee GPS to never get lost, and to be directed through the quickest or most scenic routes.
                                </p>
                            </div>
                            <div class="extra-group">
                                <div className='extra-group-1'>
                                    <input type="checkbox" id="first-name" name="first-name" placeholder="Enter Your First Name" required />
                                    <label for="first-name">Extended Insurance,  Rs2050/day</label>
                                </div>
                                <p>
                                    We offer an extended insurance plan that includes additional services at no cost in the event of breakdowns, loss of keys and similar incidents.
                                </p>
                            </div>
                            <div class="extra-group">
                                <div className='extra-group-1'>
                                    <input type="checkbox" id="first-name" name="first-name" placeholder="Enter Your First Name" required />
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
                                    <input type="checkbox" id="first-name" name="first-name" placeholder="Enter Your First Name" required />
                                    <label for="first-name">I agree with the Terms & conditions and Privacy Policy</label>
                                </div>
                            </div>
                            <button type='submit' onClick={handlepayment}>Book Now</button>
                        </div>

                    </div>

                </div>
                <div className='booking-container-2'>
                    <h1>BOOKING DETAILS</h1>
                    <img src={image} alt='car' />
                    <div className='booking-container-2-box'>
                        <h2>Audi 2019 A4 Allroad</h2>
                        <h3>Pickup : 14/10/2022</h3>
                        <h3>Return : 14/10/2022</h3>
                        <h2>Total: Rs3500</h2>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Booking