import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import tabib from '../assets/tabib.png';
import './SocialMedia.css';

const SocialMedia = () => {
    const [socialLinks, setSocialLinks] = useState({
        facebook: '',
        instagram: '',
        linkedin: '',
        twitter: '',
    });

    const [message, setMessage] = useState(''); // Message dynamique
    const [error, setError] = useState(''); // Gestion des erreurs

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSocialLinks((prevLinks) => ({
            ...prevLinks,
            [name]: value,
        }));
    };

    const validateLinks = () => {
        const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/;
        const invalidLinks = Object.entries(socialLinks).filter(([key, value]) => value && !urlPattern.test(value));
        if (invalidLinks.length > 0) {
            return `Invalid link for ${invalidLinks.map(([key]) => key).join(', ')}`;
        }
        return null;
    };

    const handleSubmit = () => {
        const validationError = validateLinks();
        if (validationError) {
            setError(validationError);
            setMessage('');
            return;
        }

        setError('');
        setMessage('Social media links saved successfully!');
        console.log('Social Media Links:', socialLinks);

        // Reset links (optional)
        setSocialLinks({
            facebook: '',
            instagram: '',
            linkedin: '',
            twitter: '',
        });
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
                            You can <Link to="/"><span>Register here!</span></Link>
                        </div>

                        <div className="photou">
                            <img className="phototabibu" src={tabib} alt="tabib" />
                        </div>
                    </div>
                    <div className="container2uPP">
                        <div className="headeruP">
                            <div className="textu">
                                <h2>Social Media</h2>
                            </div>
                            <div className="underlineu"></div>
                        </div>
                        {message && <div className="message">{message}</div>}
                        {error && <div className="error">{error}</div>}
                        <div className="inputsu">
                            <div className="inputSoc">
                                <input
                                    className="input1Soc"
                                    type="text"
                                    placeholder="Facebook Link"
                                    name="facebook"
                                    value={socialLinks.facebook}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="inputSoc">
                                <input
                                    className="input1Soc"
                                    type="text"
                                    placeholder="Instagram Link"
                                    name="instagram"
                                    value={socialLinks.instagram}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="inputSoc">
                                <input
                                    className="input1Soc"
                                    type="text"
                                    placeholder="Linkedin Link"
                                    name="linkedin"
                                    value={socialLinks.linkedin}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="inputSoc">
                                <input
                                    className="input1Soc"
                                    type="text"
                                    placeholder="Twitter Link"
                                    name="twitter"
                                    value={socialLinks.twitter}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <Link to="/Page">
                            <div className="submit-containeruSoc">
                                <div className="submituSoc" onClick={handleSubmit}>
                                    Done
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;
