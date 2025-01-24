import React from 'react'
import './SeleCtion.css'
import faceb from '../assets/face.png'
import wattsup from '../assets/whatsapp.png'
import select from '../assets/selection.png'
import DzTabib from '../DzTabib/DzTabib'
import DoctorGrid from './DoctorGrid'


const SeleCtion = () => {

    return (
        <div className='app-container'>
            <header className="header-appoint">
                <div className="logo">
                    <span className="logo-dz">DZ</span>
                    <span className="logo-tabib">TABIB</span>
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by doctor's name, specialty, or location."
                        className="search-input"
                    />
                    <div className="search-button"><div className='search-paragraphe'>Search</div></div>
                </div>
            </header>

            <nav className="filter-nav">
                <img src={select} alt=""  />
                <button className="filter-button outline">
                    Location
                </button>

                <button className="filter-button outline">
                    Specialty
                </button>

                <button className="filter-button outline">
                    Availability
                </button>

                <button className="filter-button outline">
                    Insurance
                </button>

                <button className="filter-button outline">
                    Languages
                </button>

                <button className="filter-button outline">
                    Ratings
                </button>

                <button className="filter-button outline">
                    Teleconsultation
                </button>
            </nav>
            <div>
                <DoctorGrid />
            </div>


            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="logo">
                            <span className="logo-dz">DZ</span>
                            <span className="logo-tabib">TABIB</span>
                        </div>
                        <div className='place'>8 W. South St.Buford, GA 30518</div>
                        <div className='place'>5Briarwood LaneVienna, VA 22180 RER</div>
                        <div className="social-icons">
                            <img className='facebook' src={faceb} alt="facebook" />
                            <img className='wattsup' src={wattsup} alt="google" />
                        </div>
                    </div>

                    <div className="footer-section">
                        <a href="#">Home</a>
                        <a href="#">Services</a>
                        <a href="#">Our team</a>
                        <a href="#">Testimonials</a>
                    </div>

                    <div className="footer-section">
                        <h3>Book Now</h3>
                        <a href="#">Appointment</a>
                        <a href="#">Teleconsultation</a>
                    </div>

                    <div className="footer-section">
                        <h3>Contact</h3>
                        <p>DZTABIB@mail.com</p>
                        <p>Phone: +213512345678</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    © all rights reserved 2024
                </div>
            </footer>
        </div>
    )
}

export default SeleCtion
