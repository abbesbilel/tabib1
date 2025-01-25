import React, { useState } from 'react';
import './Appoint.css'
import pose from '../assets/pose.png'
import faceb from '../assets/face.png'
import wattsup from '../assets/whatsapp.png'


const Appoint = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        visitReason: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="app-container">
            {/* Header */}
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

            {/* Main Content */}
            <main className="main-content">
                <div className="content-container">
                    <div className="doctor-image">
                        <img src={pose} alt="Doctor illustration" className="doctor-illustration" />
                    </div>

                    <div className="booking-form">
                        <h2 className="booking-title">
                            <span className="book-an">BOOK AN</span>
                            <span className="appointment">Appointment</span>
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Preferred Date</label>
                                <input
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label>Preferred Time</label>
                                <input
                                    type="time"
                                    value={formData.time}
                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    className="form-input"
                                />
                            </div>


                            <div className="form-group">
                                <label>Reason for Visit</label>
                                <div className="radio-group">
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="visitReason"
                                            value="routine"
                                            onChange={(e) => setFormData({ ...formData, visitReason: e.target.value })}
                                        />
                                        Routine Checkup
                                    </label>
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="visitReason"
                                            value="new"
                                            onChange={(e) => setFormData({ ...formData, visitReason: e.target.value })}
                                        />
                                        New Patient Visit
                                    </label>
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="visitReason"
                                            value="specific"
                                            onChange={(e) => setFormData({ ...formData, visitReason: e.target.value })}
                                        />
                                        Specific Concern
                                    </label>
                                </div>
                            </div>

                            <div type="submit" className="submit-button"><div className='submit-paragraphe'></div>
                                Submit →
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            {/* Footer */}
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
    );
}

export default Appoint
