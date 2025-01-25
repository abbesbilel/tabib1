import React from 'react'
import bookIcon from './assets/message-circle.svg'

export default function BookingButton() {
  return (
    <button type='button' className='book-button'>
            <img src={bookIcon} alt="booking icon" />
            <p>Book an appointment</p>
        </button>
  )
}
