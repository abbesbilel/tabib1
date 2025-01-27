import React, { useState, useRef } from 'react';
import sadDoctorImage from '../../assets/sad_doctor.png';
import logoImage from '../../assets/DZTABIB.png';
import './VerifyCode.css';

const VerifyCode = ({ onNext }) => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [resendTimer, setResendTimer] = useState(false);
    

    const inputRefs = useRef([]);

    const handleVerify = (e) => {
        e.preventDefault();
        if (code === '1234') {
            onNext();
        } else {
            setError('Invalid code. Try again.');
        }
    };

    const handleChange = (e, index) => {
        const value = e.target.value;

        // Prevent non-numeric input
        if (/[^0-9]/.test(value)) return;

        // Split the code into an array, update the digit at the specified index, and join it back
        const newCode = code.split('');
        newCode[index] = value;
        setCode(newCode.join(''));

        if (index < 3 && value !== '') {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleResend = () => {
        // Simulate the resend process. In a real app, you would call the backend here.
        setError(''); // Reset error message if the user tries to resend
        setResendTimer(true);
        
        // Simulate a countdown for resend button availability
        setTimeout(() => {
            setResendTimer(false);
        }, 60000); // 30 seconds delay (you can adjust as needed)
    };

    const isCodeComplete = code.length === 4;

    return (
        <div>
            <div className="logo">
                <img src={logoImage} alt="Logo" />
            </div>
            <div className="container">
                <div className="image">
                    <img src={sadDoctorImage} alt="Sad doctor" />
                </div>
                <div className="content">
                    <h2>Enter Verification Code</h2>
                    <p>Enter your 4-digit code that you received on your email.</p>
                    <form onSubmit={handleVerify} className='verification-form'>
                        <div className="code-inputs">
                            {[...Array(4)].map((_, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={code[index] || ''}
                                    onChange={(e) => handleChange(e, index)} // Using the handleChange function
                                    maxLength="1"
                                    required
                                    className={'digit' + (error ? 'digit error digit' : '')}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                />
                            ))}
                        </div>
                        <button type="submit" className='verify-button' disabled={!isCodeComplete}>Verify</button>
                    </form>
                    {error && <p className="error-text">{error}</p>}
                    {!resendTimer ? (
                        <p className='receive'>If you did nor receive a code! <button className='resend' onClick={handleResend}>Resend.</button></p>
                    ) : (
                        <p className='receive'>Please wait 60 seconds before resending the code.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VerifyCode;
