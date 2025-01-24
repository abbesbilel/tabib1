import React from 'react'
import SignUp from '../components/SignUp/SignUp'
import DzTabib from '../components/DzTabib/DzTabib';
import PersoNal from '../components/Personal/Personal';
import PracticeiNformation from '../components/Practiceinformation/Practiceinformation';

const Practiceinformation = () => {
  return (
    <div>
      <div className="container">
            <div className='tabib'>
                <DzTabib />
            </div>
            <div className='login'>
                <PracticeiNformation />
            </div>
        </div>
    </div>
  )
}

export default Practiceinformation
