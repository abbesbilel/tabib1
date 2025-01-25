import React from 'react'
import logoImage from './assets/DZTABIB.png'
import facebookIcon from './assets/facebook.svg'
import whatsappIcon from './assets/whatsapp.svg'

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-info">
          <div className="logo-adr">
            <div className='logo-image-container'>
            <img className='logo-image' src={logoImage} alt="logo-image" />
            </div>
            <div className="adr-info">
              <p>8 W. South St.Buford, GA 30518</p>
              <p>5Briarwood LaneVienna, VA 22180 RER</p>
            </div>
            <div className="social-icons">
              <a href="#"><img src={facebookIcon} alt="facebook" /></a>
              <a href="#"><img src={whatsappIcon} alt="whatsapp" /></a>
              
              
            </div>
          </div>
          <div className="navigation">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Our team</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </div>
          <div className="book-now">
            <ul>
              <li className='list-title'>Book Now</li>
              <li><a href="#">Appointment</a></li>
              <li><a href="#">Teleconsultation</a></li>
            </ul>
          </div>
          <div className="contact">
          <ul>
              <li className='list-title'>Contact</li>
              <li><a href="#">Email :DZTABIB@mail.com</a></li>
              <li><a href="#">Phone: +213512345678</a></li>
            </ul>
          </div>
        </div>
        <div className="hr-line"></div>
        <div className="copyright">
          <p>&copy; all rights reserved 2024</p>
        </div>
      </div>
    </div>
  )
}
