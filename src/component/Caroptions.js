import React, { useMemo } from 'react'
import "../css/Caroptions.css"
import image1 from "../assests/Car1.png";
import image2 from "../assests/Car2.png";
import image3 from "../assests/Car3.png";

const Caroptions = () => {
    const popularCars = useMemo(() => [
        { id: 1, name: 'Audi 2019 A4 Allroad', img: image1, desc: "Four Seater Car", price: 1000 },
        { id: 2, name: 'Mercedes Benz SQ', img: image2, desc: "Four Seater Car", price: 1000 },
        { id: 3, name: 'Jaguar M6', img: image3, desc: "Four Seater Car", price: 1000 },
        { id: 4, name: 'Audi 2019 A4 Allroad', img: image1, desc: "Four Seater Car", price: 1000 },
        { id: 5, name: 'Mercedes Benz SQ', img: image2, desc: "Four Seater Car", price: 1000 },
        { id: 6, name: 'Jaguar M6', img: image3, desc: "Four Seater Car", price: 1000 }
    ], []);
    return (
        <div className='caroptions'>
            <h1>Trending Rental Deals</h1>
            <span><h3>Most Popular Car Rental Deals</h3></span>
            <div className='caroptions-container'>
                {popularCars.map((car) => (
                    <CarBox key={car.id} car={car} />

                ))}
            </div>
            <button className='caroptions-button'>View More →</button>
        </div>
    )
}

const CarBox = ({ car }) => {
    return (
        <button className='caroptioncard' >
            <div className='caroption-1'>
                <img src={car.img} alt='car' />
            </div>
            <div className='caroption-2'>
                <h3>{car.name}</h3>
                <p>{car.desc}</p>
                <h2>Rs{car.price}/day</h2>
            </div>
        </button>

    );
}
export default Caroptions