import React, { useEffect } from 'react'
import "./Profile.css"
import { useDispatch, useSelector } from 'react-redux'
import { myorders } from '../../action/orderaction'
import profile from "../../assests/profile.png"
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Loader from "../layout/Loader"

const Profile = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, user, isauthenticated } = useSelector((state) => state.user);

    const { orders } = useSelector((state) => state.myorder);


    useEffect(() => {
        if (isauthenticated === false) {
            navigate("/login");
        }
        dispatch(myorders());

    }, [dispatch, navigate, isauthenticated]);

    return (
        <>{
            loading ? <Loader /> : (
                <>
                    <div className='profile'>
                        <div className='profile-left'>
                            <img src={profile} alt='profile' />
                            <div className='profile-left-1'>
                                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/939393/user-male-circle.png" alt="user-male-circle" />
                                <h3>{user.username}</h3>
                            </div>
                            <div className='profile-left-1'>
                                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/939393/new-post.png" alt="new-post" />
                                <h3>{user.email}</h3>
                            </div>
                            <button>Edit Changes</button>
                        </div>
                        <div className='profile-right'>
                            <div className="profile-right-heading">
                                <h1>Appointments</h1>
                            </div>
                            <div className="profile-right-cards">
                                {orders && orders.length > 0 ? (
                                    orders.map((item, index) => (
                                        <Link to={`/order/${item._id}`}>
                                            <div key={index} className='profile-right-card'>
                                                <div className='profile-card-1'>
                                                    <div className='profile-card-1-1'>
                                                        <h2>{item.orderitems.name}</h2>
                                                        <h3>Per Day</h3>
                                                        <h2>Rs {item.totalprice}</h2>
                                                    </div>
                                                    <img src={item.orderitems.image} alt='car' />
                                                </div>
                                                <div className='profile-card-2'>
                                                    <p>Period</p>
                                                    <h2>{item.bookingDetails.pickup} <p>→</p> {item.bookingDetails.return}</h2>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <div className='noappointment'>
                                        <h2>No Appointments Yet</h2>
                                    </div>
                                )}
                            </div>

                        </div>

                    </div>
                </>
            )
        }
        </>

    )
}

export default Profile