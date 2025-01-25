import React from 'react'

export default function Commenter({ name, doctor, photo }) {
  return (
    <div className='person'>
      <img src={photo} alt="profile photo" />
      <div className="person-info">
        <h3>{name}</h3>
        <p><span>Rated:</span> {doctor}</p>
      </div>
    </div>
  )
}
