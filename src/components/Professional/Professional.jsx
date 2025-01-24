import React, { useState } from 'react';
import { PaperclipIcon as PaperClip } from 'lucide-react';
import facebook from '../assets/Facebook.png';
import google from '../assets/google.png';
import tabib from '../assets/tabib.png';
import './Professional.css';

const ProfessioNal = () => {
    const [formData, setFormData] = useState({
        medicalLicence: '',
        speciality: '',
        cv: '',
        languages: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prevData) => ({
                ...prevData,
                cv: file.name, // Display the file name in the CV field
            }));
        }
    };

    const handleSubmit = () => {
        // Validation logic can be added here
        if (!formData.medicalLicence || !formData.speciality) {
            alert('Please fill in all required fields!');
            return;
        }
        console.log('Saved Professional Information:', formData);
        alert('Professional information saved successfully!');
        // Add logic here to navigate to the next step or save data to a backend
    };

    return (
        <div>
            <div>
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
                            You can <span>Register here!</span>
                        </div>
                        <div className="photou">
                            <img className="phototabibu" src={tabib} alt="tabib" />
                        </div>
                    </div>
                    <div className="container2uPP">
                        <div className="headeruP">
                            <div className="textu">
                                <h2>Professional Information</h2>
                            </div>
                            <div className="underlineu"></div>
                        </div>
                        <div className="inputsu">
                            <div className="inputu">
                                <input
                                    className="input1u"
                                    type="number"
                                    placeholder="Medical Licence number"
                                    name="medicalLicence"
                                    value={formData.medicalLicence}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="inputu">
                                <input
                                    className="input1u"
                                    type="text"
                                    placeholder="Speciality"
                                    name="speciality"
                                    value={formData.speciality}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="inputu">
                                <input
                                    className="input1u"
                                    type="text"
                                    placeholder="CV"
                                    name="cv"
                                    value={formData.cv}
                                    readOnly
                                />
                                <div className="cv-input-icon" onClick={() => document.getElementById('cvUpload').click()}>
                                    <PaperClip size={20} />
                                </div>
                                <input
                                    id="cvUpload"
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx"
                                />
                            </div>
                            <div className="inputu">
                                <input
                                    className="input1u"
                                    type="text"
                                    placeholder="Languages Spoken"
                                    name="languages"
                                    value={formData.languages}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="submit-containeruP">
                                <div className="submituP" onClick={handleSubmit}>
                                    Next
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessioNal;
