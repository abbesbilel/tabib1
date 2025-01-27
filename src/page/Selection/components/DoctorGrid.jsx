import React from 'react';
import DoctorCard from '../../../components/DoctorCard';
import './DoctorGrid.css';
import tabib from '../../../assets/rec.png';

const DoctorGrid = () => {
    const doctors = Array(9).fill({
        name: 'Dr. Lisa Chen, MD',
        specialty: 'Cardiologist',
        rating: 4,
        imageUrl: tabib
    });

    return (
        <div className="doctor-grid">
            {doctors.map((doctor, index) => (
                <DoctorCard
                    key={index}
                    name={doctor.name}
                    spec={doctor.specialty}
                    rating={doctor.rating}
                    photo={doctor.imageUrl}
                />
            ))}
        </div>
    );
};

export default DoctorGrid;

