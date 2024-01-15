import React from 'react'
import "../css/Steps.css"

const Steps = () => {
    return (
        <div className='steps'>
            <p>HOW IT WORKS</p>
            <h1>Rent With 3 Easy Steps</h1>
            <div className='steps-container-1'>
                <div className='steps-box'>
                    <img width="70" height="70" src="https://img.icons8.com/fluency/48/marker.png" alt="marker" />
                    <h2>Choose a Location</h2>
                    <p>Choose Your Location And Find The Best Car</p>
                </div>
                <div className='steps-box'>
                    <img width="70" height="70" src="https://img.icons8.com/color/48/calendar--v1.png" alt="calendar--v1" />
                    <h2>Pick-Up Date</h2>
                    <p>Select Your Pick Up Date and Time To Book Your Car</p>
                </div>
                <div className='steps-box'>
                    <img width="70" height="70" src="https://img.icons8.com/ios-filled/50/A30D03/car.png" alt="car" />
                    <h2>Book A Car</h2>
                    <p>Book Your Car And We Will Deliever Directly To You</p>
                </div>
            </div>

        </div >
    )
}

export default Steps