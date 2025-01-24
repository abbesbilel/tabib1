import React from 'react'
import SectionHeader from './SectionHeader'
import highIcon from './assets/high.svg'
import hourIcon from './assets/24hour.svg'
import TeleconsultationIcon from './assets/Teleconsultation.svg'
import bookIcon from './assets/book.svg'

export default function Services() {
    return (
        <div>
            <div className="services-container" id='services'>
                <SectionHeader sectionName={'Our Services'} />
                <div className="service-cards-container">
                    <div className="card">
                        <img src={hourIcon} alt="hour icon" />
                        <h4>24 Hour Service</h4>
                        <p>The Pediatric Department
                            provides ongoing care and
                            treatment for children with
                            chronic conditions such as
                            asthma, diabetes, and
                            allergies.chronic conditions</p>
                    </div>
                    <div className="card">
                        <img src={highIcon} alt="high icon" />
                        <h4>High quality care</h4>
                        <p>The Pediatric Department
                            provides ongoing care and
                            treatment for children with
                            chronic conditions such as
                            asthma, diabetes, and
                            allergies.chronic conditions</p>
                    </div>
                    <div className="card">
                        <img src={TeleconsultationIcon} alt="teleconsultation icon" />
                        <h4>Teleconsultation</h4>
                        <p>The Pediatric Department
                            provides ongoing care and
                            treatment for children with
                            chronic conditions such as
                            asthma, diabetes, and
                            allergies.chronic conditions</p>
                    </div>
                    <div className="card">
                        <img src={bookIcon} alt="book icon" />
                        <h4>Booking Appointments</h4>
                        <p>The Pediatric Department
                            provides ongoing care and
                            treatment for children with
                            chronic conditions such as
                            asthma, diabetes, and
                            allergies.chronic conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
