import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain, faComment, faGear } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname); 
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname); 
  }, [location]);

  return (
    <ul>
      <li>
        <Link 
          to="/Page" 
          className={`d-flex align-center fs-14 c-black rad-6 p-10 ${activeLink === '/' ? 'active' : ''}`}
        > 
          <FontAwesomeIcon icon={faMountain} />
          <span>Overview</span>
        </Link>
      </li>
      <li>
        <Link 
          to="/Page2" 
          className={`d-flex align-center fs-14 c-black rad-6 p-10 ${activeLink === '/appointments' ? 'active' : ''}`}
        >
          <FontAwesomeIcon icon={faComment} />
          <span>Appointments</span>
        </Link>
      </li>
      <li>
        <Link 
          to="/Page3" 
          className={`d-flex align-center fs-14 c-black rad-6 p-10 ${activeLink === '/settings' ? 'active' : ''}`}
        >
          <FontAwesomeIcon icon={faGear} />
          <span>Settings</span>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;