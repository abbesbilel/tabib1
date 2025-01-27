import React, { useState } from 'react';
import './Appoint.css'
import axios from 'axios';
import pose from '../../../assets/pose.png'
import faceb from '../../../assets/face.png'
import wattsup from '../../../assets/whatsapp.png'
import { Link } from 'react-router-dom';


const Appoint = ({ doctorId, patientId }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        visitReason: '',
    });
    const [message, setMessage] = useState(''); // For success/error messages
    const [isLoading, setIsLoading] = useState(false); // For loading state

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.date || !formData.time || !formData.visitReason) {
            setMessage('Please fill in all fields.');
            return;
        }

        setIsLoading(true);
        setMessage('');

        try {
            const response = await axios.post('http://localhost:5000/appointments', {
                doctor_id: doctorId, // Pass the doctor's ID
                patient_id: patientId, // Pass the patient's ID
                appointment_date: formData.date,
                appointment_time: formData.time,
                consultation_type_id: 1, // Replace with the actual consultation type ID
                status: 'En attente', // Default status
                notes: formData.visitReason, // Use the visit reason as notes
                medical_certificate_required: false, // Default to false
            });

            if (response.status === 201) {
                setMessage('Appointment booked successfully!');
                // Reset the form
                setFormData({
                    date: '',
                    time: '',
                    visitReason: '',
                });
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
            setMessage('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
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

                    {message && <div className="message">{message}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Preferred Date</label>
                            <input
                                type="date"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Preferred Time</label>
                            <input
                                type="time"
                                value={formData.time}
                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                className="form-input"
                                required
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
                                        required
                                    />
                                    Routine Checkup
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="visitReason"
                                        value="new"
                                        onChange={(e) => setFormData({ ...formData, visitReason: e.target.value })}
                                        required
                                    />
                                    New Patient Visit
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="visitReason"
                                        value="specific"
                                        onChange={(e) => setFormData({ ...formData, visitReason: e.target.value })}
                                        required
                                    />
                                    Specific Concern
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="submit-button" disabled={isLoading}>
                            {isLoading ? 'Booking...' : 'Submit →'}
                        </button>
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
