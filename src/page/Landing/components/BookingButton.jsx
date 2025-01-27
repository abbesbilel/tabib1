import React from 'react'
import bookIcon from '../../../assets/message-circle.svg'
import { Link } from 'react-router-dom';

export default function BookingButton() {
  return (
    <Link to="/appoint">
    <button type='button' className='book-button'>
            <img src={bookIcon} alt="booking icon" />
            <p>Book an appointment</p>
        </button>
    </Link>
  )
}
