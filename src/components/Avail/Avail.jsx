import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Avail.css';
import tabib from '../assets/tabib.png';

const AvaIl = () => {
    const [availability, setAvailability] = useState({
        openingHour: '',
        closingHour: '',
        startBreak: '',
        endBreak: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAvailability((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (!availability.openingHour || !availability.closingHour) {
            alert('Please fill in the required fields: Opening Hour and Closing Hour.');
            return;
        }
        console.log('Availability Data:', availability);
        alert('Availability submitted successfully!');
    };

    return (
        <div>
            <div>
                <div className="containeru">
                    <div className="header2u">
                        <div className="signinu">
                            <h1>Sign Up to <span>DZ</span>TABIB</h1>
                        </div>
                        <div className="registeru">
                            If you already have an account<br />You can <Link to="/"><span>Register here!</span></Link>
                        </div>

                        <div className="photou">
                            <img className="phototabibu" src={tabib} alt="tabib" />
                        </div>
                    </div>
                    <div className="container2uPP">
                        <div className="headeruP">
                            <div className="textu">
                                <h2>Availability Management</h2>
                            </div>
                            <div className="underlineWH">Working Hours</div>
                        </div>
                        <div className="inputsu">
                            <div className="inputSoc">
                                <input
                                    className="input1Soc"
                                    type="text"
                                    placeholder="Opening Hour"
                                    name="openingHour"
                                    value={availability.openingHour}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="inputSoc">
                                <input
                                    className="input1Soc"
                                    type="text"
                                    placeholder="Closing Hour"
                                    name="closingHour"
                                    value={availability.closingHour}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="inputSoc">
                                <input
                                    className="input1Soc"
                                    type="text"
                                    placeholder="Start Break (Optional)"
                                    name="startBreak"
                                    value={availability.startBreak}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="inputSoc">
                                <input
                                    className="input1Soc"
                                    type="text"
                                    placeholder="End Break (Optional)"
                                    name="endBreak"
                                    value={availability.endBreak}
                                    onChange={handleChange}
                                />
                            </div>
                            <Link to="/map"><div className="submit-containeruSoc">
                                <div className="submituSoc" onClick={handleSubmit}>Next</div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvaIl;
