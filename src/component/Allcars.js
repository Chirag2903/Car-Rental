import React, { useMemo, useState } from 'react'
import image1 from "../assests/Car1.png";
import image2 from "../assests/Car2.png";
import image3 from "../assests/Car3.png";
import { useNavigate } from 'react-router';
import "../css/Allcars.css"

const ITEMS_PER_PAGE = 6;


const Allcars = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    const popularCars = useMemo(() => [
        { id: 1, name: 'Audi 2019 A4 Allroad', img: image1, desc: "Four Seater Car", price: 1000 },
        { id: 2, name: 'Mercedes Benz SQ', img: image2, desc: "Four Seater Car", price: 1000 },
        { id: 3, name: 'Jaguar M6', img: image3, desc: "Four Seater Car", price: 1000 },
        { id: 4, name: 'Audi 2019 A4 Allroad', img: image1, desc: "Four Seater Car", price: 1000 },
        { id: 5, name: 'Mercedes Benz SQ', img: image2, desc: "Four Seater Car", price: 1000 },
        { id: 6, name: 'Jaguar M6', img: image3, desc: "Four Seater Car", price: 1000 },
        { id: 1, name: 'Audi 2019 A4 Allroad', img: image1, desc: "Four Seater Car", price: 1000 },
        { id: 2, name: 'Mercedes Benz SQ', img: image2, desc: "Four Seater Car", price: 1000 },
        { id: 3, name: 'Jaguar M6', img: image3, desc: "Four Seater Car", price: 1000 },
        { id: 4, name: 'Audi 2019 A4 Allroad', img: image1, desc: "Four Seater Car", price: 1000 },
        { id: 5, name: 'Mercedes Benz SQ', img: image2, desc: "Four Seater Car", price: 1000 },
        { id: 6, name: 'Jaguar M6', img: image3, desc: "Four Seater Car", price: 1000 },
    ], []);
    const handlenavigate = (id) => {
        navigate(`/car/${id}`);
    }
    const getPageStartIndex = () => (currentPage - 1) * ITEMS_PER_PAGE;
    const getPageEndIndex = () => currentPage * ITEMS_PER_PAGE;

    const displayedCars = popularCars.slice(getPageStartIndex(), getPageEndIndex());
    return (
        <div className='allcars'>
            <h1>Affordable & Premium Cars For Rent</h1>
            <span><h3>Make it happen in 3 easy steps! Best of luck</h3></span>
            <div className='allcars-container'>
                {displayedCars.map((car) => (
                    <CarBox key={car.id} car={car} navigate={() => { handlenavigate(car.id) }} />

                ))}
            </div>
            <div className="pagination">
                <button className="allcars-button" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    1
                </button>
                <button className="allcars-button" onClick={() => setCurrentPage(currentPage + 1)} disabled={getPageEndIndex() >= popularCars.length}>
                    2
                </button>
            </div>
        </div>

    )
}

const CarBox = ({ car, navigate }) => {
    return (
        <button className='allcarscard' onClick={navigate} >
            <div className='allcars-1'>
                <img src={car.img} alt='car' />
            </div>
            <div className='allcars-2'>
                <h3>{car.name}</h3>
                <p>{car.desc}</p>
                <h2>Rs{car.price}/day</h2>
            </div>
        </button>

    );
}
export default Allcars