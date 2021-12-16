import React from 'react'
import './styles/style.css'

import NepalFlag from '../../assets/topbar-flag.png'
export default function Topbar() {
    return (
        <div className='topbar__container'>
            <img src={NepalFlag} alt="Nepal" />
            <span>Free Shipping inside KTM Valley.</span>
            <span>ENG</span>
        </div>
    )
}
