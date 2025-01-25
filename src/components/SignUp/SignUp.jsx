import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import facebook from '../assets/Facebook.png';
import google from '../assets/google.png';
import tabib from '../assets/tabib.png';
import './SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(''); // Message dynamique

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = 'Valid email is required.';
        if (!formData.contact.trim() || formData.contact.length < 10)
            newErrors.contact = 'Contact number must be at least 10 digits.';
        if (!formData.password.trim() || formData.password.length < 6)
            newErrors.password = 'Password must be at least 6 characters.';
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = 'Passwords do not match.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = () => {
        if (!validateForm()) {
            setMessage('Please fix the errors above before registering.');
            return;
        }

        // Enregistrer les données (simulé ici avec console.log)
        console.log('User Information:', formData);
        setMessage('Registration successful!'); // Afficher le message de succès

        // Réinitialiser le formulaire
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            password: '',
            confirmPassword: '',
        });

        setErrors({});
    };

    return (
        <div className="containeru">
            <div className="header2u">
                <div className="signinu">
                    <h1>
                        Sign Up to <span>DZ</span>TABIB
                    </h1>
                </div>
                <div className="registeru">
                    If you already have an account
                    <br />
                    You can <Link to="/"><span>Register here!</span></Link>
                </div>
                <div className="photou">
                    <img className="phototabibu" src={tabib} alt="tabib" />
                </div>
            </div>
            <div className="container2u">
                <div className="headeru">
                    <div className="textu">
                        <h2>Sign Up</h2>
                    </div>
                    <div className="underlineu"></div>
                </div>
                {message && <div className="message">{message}</div>} {/* Section pour afficher les messages */}
                <div className="inputsu">
                    <div className="inputufn">
                        <input
                            className="inpu"
                            type="text"
                            placeholder="First name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        {errors.firstName && <p className="error">{errors.firstName}</p>}
                        <input
                            className="inpu"
                            type="text"
                            placeholder="Last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
                    </div>
                    <div className="inputu">
                        <input
                            className="input1u"
                            type="email"
                            placeholder="Email address"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="inputu">
                        <input
                            className="input1u"
                            type="number"
                            placeholder="Contact number"
                            name="contact"
                            value={formData.contact}
                            onChange={handleInputChange}
                        />
                        {errors.contact && <p className="error">{errors.contact}</p>}
                    </div>
                    <div className="inputu">
                        <input
                            className="input1u"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="inputu">
                        <input
                            className="input1u"
                            type="password"
                            placeholder="Confirm password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    </div>
                    <div className="submit-containeru">
                        <Link to="/choice"><div className="submitu" onClick={handleRegister}>
                            Register
                        </div>
                        </Link>
                    </div>
                    <div className="signupu">
                        You already have an account! <span><Link to="/">Sign In</Link></span>
                    </div>
                    <div className="continueu">Or continue with</div>
                    <div className="imagesu">
                        <img className="fbu" src={facebook} alt="facebook" />
                        <img className="googleu" src={google} alt="google" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
