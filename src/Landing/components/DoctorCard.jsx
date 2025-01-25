import React from 'react'
import bookIcon2 from './assets/message-circle2.svg'
import BookingButton from './BookingButton'

export default function DoctorCard({ name, rating, spec, photo }) {

    const filledStars = Math.floor(rating); // Whole number part (e.g., 4.2 -> 4 stars)
    const hasHalfStar = rating % 1 !== 0; // Check if there's a half star (e.g., 4.5 -> true)
    const totalStars = 5; // Maximum stars (adjust if needed)

    return (
        <div className='doctor-card-container'>
            <div className='doc-image'>
                <img src={photo} alt="doctor image" />
            </div>
            <div className="doc-info">
                <h3>{name}</h3>
                <p className='spec-text'>{spec}</p>
                {Array.from({ length: totalStars }, (_, index) => {
                    if (index < filledStars) {
                        return <span key={index} className="star filled"><i className="fa-duotone fa-solid fa-star"></i></span>;
                    } else if (index === filledStars && hasHalfStar) {
                        return <span key={index} className="star half-filled"><i className="fa-duotone fa-solid fa-star"></i></span>;
                    } else {
                        return <span key={index} className="star empty"><i className="fa-duotone fa-solid fa-star"></i></span>;
                    }
                })}
                <button type='button' className='info-button'>
                    <img src={bookIcon2} alt="booking icon" />
                    <p>More Info</p>
                </button>
                <BookingButton />
            </div>
        </div>
    )
}
