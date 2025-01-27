import React, { useState, useEffect } from 'react';
import DoctorCard from '../../../components/DoctorCard';
import SectionHeader from './SectionHeader';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Team() {
    const [doctors, setDoctors] = useState([]);

    // Fetch doctors from the backend
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/doctors');
                setDoctors(response.data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <div className='team-container' id='team'>
            <div className='section-view'>
            <SectionHeader sectionName={'Our Team'} />
            <Link to="/selection">
            <button className='view-button'>View all</button>
            </Link>
            </div>
            <div className="cards-container">
                {doctors.map((doctor, index) => (
                    <DoctorCard
                        key={index}
                        name={doctor.doctor_name}
                        spec={doctor.specialty}
                        rating={doctor.rating}
                        photo={doctor.photo}
                    />
                ))}
            </div>
        </div>
    );
}