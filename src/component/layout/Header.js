import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../action/useraction';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const dispatch = useDispatch();

    const { isauthenticated } = useSelector((state) => state.user);

    const handlelogout = () => {
        dispatch(logout());
    }

    return (
        <div className='header'>
            <div className='left'>
                <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/A30D03/car--v2.png" alt="car--v2" />
            </div>
            <div className='mid'>
                <Link to="/">Home</Link>
                <HashLink to="/#ride">Ride</HashLink>
                <HashLink to="/#services">Services</HashLink>
                <HashLink to='/#customersay'>Reviews</HashLink>
                <HashLink to="/#gettingstarted">Help</HashLink>
            </div>
            {
                isauthenticated ? (
                    <>
                        <div className='right-1'>
                            <div className='right-profile'>
                                <Link to="/account"><button><img width="40" height="40" src="https://img.icons8.com/ios/50/939393/user--v1.png" alt="user--v1" /></button> </Link>
                            </div>
                            <div className='right-profile-2'>
                                <button onClick={handlelogout}>Logout</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='right'>
                        <Link to="/login"><button>Sign Up</button> </Link>
                        <Link to="/login"><button>Sign In</button></Link>
                    </div>
                )
            }

        </div >
    )
}

export default Header