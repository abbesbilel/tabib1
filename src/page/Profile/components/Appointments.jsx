import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from "../../../components/Footer"
import Header from "./Header"
import ConsultationCard from './ConsultationCard';
import '../ProfilePage.css'

const Appointments = () => {

    const [selected, setSelected] = useState(false);

    const [appointments, setAppointments] = useState([
        {
            name: 'Dr. John Doe',
            date: '2024-12-31',
            buttonType: 'ongoing',
            photo: 'https://via.placeholder.com/100', // Example photo URL for Dr. John Doe
        },
        {
            name: 'Dr. Jane Smith',
            date: '2024-12-15',
            buttonType: 'cancel',
            photo: 'https://via.placeholder.com/100', // Example photo URL for Dr. Jane Smith
        },
        {
            name: 'Dr. Jane Smith',
            date: '2024-12-15',
            buttonType: 'cancel',
            photo: 'https://via.placeholder.com/100', // Example photo URL for Dr. Jane Smith
        },
        {
            name: 'Dr. Jane Smith',
            date: '2024-12-15',
            buttonType: 'cancel',
            photo: 'https://via.placeholder.com/100', // Example photo URL for Dr. Jane Smith
        },
        {
            name: 'Dr. Jane Smith',
            date: '2024-12-15',
            buttonType: 'cancel',
            photo: 'https://via.placeholder.com/100', // Example photo URL for Dr. Jane Smith
        },
        // Add more appointments as needed
    ]);

    const [appointments2, setAppointments2] = useState([
        {
            name: 'Dr. John Doe',
            date: '2024-12-31',
            buttonType: 'ongoing',
            photo: 'https://via.placeholder.com/100', // Example photo URL for Dr. John Doe
        },
        {
            name: 'Dr. Jane Smith',
            date: '2024-12-15',
            buttonType: 'cancel',
            photo: 'https://via.placeholder.com/100', // Example photo URL for Dr. Jane Smith
        },
        {
            name: 'Dr. Jane Smith',
            date: '2024-12-15',
            buttonType: 'cancel',
            photo: 'https://via.placeholder.com/100', // Example photo URL for Dr. Jane Smith
        },
        {
            name: 'Dr. Jane Smith',
            date: '2024-12-15',
            buttonType: 'cancel',
            photo: 'https://via.placeholder.com/100', // Example photo URL for Dr. Jane Smith
        },
        {
            name: 'Dr. Jane Smith',
            date: '2024-12-15',
            buttonType: 'cancel',
            photo: 'https://via.placeholder.com/100', // Example photo URL for Dr. Jane Smith
        },
        // Add more appointments as needed
    ]);


    const handleDeleteRdv = (indexToDelete) => {
        // Filter out the appointment from the list
        const updatedAppointments = appointments.filter(
            (_, index) => index !== indexToDelete
        );
        setAppointments(updatedAppointments);
    };

    return (
        <div className='page-app-container'>
            <Header />
            <div className="change-screen">
                    
                    <Link to="/profile">
                    <button type='button' className={`change-button ${selected ? 'selected' : ''}`}>Profile</button>
                    </Link>
                    <button type='button' className={`change-button ${!selected ? 'selected' : ''}`}>Appointments</button>
                </div>
            <div className="the-container">
                <div className="appointments-container">
                    <h1 className='consult-title'>Clinic Consultation</h1>
                    <ConsultationCard appointments={appointments} onDelete={handleDeleteRdv} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Appointments;