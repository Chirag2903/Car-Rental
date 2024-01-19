import React from 'react'
import "../css/CustomerSay.css"

const CustomerSay = () => {
    return (
        <div id="customersay" className='customersay'>
            <h1>What Our Customer<span> Say</span></h1>
            <h3>Testimonals</h3>
            <div className='customersay-1'>
                <div className='customersay-container'>
                    <div className='blank'>
                        <img src="https://parrotprint.com/wp/wp-content/uploads/2017/04/pexels-photo-27411.jpg" alt='profile' />
                    </div>
                    <div className='customersay-container-1'>
                        <p>"CS Rental has consistently exceeded my expectations over the years. Their commitment to reliability and professionalism sets them apart."</p>
                    </div>
                    <div className='customersay-container-2'>
                        <div className='customersay-container-2-1'>
                            <h3>Sophia Anseri</h3>
                            <p>Student</p>
                        </div>
                        <button>5.0★</button>
                    </div>

                </div>
                <div className='customersay-container'>
                    <div className='blank'>
                        <img src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg" alt='profile' />
                    </div>
                    <div className='customersay-container-1'>
                        <p>"I've Been A Loyal Customer Of CS Rental For Years And They Never Disappoint. I Appreciate The Reliability And Professionalism Of The Car Rental Service."</p>
                    </div>
                    <div className='customersay-container-2'>
                        <div className='customersay-container-2-1'>
                            <h3>Rakesh Jain</h3>
                            <p>Developer</p>
                        </div>
                        <button>5.0★</button>
                    </div>

                </div>
                <div className='customersay-container'>
                    <div className='blank'>
                        <img src="https://qph.cf2.quoracdn.net/main-qimg-5eb631ae6f587af2631f6d3348047693.webp" alt='profile' />
                    </div>
                    <div className='customersay-container-1'>
                        <p>"Having been a dedicated customer of CS Rental for an extended period, I can confidently say that their service never fails to impress.</p>
                    </div>
                    <div className='customersay-container-2'>
                        <div className='customersay-container-2-1'>
                            <h3>Rakesh Jain</h3>
                            <p>Developer</p>
                        </div>
                        <button>5.0★</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CustomerSay