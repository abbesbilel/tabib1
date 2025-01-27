import React from 'react';
import './DoctorCard.css';
import tabib from '../../../assets/rec.png'
import chat from '../../../assets/chat.png'
import chat2 from '../../../assets/chat2.png'

const DoctorCard = ({ name, specialty, rating, }) => {
    return (
        <div className="doctor-card">
            <img src={tabib} alt={`${name}`} className="doctor-image" />
            <h2 className="doctor-name">{name}</h2>
            <p className="doctor-specialty">{specialty}</p>
            <div className="rating">
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className={`star ${index < rating ? 'filled' : 'empty'}`}
                    >
                        ★
                    </span>
                ))}
            </div>
            <button className="info-button"><img src={chat} alt="" />More Info</button>
            <button className="appointment-button"><img src={chat2} alt="" />Book an appointment</button>
        </div>
    );
};

export default DoctorCard;