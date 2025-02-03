import React, { useState } from 'react'
import logoImage from '../../../assets/DZTABIB.png'
import profileImage from '../../../assets/profile.png'
import { Link } from 'react-router-dom';

export default function Header({username}) {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleCaretClick = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleLogout = () => {
        console.log("User logged out");
      };

    return (
        <div className='header-container'>
            <Link to="/landingpage">
            <div className="logo">
                <img src={logoImage} alt="logo-image" />
            </div>
            </Link>
            {/* <div className="screens">
                <ul className='screens-list'>
                    <li className='screen'><a href="#">Home</a></li>
                    <li className='screen'><a href="#">Services</a></li>
                    <li className='screen'><a href="#">Team</a></li>
                    <li className='screen'><a href="#">Testimonials</a></li>
                </ul>
            </div> */}
            <div className="profile">
                <img className='profile-image' src={profileImage} alt="profile-image" />
                <div className="profile-text">
                    <h2>{username}</h2>
                    <button type='button' className='caret-button' onClick={handleCaretClick}>
                        <i className="fa-solid fa-caret-down"></i>
                    </button>
                    
                </div>
                {isDropdownVisible && (
                        <Link to="/">
                        <div className="dropdown-menu" onClick={handleLogout}>
                            <button className="logout-button">Logout</button>
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </div>
                        </Link>
                    )}
            </div>
        </div>
    )
}
