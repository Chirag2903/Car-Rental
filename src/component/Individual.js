import React, { useEffect } from 'react'
import "../css/Individual.css"
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { clearerrors, getproductdetails } from "../action/productaction"
import Loader from "../component/layout/Loader"

const Individual = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();
    const { loading, error, product } = useSelector(state => state.product)
    const handlebooking = () => {
        navigate(`/booking/${id}`);
    }

    useEffect(() => {
        if (error) {
            dispatch(clearerrors())
        }
        dispatch(getproductdetails(id))

    }, [dispatch, error, id])

    return (
        <>
            {
                loading ? <Loader /> : (
                    <>
                        <div className='individual'>
                            <div className='individual-container-1'>
                                <h1>{product.name}</h1>
                                <img src={product.images && product.images.length > 0 ? product.images[0].url : ''} alt='car' />
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
                                    <h2>Rs {product.price}/day</h2>
                                </span>
                                <button onClick={handlebooking}>Book Now</button>
                            </div>

                        </div>
                    </>
                )
            }
        </>
    )
}

export default Individual