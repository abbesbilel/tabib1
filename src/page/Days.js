import React from 'react'
import DzTabib from '../components/DzTabib/DzTabib';
import DaYs from '../components/Days/DaYs';

const Days = () => {
    return (
        <div className="">
            <div className='tabib'>
                <DzTabib />
            </div>
            <div className='login'>
                <DaYs/>
            </div>
        </div>
    )
}

export default Days
