import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import tabib from '../../assets/tabib.png';
import './MaP.css';

const MaP = () => {
    const [formData, setFormData] = useState({
        address: '',
        mapLocation: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        console.log('Saved Information:', formData);
        // Add logic here to send the data to a backend or save it elsewhere
        alert('Information Saved Successfully!');
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
                                <h2>Location Information</h2>
                            </div>
                            <div className="underlineu"></div>
                        </div>
                        <div className="inputsu">
                            <div className="inputu">
                                <input
                                    className="input1uu"
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="inputu">
                                <input
                                    className="input1uu"
                                    type="text"
                                    placeholder="Map Location"
                                    name="mapLocation"
                                    value={formData.mapLocation}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="conteneur-carte">
                                <div id="carte" className="carte">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.9649457851684!2d3.0523565!3d36.7538197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb3137a1c3eaf%3A0x674a4cd6c0f2b1c4!2sAlger%2C%20Alg%C3%A9rie!5e0!3m2!1sfr!2sdz!4v1635959562000!5m2!1sfr!2sdz"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="submit-containeruday">
                                <Link to="/Socialmedia"><div className="submituday" onClick={handleSubmit}>
                                    Done
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

export default MaP;
