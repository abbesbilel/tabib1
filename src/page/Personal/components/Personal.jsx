import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import tabib from '../../../assets/tabib.png';
import './Personal.css';

const PersoNal = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // Validate the data
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Saved Personal Information:', formData);
        alert('Personal information saved successfully!');
        // Add logic here to navigate to the next step or save data to a backend
    };

    return (
        <div>
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
                    <div className="photou">
                        <img className="phototabibu" src={tabib} alt="tabib" />
                    </div>
                </div>
                <div className="container2u">
                    <div className="headeru">
                        <div className="textu">
                            <h2>Personal Information</h2>
                        </div>
                        <div className="underlineu"></div>
                    </div>
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
                            <input
                                className="inpu"
                                type="text"
                                placeholder="Last name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
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
                        </div>
                        <div className="inputu">
                            <input
                                className="input1uu"
                                type="number"
                                placeholder="Contact number"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                            />
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
                        </div>
                        <div className="submit-containeruP">
                            <Link to="/professionalinformation"><div className="submituP" onClick={handleSubmit}>
                                Next
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersoNal;
