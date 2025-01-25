import React from 'react'

export default function Rdv({ name, date, buttonType, photo, onDelete, index }) {
  return (
    <div className="rdv">
                <div className="image-info">
                    <img src={photo} alt={`${name}'s photo`} className='vendetta-image' />
                    <div className="pateint-info">
                        <h4>{name}</h4>
                        <p>{date}</p>
                    </div>
                </div>
                {buttonType === 'ongoing' ? (
                    <button type='button' className="ongoing-btn a-button" disabled>Ongoing</button>
                ) : (
                    <button type='button' className="cancel-btn b-button" onClick={() => onDelete(index)}>Cancel</button>
                )}
            </div>
  )
}
