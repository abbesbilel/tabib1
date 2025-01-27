import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain, faComment, faGear, faUsers, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Navigation = (props) => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <ul>
      {props.title === "admin" ? ( 
        <>
          <li>
            <Link 
              to="/Page4" 
              className={`d-flex align-center fs-14 c-black rad-6 p-10 ${activeLink === '/Page4' ? 'active' : ''}`} 
            > 
              <FontAwesomeIcon icon={faUserDoctor} /> 
              <span>Doctors</span> 
            </Link>
          </li>
          <li>
            <Link 
              to="/Page5" 
              className={`d-flex align-center fs-14 c-black rad-6 p-10 ${activeLink === '/Page5' ? 'active' : ''}`} 
            >
              <FontAwesomeIcon icon={faUsers} /> 
              <span>Patients</span> 
            </Link>
          </li>
        </>
      ) : ( 
        <>
          <li>
            <Link 
              to="/Page" 
              className={`d-flex align-center fs-14 c-black rad-6 p-10 ${activeLink === '/Page' ? 'active' : ''}`} 
            > 
              <FontAwesomeIcon icon={faMountain} /> 
              <span>Overview</span> 
            </Link>
          </li>
          <li>
            <Link 
              to="/Page2" 
              className={`d-flex align-center fs-14 c-black rad-6 p-10 ${activeLink === '/Page2' ? 'active' : ''}`} 
            >
              <FontAwesomeIcon icon={faComment} /> 
              <span>Appointments</span> 
            </Link>
          </li>
          <li>
            <Link 
              to="/Page3" 
              className={`d-flex align-center fs-14 c-black rad-6 p-10 ${activeLink === '/Page3' ? 'active' : ''}`} 
            >
              <FontAwesomeIcon icon={faGear} /> 
              <span>Settings</span> 
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Navigation;