import React from 'react'
import "../css/Successful.css"
import { Link } from 'react-router-dom'


const Successful = () => {
    return (
        <div className='successful'>
            <div className="booking-success">
                <img width="70" height="70" src="https://img.icons8.com/fluency/48/ok--v1.png" alt="ok--v1" />
                <h1>Booking Confirmed!</h1>
                <p>Your car rental has been successfully booked.</p>
                <p>Thank you for choosing our services!</p>
                <Link to="/">Go back to Home</Link>
            </div>
        </div>
    )
}

export default Successful