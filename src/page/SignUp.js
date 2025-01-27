import React from 'react'
import SignUp from '../components/SignUp/SignUp'
import DzTabib from '../components/DzTabib/DzTabib';
import LoginSignIn from '../components/LoginSignIn/LoginSignIn';
import Registerhere from '../components/Registerhere/Registerhere';

const Signup = () => {
    return (
        <div className="">
          {/* <div className='tabib'>
            <DzTabib />
          </div> */}
          <div className='login'>
            <SignUp />
          </div>
        </div>
    )
}

export default Signup
