import React from 'react'
import adglogo from './ADG_Logo.png';
import ieelogo from './IEEE.png';
import devolution from './logo.png';

function Landingpage() {
  return (
    <>
    <div className='land'>
        <div className='logo'>
            <div className='x1'>
                <img src={adglogo} alt=""/>
            </div>
            <div className='x2'>
                <p>X</p>
            </div>
            <div className='x3'>
                <img src={ieelogo} alt=""/>
            </div>
        </div>
        <div className='dev'>
            <img src={devolution} alt=""/>
        </div>
    </div>
    </>
  )
}

export default Landingpage
