import React from 'react'
import SectionHeader from './SectionHeader'
import Commenter from './Commenter'
import { useState, useEffect } from 'react'
import profilePhoto from '../../assets/avatar.png'

export default function Testimonials() {

    const [people, setPeople] = useState([
        {
            name: 'Sarah Johnson',
            doctor: 'Dr. Emily Smith, MD',
            photo: profilePhoto,
            rating: 4,
            comment: 'Dr. Smith was incredibly patient and kind. She explained everything clearly and made my son feel comfortable.'
        },
        {
            name: 'Mark Douglas',
            doctor: 'Dr. Michael Brown, MD',
            photo: profilePhoto,
            rating: 4,
            comment: 'Great experience overall. The staff was friendly, and Dr. Brown answered all of our questions thoroughly.'
        },
        {
            name: 'Anna Kim',
            doctor: 'Dr. Jessica Lee, MD',
            photo: profilePhoto,
            rating: 5,
            comment: 'I highly recommend Dr. Lee. She is very knowledgeable and caring towards children.'
        },
        {
            name: 'Chris Martinez',
            doctor: 'Dr. David Clark, MD',
            photo: profilePhoto,
            rating: 4.5,
            comment: 'Dr. Clark took great care of my daughter. The waiting time was short, and the service was excellent.'
        },
        {
            name: 'Emily Davis',
            doctor: 'Dr. Sophia Carter, MD',
            photo: profilePhoto,
            rating: 4,
            comment: 'Friendly environment and professional service. I appreciate the attention to detail from Dr. Carter.'
        },
        {
            name: 'James Reynolds',
            doctor: 'Dr. Benjamin Hall, MD',
            photo: profilePhoto,
            rating: 5,
            comment: 'Fantastic experience! Dr. Hall and the entire team were amazing with my child.'
        },
    ]);


    const [visiblePeople, setVisiblePeople] = useState(people.slice(0, 3))
    const [activePerson, setActivePerson] = useState(visiblePeople[1]);  // Middle person initially
    const [fade, setFade] = useState(false);
    const filledStars = Math.floor(activePerson.rating); // Whole number part (e.g., 4.2 -> 4 stars)
    const hasHalfStar = activePerson.rating % 1 !== 0; // Check if there's a half star (e.g., 4.5 -> true)
    const totalStars = 5; // Maximum stars (adjust if needed)

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);  // Start fade-out
            setTimeout(() => {
                setVisiblePeople((prev) => {
                    const nextPeople = [...prev];
                    nextPeople.pop();
                    const nextIndex = (people.indexOf(prev[1]) + 1) % people.length;
                    nextPeople.unshift(people[nextIndex]);
                    setActivePerson(nextPeople[1]);  // Rotate correctly
                    setFade(false);  // Start fade-in
                    return nextPeople;
                });
            }, 500);  // Half-second fade duration
        }, 5000);  // 5-second interval

        return () => clearInterval(interval);
    }, [people]);

    return (
        <div className='testimonials-container' id='testimonials'>
            <SectionHeader sectionName={'Testimonials'} />
            <div className="test-container">
                <div className="people-container">
                    {visiblePeople.map((person, index) => (
                        <Commenter
                            key={index}
                            name={person.name}
                            doctor={person.doctor}
                            photo={person.photo}
                            comment={person.comment}
                        />
                    ))}
                </div>
                <div className="vertical-line">
                    <div></div>
                    <div className='big'></div>
                    <div></div>
                </div>
                <div className={`comment ${fade ? 'fade-out' : 'fade-in'}`}>
                    <p>{activePerson.comment}</p>
                    {Array.from({ length: totalStars }, (_, index) => {
                        if (index < filledStars) {
                            return <span key={index} className="za star filled"><i className="fa-duotone fa-solid fa-star"></i></span>;
                        } else if (index === filledStars && hasHalfStar) {
                            return <span key={index} className="za star half-filled"><i className="fa-duotone fa-solid fa-star"></i></span>;
                        } else {
                            return <span key={index} className="za star empty"><i className="fa-duotone fa-solid fa-star"></i></span>;
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
