import React, { useEffect } from 'react'
import carimage from "../assests/car.png"
import "../css/Home.css";
import Steps from './Steps';
import Demo from './Demo';
import Caroptions from './Caroptions';
import CustomerSay from './CustomerSay';
import GettingStarted from './GettingStarted';
import { useDispatch, useSelector } from 'react-redux';
import { clearerrors, getproduct } from '../action/productaction';
import { useNavigate } from 'react-router';
import Loader from './layout/Loader';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector(state => state.products)
    // const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        if (error) {
            dispatch(clearerrors());
        }
        // setShowImage(true);
        dispatch(getproduct());
    }, [dispatch, error])

    const handlehome = () => {
        navigate("/view/cars")
    }

    // const homeRightClass = `home-right ${showImage ? 'show-image' : ''}`;

    return (
        <>
            {
                loading ? <Loader /> : (
                    <>
                        <div className='home-page'>
                            <div className='home-left'>
                                <span><h1>Looking to</h1></span>
                                <h1>Rent a Car</h1>
                                <p> Explore Our Fleet Of Top-Quality Vehicles And Enjoy A Hasslefree Rental Experience, Whether it's A Business Trip Or Weekend Getaway, We've Got The Perfect Ride For You. </p>
                                <div className='home-page-booking'>
                                    <form class="home-reservation-form" onSubmit={handlehome}>
                                        <div class="home-form-group">
                                            <label for="location">Location:</label>
                                            <input type="text" id="location" name="location" placeholder="Enter location" required />
                                        </div>

                                        <div class="home-form-group">
                                            <label for="pickup-date">Pickup Date:</label>
                                            <input type="date" id="pickup-date" name="pickup-date" required />
                                        </div>

                                        <div class="home-form-group">
                                            <label for="return-date">Return Date:</label>
                                            <input type="date" id="return-date" name="return-date" required />
                                        </div>
                                        <button type="submit">Book Now</button>
                                    </form>

                                </div>
                            </div>
                            <div className="home-right">
                                <img src={carimage} alt='Car' />
                            </div>
                        </div>
                        <Steps />
                        <Demo />
                        <Caroptions />
                        <CustomerSay />
                        <GettingStarted />
                    </>
                )
            }
        </>
    )
}

export default Home