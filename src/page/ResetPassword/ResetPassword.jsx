import React, { useState } from 'react';
import sadDoctorImage from '../../assets/sad_doctor.png';
import logoImage from '../../assets/DZTABIB.png';
import './ResetPassword.css'
import '../ForgotPassword/ForgotPass.css'
import { useNavigate } from 'react-router-dom';

const ResetPassword = ({ onNext }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [strength, setStrength] = useState('');
    const navigate = useNavigate();

    const handleReset = (e) => {
        e.preventDefault();
        if (strength === 'Weak'|| strength === 'Moderate') {
            setMessage('Password is too weak. Please choose a stronger password.');
            return;
        }
        if (password === confirmPassword) {
            navigate('/Success');
        } else {
            setMessage('Passwords do not match.');
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    const checkPasswordStrength = (password) => {
        let strengthLevel = 0;

        if (password.length >= 8) strengthLevel++;
        if (/[A-Z]/.test(password) || /[a-z]/.test(password)) strengthLevel++;
        if (/[0-9]/.test(password)) strengthLevel++;
        if (/[^A-Za-z0-9]/.test(password)) strengthLevel++;

        switch (strengthLevel) {
            case 0:
                setStrength('');
                break;
            case 1:
                setStrength('Weak');
                break;
            case 2:
                setStrength('Moderate');
                break;
            case 3:
                setStrength('Strong');
                break;
            case 4:
                setStrength('Very Strong');
                break;
            default:
                setStrength('');
        }
    };

    const isFormValid = () => {
        return password.length > 0 && confirmPassword.length > 0;
    };

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
                    <h2>Reset Password</h2>
                    <p>Set the new password for your account, and try to remember it this time.</p>
                    <form onSubmit={handleReset}>
                        <div className={`eye nor strength ${strength.toLowerCase()}`}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    checkPasswordStrength(e.target.value);
                                }}
                                required
                                placeholder='New Password'
                                className='pass-input'
                            />
                            <button onClick={toggleShowPassword} type='button'>
                            {showPassword ? <i className="first fa-solid fa-eye"></i> : <i className="first fa-solid fa-eye-slash"></i>}
                            </button>
                        </div>
                            <p className={`strength state ${strength.toLowerCase()}`}>{strength}</p>
                        <div className="eye fixbug-eye">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                placeholder='Confirm Password'
                                className='pass-input'
                            />
                            <button onClick={toggleShowPassword} type='button'>
                            {showPassword ? <i className="first fa-solid fa-eye"></i> : <i className="first fa-solid fa-eye-slash"></i>}
                            </button>
                        </div>
                        <button type="submit" className='reset-password' disabled={!isFormValid()}>Reset Password</button>
                    </form>
                    {message && <p className="error-text">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
