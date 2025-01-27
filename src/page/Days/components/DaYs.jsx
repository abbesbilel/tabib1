import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './DaYs.css';
import tabib from '../../../assets/tabib.png';

const DaYs = () => {
    const [days, setDays] = useState([
        { name: 'Sunday', isGreen: true },
        { name: 'Monday', isGreen: true },
        { name: 'Tuesday', isGreen: true },
        { name: 'Wednesday', isGreen: false },
        { name: 'Thursday', isGreen: false },
        { name: 'Friday', isGreen: false },
        { name: 'Saturday', isGreen: true },
    ]);

    // Toggle green and red states
    const toggleGreen = (index) => {
        setDays((prevDays) =>
            prevDays.map((day, i) =>
                i === index ? { ...day, isGreen: !day.isGreen } : day
            )
        );
    };

    // Save green days to local storage
    const saveGreenDays = () => {
        const greenDays = days.filter((day) => day.isGreen).map((day) => day.name);
        localStorage.setItem('greenDays', JSON.stringify(greenDays));
        alert('Selected green days have been saved!');
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
                                <h2>Availability Management</h2>
                            </div>
                            <div className="underlineWH">Working Days</div>
                        </div>
                        <div className="inputsu">
                            <div className="grid-container">
                                {days.map((day, index) => (
                                    <div
                                        key={index}
                                        className={`day ${day.isGreen ? 'green' : 'red'}`}
                                        onClick={() => toggleGreen(index)}
                                    >
                                        {day.name}
                                    </div>
                                ))}
                            </div>
                            <div className="submit-containeruday">
                                <Link to="/avail"><div className="submituday" onClick={saveGreenDays}>
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

export default DaYs;
