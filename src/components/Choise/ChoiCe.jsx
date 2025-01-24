import React from 'react'
import './ChoiCe.css'
import patient from '../assets/human1.png'
import doctor from '../assets/human2.png'




const ChoiCe = () => {
    return (
        <div className='diagonal-container'>
            <div className="left-side">
                <h1>Patient</h1>
                <img className='patient' src={patient} alt="Patien" />
                <div className="register-container">
                    <div className="register">Register</div>
                </div>
            </div>
            <div className="right-side">
                <h1>Doctor</h1>
                <img className='doctor' src={doctor} alt="Patien" />
                <div className="register-container">
                    <div className="register">Register</div>
                </div>
                <div className='orcontainer'><div className='or'>Or</div></div>
            </div>
        </div>

    )
}

export default ChoiCe
