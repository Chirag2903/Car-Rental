import React from 'react'
import carimage from "../assests/car.png"
import "../css/Home.css";
import Header from './Header';
import Steps from './Steps';
import Demo from './Demo';
import Caroptions from './Caroptions';
import CustomerSay from './CustomerSay';
import Footer from "../component/Footer"
import GettingStarted from './GettingStarted';

const Home = () => {
    return (
        <><Header />
            <div className='home-page'>
                <div className='home-left'>
                    <span><h1>Looking to</h1></span>
                    <h1>Rent a Car</h1>
                    <p> Explore Our Fleet Of Top-Quality Vehicles And Enjoy A Hasslefree Rental Experience, Whether it's A Business Trip Or Weekend Getaway, We've Got The Perfect Ride For You. </p>
                    <div className='home-page-booking'>
                        <form class="reservation-form">
                            <div class="form-group">
                                <label for="location">Location:</label>
                                <input type="text" id="location" name="location" placeholder="Enter location" required />
                            </div>

                            <div class="form-group">
                                <label for="pickup-date">Pickup Date:</label>
                                <input type="date" id="pickup-date" name="pickup-date" required />
                            </div>

                            <div class="form-group">
                                <label for="return-date">Return Date:</label>
                                <input type="date" id="return-date" name="return-date" required />
                            </div>
                            <button type="submit">Submit</button>
                        </form>

                    </div>
                </div>
                <div className='home-right'>
                    <img src={carimage} alt='Car' />
                </div>
            </div>
            <Steps />
            <Demo />
            <Caroptions />
            <CustomerSay />
            <GettingStarted />
            <Footer />
        </>
    )
}

export default Home