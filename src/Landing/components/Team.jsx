import React from 'react'
import DoctorCard from './DoctorCard'
import SectionHeader from './SectionHeader'
import { useState } from 'react'
import doctorImage from './assets/doctor.png'
import testImage from './assets/test-doctor.png'

export default function Team() {

    const [doctors, setDoctors] = useState([
        {
            name: 'Dr. Lisa Chen, MD',
            spec: 'Cardiologist',
            rating: 4,
            photo: doctorImage
        },
        {
            name: 'Dr. Emily Davis, MD',
            spec: 'Pediatrician',
            rating: 3,
            photo: testImage
        },
        {
            name: 'Dr. Michael Johnson, DO',
            spec: 'Orthopedic Surgeon',
            rating: 4.2,
            photo: doctorImage
        }
    ])

    return (
        <div className='team-container' id='team'>
            <SectionHeader sectionName={'Our Team'} />
            <div className="cards-container">
                {doctors.map((doctor, index) => {
                    return (
                        <DoctorCard
                            key={index}
                            name={doctor.name}
                            spec={doctor.spec}
                            rating={doctor.rating}
                            photo={doctor.photo}
                        />
                    );
                })}
            </div>
        </div>
    )
}
