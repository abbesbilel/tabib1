import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import tabib from '../../../assets/tabib.png';
import './Practiceinformation.css';

const PracticeiNformation = () => {
    const [formData, setFormData] = useState({
        clinicName: '',
        consultationFee: '',
        insuranceAccepted: '',
        teleconsultation: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            teleconsultation: e.target.checked,
        }));
    };

    const handleSubmit = () => {
        // Validation logic if needed
        if (!formData.clinicName || !formData.consultationFee) {
            alert('Please fill in all required fields!');
            return;
        }
        console.log('Saved Practice Information:', formData);
        alert('Practice information saved successfully!');
        // Add logic here to navigate to the next step or save data to a backend
    };

    return (
        <div>
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
                                <h2>Practice Information</h2>
                            </div>
                            <div className="underlineu"></div>
                        </div>
                        <div className="inputsu">
                            <div className="inputu">
                                <input
                                    className="input1uu"
                                    type="text"
                                    placeholder="Clinic Name"
                                    name="clinicName"
                                    value={formData.clinicName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="inputu">
                                <input
                                    className="input1uu"
                                    type="text"
                                    placeholder="Consultation Fee                                                                                                     DA"
                                    name="consultationFee"
                                    value={formData.consultationFee}
                                    onInput={(e) => {
                                        const value = e.target.value.replace(/[^\d]/g, '');
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            consultationFee: value,
                                        }));
                                    }}
                                />
                            </div>
                            <div className="inputu">
                                <input
                                    className="input1uu"
                                    type="text"
                                    placeholder="Insurance/Mutuelle Accepted"
                                    name="insuranceAccepted"
                                    value={formData.insuranceAccepted}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="inputu">
                                <input
                                    className="input1uu uu"
                                    type="text"
                                    placeholder="Teleconsultation"
                                    disabled
                                />
                                <div className="teleconsultation">
                                    <label className="teleconsultation-label">
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                checked={formData.teleconsultation}
                                                onChange={handleCheckboxChange}
                                            />
                                            <span className="slider"></span>
                                        </label>
                                    </label>
                                </div>
                            </div>
                            <div className="submit-containeruP">
                                <Link to="/days"><div className="submituP" onClick={handleSubmit}>
                                    Next
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PracticeiNformation;
