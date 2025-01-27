import React, { useState } from 'react';
import sadDoctorImage from '../../../assets/sad_doctor.png'
import logoImage from '../../../assets/DZTABIB.png'
import './ForgotPassword.css';

const ForgotPassword = ({ onNext }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending email
        if (email) {
            setMessage('A verification code has been sent to your email.');
            onNext();  // Proceed to next step (code verification)
        } else {
            setMessage('Please enter a valid email.');
        }
    };

    return (
        <div>
            <div className='logo'>
                <img src={logoImage} alt="" />
            </div>
            <div className="container">
                <div className="image">
                    <img src={sadDoctorImage} alt="" />
                </div>
                <div className="content">
                    <h2>Forgot Password</h2>
                    <p>Enter your email for the verification proccess,we will send 4 digits code to your email.</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            className='address'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder='Enter your email address'
                        />
                        <button className='code' type="submit" disabled={!emailRegex.test(email)}>Send Code</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
