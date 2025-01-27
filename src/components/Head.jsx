import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import myImage from '../assets/0f7517ea1f04200fdf3155e7b0f7c49d.jpg'; 

// In your JSX

function Head(props) {
    return (

        <>
            <div className="head bg-white p-15 between-flex">
                <div className="search p-relative">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>
                    <input className="p-10" type="search" placeholder="Search Appointment, Patient or etc..." />
                </div>
                <div className="icons d-flex align-center">
                    {props.title !== "admin" && ( 
                    <> 
                        <span className="notification p-relative ">
                        <FontAwesomeIcon icon={faBell} /> 
                        </span>
                        <img src={myImage} alt="Avatar" className="avatar" /> 
                    </>
                    )}
                    {props.title === "admin" ? (
                        <p className='fw-bold fs-14'>Administrator</p>
                        ) : (
                        <div className='ml-10'>
                            <div className='fw-bold'>Dr. House</div>
                            <span className='c-grey-t fs-14'>Cardiologist</span>
                        </div>
                    )}
                    
                </div>
            </div>
        </>
    )
}

export default Head