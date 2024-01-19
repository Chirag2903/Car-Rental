import React from 'react'
import "../css/Caroptions.css"

import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


const Caroptions = () => {
    const navigate = useNavigate();

    const { products } = useSelector((state) => state.products);
    const ThreeProducts = products.slice(0, 3);


    const handlenavigate = (id) => {
        navigate(`/car/${id}`);
    }
    const handleview = () => {
        navigate('/view/cars');
    }
    return (
        <div id="services" className='caroptions'>
            <h1>Trending Rental Deals</h1>
            <span><h3>Most Popular Car Rental Deals</h3></span>
            <div className='caroptions-container'>
                {ThreeProducts.map((car) => (
                    <CarBox key={car._id} car={car} navigate={() => { handlenavigate(car._id) }} />
                ))}
            </div>
            <button className='caroptions-button' onClick={handleview}>View More →</button>
        </div>
    )
}

const CarBox = ({ car, navigate }) => {
    return (
        <button className='caroptioncard' onClick={navigate} >
            <div className='caroption-1'>
                <img src={car.images[0].url} alt='car' />
            </div>
            <div className='caroption-2'>
                <h3>{car.name}</h3>
                <p>{car.description}</p>
                <h2>Rs {car.price}/day</h2>
            </div>
        </button>

    );
}
export default Caroptions