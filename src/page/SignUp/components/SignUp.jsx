import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; // Ensure you have the CSS file for styling

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: '',
        gender: '',
        dateOfBirth: '',
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Restrict gender input to only one letter and convert it to uppercase
        if (name === 'gender') {
            if (value.length <= 1) {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: value.toUpperCase(),
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
        if (!formData.username.trim()) newErrors.username = 'Username is required.';
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = 'Valid email is required.';
        if (!formData.contact.trim() || formData.contact.length < 10)
            newErrors.contact = 'Contact number must be at least 10 digits.';
        if (!formData.password.trim() || formData.password.length < 6)
            newErrors.password = 'Password must be at least 6 characters.';
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = 'Passwords do not match.';
        if (!formData.gender.trim()) newErrors.gender = 'Gender is required.';
        if (!formData.dateOfBirth.trim()) newErrors.dateOfBirth = 'Date of birth is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = async () => {
        if (!validateForm()) {
            setMessage('Please fix the errors above before registering.');
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:5000/auth/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    date_of_birth: formData.dateOfBirth,
                    account_type: 'patient',
                    gender: formData.gender, // Gender is already uppercase
                    contact: formData.contact,
                }),
            });
            const data = await response.json();

            if (response.ok) {
                setMessage('Registration successful!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    contact: '',
                    password: '',
                    confirmPassword: '',
                    gender: '',
                    dateOfBirth: '',
                });
                setErrors({});
            } else {
                setMessage(data.msg || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="containeruu">
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
            </div>
            <div className="container2u">
                <div className="headeru">
                    <div className="textu">
                        <h2>Sign Up</h2>
                    </div>
                    <div className="underlineu"></div>
                </div>
                {message && <div className="message">{message}</div>}
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
                            className="input1uu"
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div className="inputu">
                        <input
                            className="input1uu"
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
                            className="input1uu"
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
                            className="input1uu"
                            type="text"
                            placeholder="Gender (1 letter)"
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                        />
                        {errors.gender && <p className="error">{errors.gender}</p>}
                    </div>
                    <div className="inputu">
                        <input
                            className="input1uu"
                            type="date"
                            placeholder="YYYY-MM-DD"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                        />
                        {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
                    </div>
                    <div className="inputu">
                        <input
                            className="input1uu"
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
                            className="input1uu"
                            type="password"
                            placeholder="Confirm password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    </div>
                    <div className="submit-containeru">
                        <button className="submitu" onClick={handleRegister} disabled={isLoading}>
                            {isLoading ? 'Registering...' : 'Register'}
                        </button>
                    </div>
                    <div className="signupu">
                        You already have an account! <span><Link to="/">Sign In</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
