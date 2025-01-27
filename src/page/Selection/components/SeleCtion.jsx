import React from 'react'
import './SeleCtion.css'
import faceb from '../../../assets/face.png'
import wattsup from '../../../assets/whatsapp.png'
import select from '../../../assets/selection.png'
import DoctorGrid from './DoctorGrid'
import Footer from '../../../components/Footer'


const SeleCtion = () => {

    return (
        <div className='app-container'>
            <header className="header-appoint">
                {/* <div className="logo">
                    <span className="logo-dz">DZ</span>
                    <span className="logo-tabib">TABIB</span>
                </div> */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by doctor's name, specialty, or location."
                        className="search-input"
                    />
                    <div className="search-button"><div className='search-paragraphe'>Search</div></div>
                </div>
            </header>

            <nav className="filter-nav">
                <img src={select} alt=""  />
                <button className="filter-button outline">
                    Location
                </button>

                <button className="filter-button outline">
                    Specialty
                </button>

                <button className="filter-button outline">
                    Availability
                </button>

                <button className="filter-button outline">
                    Insurance
                </button>

                <button className="filter-button outline">
                    Languages
                </button>

                <button className="filter-button outline">
                    Ratings
                </button>

                <button className="filter-button outline">
                    Teleconsultation
                </button>
            </nav>
            <div>
                <DoctorGrid />
            </div>


           <Footer/>
        </div>
    )
}

export default SeleCtion
