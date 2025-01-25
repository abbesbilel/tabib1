import React from 'react'
import DzTabib from '../components/DzTabib/DzTabib';
import MaP from '../components/Map/MaP';

const Mapa = () => {
    return (
        <div className="">
            <div className='tabib'>
                <DzTabib />
            </div>
            <div className='login'>
                <MaP />
            </div>
        </div>
    )
}

export default Mapa
