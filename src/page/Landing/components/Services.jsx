import React from 'react'
import SectionHeader from './SectionHeader'
import highIcon from '../../../assets/high.svg'
import hourIcon from '../../../assets/24hour.svg'
import TeleconsultationIcon from '../../../assets/Teleconsultation.svg'
import bookIcon from '../../../assets/book.svg'

export default function Services() {
    return (
        <div>
            <div className="services-container" id='services'>
                <SectionHeader sectionName={'Our Services'} />
                <div className="service-cards-container">
                    <div className="card">
                        <img src={hourIcon} alt="hour icon" />
                        <h4>24 Hour Service</h4>
                        <p>Health concerns don’t follow a schedule, and neither do we. Our 24-hour service ensures that you have access to medical care whenever you need it. Whether it’s an urgent medical issue in the middle of the night or a routine question during the day, our dedicated team is always here to support you. Your health is our priority, around the clock.</p>
                    </div>
                    <div className="card">
                        <img src={highIcon} alt="high icon" />
                        <h4>High quality care</h4>
                        <p>At our clinic, we are committed to providing exceptional medical care tailored to your unique needs. Our team of highly skilled and compassionate healthcare professionals uses the latest medical advancements to ensure accurate diagnoses and effective treatments. Your health and well-being are our top priorities, and we strive to deliver care that exceeds expectations in a warm and welcoming environment.</p>
                    </div>
                    <div className="card">
                        <img src={TeleconsultationIcon} alt="teleconsultation icon" />
                        <h4>Teleconsultation</h4>
                        <p>Can’t make it to the clinic? No problem! With our teleconsultation services, you can connect with our doctors from the comfort of your home. Whether you need a routine check-up, follow-up consultation, or medical advice, our secure and easy-to-use platform ensures you receive the same high-quality care virtually. Stay connected with your healthcare provider anytime, anywhere.</p>
                    </div>
                    <div className="card">
                        <img src={bookIcon} alt="book icon" />
                        <h4>Booking Appointments</h4>
                        <p>Scheduling your visit has never been easier! With our user-friendly booking system, you can book appointments online in just a few clicks. Choose a date and time that works best for you, and we’ll take care of the rest. Whether it’s an in-person visit or a teleconsultation, managing your healthcare has never been more convenient. Book now and take the first step toward better health!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
