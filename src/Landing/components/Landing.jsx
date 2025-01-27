import React from 'react'
import landingImage from './assets/landing-image.png'
import BookingButton from './BookingButton'

export default function Landing() {
    return (
        <div className='Landing-container'>
            <div className="text-container">
                <div className="text">
                <p className='move-title'>Booking Appointment Online</p>
                <h1>Many Doctors in several feilds At your service</h1>
                <p className='caption-text'>Many Doctors in various fields are at your service, ready to provide personalized care tailored to your needs. Whether you're seeking a routine check-up, specialized treatment, or expert advice, our team of experienced professionals is here to help. With just a few clicks, you can easily schedule your visit and take the first step toward better health.</p>
                </div>
                <BookingButton />
            </div>
            <img className='landing-image' src={landingImage} alt="landing image" />
        </div>
    )
}
