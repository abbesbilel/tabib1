import React from 'react';
import DoctorCard from './DoctorCard';
import './DoctorGrid.css';

const DoctorGrid = () => {
    const doctors = Array(9).fill({
        name: 'Dr. Lisa Chen, MD',
        specialty: 'Cardiologist',
        rating: 4,
        imageUrl: '/placeholder.svg'
    });

    return (
        <div className="doctor-grid">
            {doctors.map((doctor, index) => (
                <DoctorCard
                    key={index}
                    name={doctor.name}
                    specialty={doctor.specialty}
                    rating={doctor.rating}
                    imageUrl={doctor.imageUrl}
                />
            ))}
        </div>
    );
};

export default DoctorGrid;

