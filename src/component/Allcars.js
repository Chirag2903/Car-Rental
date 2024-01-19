import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import "../css/Allcars.css"
import { useDispatch, useSelector } from 'react-redux';
import { clearerrors, getproduct } from '../action/productaction';

const ITEMS_PER_PAGE = 6;


const Allcars = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { error, products } = useSelector((state) => state.products);
    const [currentPage, setCurrentPage] = useState(1);


    const handlenavigate = (id) => {
        navigate(`/car/${id}`);
    }
    const getPageStartIndex = () => (currentPage - 1) * ITEMS_PER_PAGE;
    const getPageEndIndex = () => currentPage * ITEMS_PER_PAGE;

    const displayedCars = products.slice(getPageStartIndex(), getPageEndIndex());

    useEffect(() => {
        if (error) {
            dispatch(clearerrors());
        }
        dispatch(getproduct());
    }, [dispatch, error])

    return (
        <div className='allcars'>
            <h1>Affordable & Premium Cars For Rent</h1>
            <span><h3>Make it happen in 3 easy steps! Best of luck</h3></span>
            <div className='allcars-container'>
                {displayedCars.map((car) => (
                    <CarBox key={car._id} car={car} navigate={() => { handlenavigate(car._id) }} />

                ))}
            </div>
            <div className="pagination">
                <button className="allcars-button" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    1
                </button>
                <button className="allcars-button" onClick={() => setCurrentPage(currentPage + 1)} disabled={getPageEndIndex() >= products.length}>
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
                <img src={car.images[0].url} alt='car' />
            </div>
            <div className='allcars-2'>
                <h3>{car.name}</h3>
                <p>{car.description}</p>
                <h2>Rs{car.price}/day</h2>
            </div>
        </button>

    );
}
export default Allcars