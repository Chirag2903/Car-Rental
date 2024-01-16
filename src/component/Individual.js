import React from 'react'
import "../css/Individual.css"
import image from "../assests/Car3.png"
import { useNavigate } from 'react-router'


const Individual = () => {
    const navigate = useNavigate();
    const handlebooking = () => {
        navigate('/booking')
    }
    return (
        <div className='individual'>
            <div className='individual-container-1'>
                <h1>Audi 2019 A4 All road</h1>
                <img src={image} alt='car' />
            </div>
            <div className='individual-container-2'>
                <h3>Features</h3>
                <div className='individual-container-2-1'>
                    <div className='individual-box'>
                        <img width="64" height="64" src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/A30D03/external-auto-car-machine-creatype-outline-colourcreatype-2.png" alt="external-auto-car-machine-creatype-outline-colourcreatype-2" />
                        <h3>Transmission</h3>
                        <p>Automatic</p>
                    </div>
                    <div className='individual-box'>
                        <img width="64" height="64" src="https://img.icons8.com/ios/50/A30D03/car-seat.png" alt="car-seat" />
                        <h3>Doors & Seats</h3>
                        <p>4 Doors & 4 Seats</p>
                    </div>
                    <div className='individual-box'>
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/A30D03/air-conditioner.png" alt="air-conditioner" />
                        <h3>Air Condition</h3>
                        <p>Climate Control</p>
                    </div>
                    <div className='individual-box'>
                        <img width="64" height="64" src="https://img.icons8.com/fluency/48/gas-pump.png" alt="gas-pump" />
                        <h3>Fuel Type</h3>
                        <p>Petrol</p>
                    </div>

                </div>
            </div>
            <div className='individual-container-3'>
                <span>
                    <h3>Total Price</h3>
                    <h2>Rs10000/day</h2>
                </span>
                <button onClick={handlebooking}>Book Now</button>
            </div>

        </div>
    )
}

export default Individual