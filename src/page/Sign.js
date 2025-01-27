import DzTabib from '../components/DzTabib/DzTabib';
import LoginSignIn from '../components/LoginSignIn/LoginSignIn';
import Registerhere from '../components/Registerhere/Registerhere';
import React from 'react'

const Sign = () => {
    return (
        <div className="">
          {/* <div className='tabib'>
            <DzTabib />
          </div> */}
          <div className='login'>
            <LoginSignIn />
            <Registerhere />
          </div>
        </div>
    )
}

export default Sign