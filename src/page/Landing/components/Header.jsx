import React, { useState, useEffect } from 'react'
import logoImage from '../../../assets/DZTABIB.png'
import profileImage from '../../../assets/profile.png'
import { Link } from 'react-router-dom';

export default function Header() {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); // Track the active section
    const [isLogedIn, setIsLogedIn] = useState(true)

    const handleCaretClick = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleLogout = () => {
        console.log("User logged out");
    };

    // Function to handle scroll events and update active section
    const handleScroll = () => {
        const sections = ['home', 'services', 'team', 'testimonials'];
        let foundSection = 'home';

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
                foundSection = section;
            }
        });

        setActiveSection(foundSection);
    };

    // Use useEffect to add event listener for scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='header-container1'>
            <div className="logo1">
                <img src={logoImage} alt="logo-image" />
            </div>
            <div className="screens">
                <ul className='screens-list'>
                    <li className='screen'>
                        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
                    </li>
                    <li className='screen'>
                        <a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a>
                    </li>
                    <li className='screen'>
                        <a href="#team" className={activeSection === 'team' ? 'active' : ''}>Team</a>
                    </li>
                    <li className='screen'>
                        <a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''}>Testimonials</a>
                    </li>
                </ul>
            </div>



            {isLogedIn ? (
                <div className="profile">
                    <Link to="/profile">
                        <img className='profile-image' src={profileImage} alt="profile-image" />
                    </Link>
                    <div className="profile-text">
                        <h2>Abbes Bilel</h2>
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
            ) : (
                <div className="login">
                    <i className="fa-solid fa-user"></i>
                    <span>Sign in</span>
                </div>
            )}

        </div>
    )
}