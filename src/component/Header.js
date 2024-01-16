import React from 'react'
import "../css/Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className='left'>
                <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/A30D03/car--v2.png" alt="car--v2" />
            </div>
            <div className='mid'>
                <Link to="/">Home</Link>
                <Link>Ride</Link>
                <Link>Services</Link>
                <Link>About</Link>
                <Link>Reviews</Link>
            </div>
            <div className='right'>
                <Link to="/login"><button>Sign Up</button> </Link>
                <Link to="/login"><button>Sign In</button></Link>

            </div>

        </div >
    )
}

export default Header