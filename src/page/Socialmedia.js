import React from 'react'
import SignUp from '../components/SignUp/SignUp'
import DzTabib from '../components/DzTabib/DzTabib';
import LoginSignIn from '../components/LoginSignIn/LoginSignIn';
import Registerhere from '../components/Registerhere/Registerhere';
import SocialMedia from '../components/SocialMedia/SocialMedia';


const Socialmedia = () => {
    return (
        <div>
            <div className="">
                <div className='tabib'>
                    <DzTabib />
                </div>
                <div className='login'>
                    <SocialMedia />
                </div>
            </div>
        </div>
    )
}

export default Socialmedia
