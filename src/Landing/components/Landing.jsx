import React from 'react'
import landingImage from './assets/landing-image.png'
import BookingButton from './BookingButton'

export default function Landing() {
    return (
        <div className='Landing-container'>
            <div className="text-container">
                <div className="text">
                <p className='move-title'>Booking apointment online</p>
                <h1>Many Doctors in several feilds At your service</h1>
                <p className='caption-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum eget vel, nunc nulla feugiat. Metus ut.</p>
                </div>
                <BookingButton />
            </div>
            <img className='landing-image' src={landingImage} alt="landing image" />
        </div>
    )
}
