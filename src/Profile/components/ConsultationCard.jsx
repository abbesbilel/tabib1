import React, { useState } from 'react';
import Rdv from './Rdv'

export default function ConsultationCard({ appointments, onDelete }) {

    

    return (
        
            <div className='consultation-container'>
                {appointments.map((appointment, index) => (
                    <Rdv
                        key={index}
                        index={index}
                        name={appointment.name}
                        date={appointment.date}
                        buttonType={appointment.buttonType}
                        photo={appointment.photo}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        
    )
}
