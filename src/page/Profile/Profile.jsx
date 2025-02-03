import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import profileImage from '../../assets/profile.png'
import deleteImage from '../../assets/empty_profile_image.jpg'
import Footer from "../../components/Footer"
import Header from "./components/Header"
import './ProfilePage.css'

export default function Profile() {

    const [selected, setSelected] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState('Bilel');
    const [lastName, setLastName] = useState('Abbes');
    const [email, setEmail] = useState('b_abbes@estin.dz');
    const [number, setNumber] = useState('213512345678');
    const [strength, setStrength] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('')
    const [realPassword, setRealPassword] = useState('Estin#2004')
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(profileImage);
    const [infoMessage, setInfoMessage] = useState('')
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const { userId } = useParams();
    const [username, setUserName] = useState('')
    console.log(userId)




    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleReset = (e) => {
        e.preventDefault();
        if (oldPassword !== realPassword) {
            setMessage('Old Password incorrect')
            return;
        }
        if (strength === 'Weak' || strength === 'Moderate') {
            setMessage('Password is too weak. Please choose a stronger password.');
            return;
        }
        if (password === confirmPassword) {
            setRealPassword(password)
            setMessage('Password changed successfully.');
        } else {
            setMessage('Passwords do not match.');
        }
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        
        const updatedData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: number
        };
    
        try {
            const response = await fetch(`http://localhost:5000/api/profile/1`, {
                method: "PUT",  // or PATCH
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedData)
            });
    
            if (response.ok) {
                setInfoMessage("Changes saved successfully!");
            } else {
                setInfoMessage("Failed to save changes. Please try again.");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            setInfoMessage("Error saving changes.");
        }
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

 
    useEffect(() => {
        fetch('http://localhost:5000/api/patients')
            .then((response) => response.json())
            .then((data) => {
                const patient = data.find((patient) => patient.user_id == userId);
                console.log('the userrrrrr id: ', userId)
                console.log('Patient found:', patient);
                setFirstName(patient.first_name);
                setLastName(patient.last_name);
                setEmail(patient.email);
                setNumber(patient.phone);
                setUserName(patient.username);

                if (patient && patient.user_id) {
                    console.log(patient)
                } else {
                    console.log('No patient found with the specified email or user_id is missing.');
                }
            })
            .catch((error) => {
                console.error('Error fetching profile data:', error);
            });
    }, []);

    const isFormValid = () => {
        return password.length > 0 && confirmPassword.length > 0 && oldPassword.length > 0;
    };

    const isValid = () => {
        return firstName.length > 0 && lastName.length > 0;
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    const handleImageDelete = (e) => {
        setImage(deleteImage)
    }



    return (
        <div>
            <Header username={username}/>
            <div className="profile-container">
                <div className="change-screen">

                    <button type='button' className={`change-button ${selected ? 'selected' : ''}`}>Profile</button>
                    <Link to="/appointments">
                        <button type='button' className={`change-button ${!selected ? 'selected' : ''}`}>Appointments</button>
                    </Link>
                </div>
                <div className="profile-info">
                    <div className="choose-photo">
                        <img className='pro-image' src={image} alt="profile-image" />
                        <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}  // Hide the input visually
                        />
                        <h1>Abbes Bilel</h1>


                        <button type='button' className='photo-button delete-button' onClick={handleImageDelete}>Delete Photo</button>
                        <label htmlFor="file-upload" className="photo-button change-button">
                            Change Photo
                        </label>

                    </div>
                    <div className="personal-info">
                        <h1>Personal Information</h1>
                        <form className="input-box" onSubmit={handleSaveChanges}>
                            <div className="name-input">
                                <input className='normal-input' type="text" value={firstName} onChange={(e) => {
                                    setFirstName(e.target.value)
                                }} placeholder='First name' />
                                <input className='normal-input' type="text" value={lastName} onChange={(e) => {
                                    setLastName(e.target.value)
                                }} placeholder='Last name' />
                            </div>
                            <input className='normal-input' type="email" value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} placeholder='Email address' />
                            <input className='normal-input no-spinner' type="number" value={number} onChange={(e) => {
                                setNumber(e.target.value)
                            }} placeholder='Contact number' />

                            <button type='submit' className='save-changes' disabled={!emailRegex.test(email) || !isValid()}>Save Changes</button>
                            {infoMessage && <p className='info-message'>{infoMessage}</p>}
                        </form>
                    </div>
                    <div className="info-feild">
                        <h1>Change Password</h1>
                        <form className="input-box" onSubmit={handleReset}>
                            <div className='forgot-container'>
                                <div className="input-feild">
                                    <input className='pass-input' type={showPassword ? 'text' : 'password'} placeholder='Old Password' onChange={(e) => setOldPassword(e.target.value)} />
                                    <button onClick={toggleShowPassword} type='button' className='eye-button'>
                                        {showPassword ? <i className="first fa-solid fa-eye"></i> : <i className="first fa-solid fa-eye-slash"></i>}
                                    </button>
                                </div>
                                <Link to="/ForgotPassword">
                                    <button type='button' className='forgot'>Forgot Password ?</button>
                                </Link>
                            </div>
                            <div>
                                <div className={`input-feild ${strength.toLowerCase()}`}>
                                    <input className='pass-input' type={showPassword ? 'text' : 'password'} placeholder='New Password' onChange={(e) => {
                                        setPassword(e.target.value);
                                        checkPasswordStrength(e.target.value);
                                        { console.log(strength) }
                                    }} />
                                    <button onClick={toggleShowPassword} type='button' className='eye-button'>
                                        {showPassword ? <i className="first fa-solid fa-eye"></i> : <i className="first fa-solid fa-eye-slash"></i>}
                                    </button>
                                </div>
                                <p className={`strength state ${strength.toLowerCase()}`}>{strength}</p>
                            </div>
                            <div className="input-feild">
                                <input className='pass-input' type={showPassword ? 'text' : 'password'} placeholder='Confirm New Password' onChange={(e) => setConfirmPassword(e.target.value)} />
                                <button onClick={toggleShowPassword} type='button' className='eye-button'>
                                    {showPassword ? <i className="first fa-solid fa-eye"></i> : <i className="first fa-solid fa-eye-slash"></i>}
                                </button>
                            </div>
                            <button type='submit' className='save-changes change-pass' disabled={!isFormValid()}>Change Password</button>
                            {/* {message && <p className="error-text">{message}</p>} */}
                            {message && <p className={`${message === "Password changed successfully." ? 'not-error' : 'error-text'}`}>{message}</p>}

                        </form>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
