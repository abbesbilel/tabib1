import React from 'react'
import DzTabib from '../components/DzTabib/DzTabib';
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
