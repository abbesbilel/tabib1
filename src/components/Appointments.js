import React, { useState, useEffect } from 'react';
import { Link,Route, Routes, useLocation } from 'react-router-dom';
import Box from './Box';

import AppointmentsRequest from './AppointmentsRequest';
import AppointmentsRdv from './AppointmentsRdv';

function Appointments() {

  const [activeLink, setActiveLink] = useState(window.location.pathname); 
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname); 
  }, [location])

  const [activeButton, setActiveButton] = useState('appointments'); 

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
       <div className="head-btn bg-white head-btn-request w-fit border-ccc rad-6 ">
        <button 
          className={`ap-request fs-14 c-black p-10 bg-white rad-6 b-none ${activeButton === 'appointments' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('appointments')}
        >
          Appointment Request
        </button>
        <button 
          className={`ap fs-14 c-black rad-6 p-10 bg-white rad-6 b-none ${activeButton === 'rdv' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('rdv')}
        >
          Appointments
        </button>
      </div>

      {activeButton === 'appointments' && (
        <div>
          <h1>Appointment Request</h1> 
          <AppointmentsRequest />
        </div>
      )}

      {activeButton === 'rdv' && (
        <div>
          <h1>Appointments</h1> 
          <AppointmentsRdv />
        </div>
      )}



    </>
  );
}

export default Appointments;