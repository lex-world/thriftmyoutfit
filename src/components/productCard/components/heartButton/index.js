import React from 'react'
import './styles/style.css'

export default function HeartButton() {
    return (
        <div className='heartButton__container'>
            <button><i className="ri-heart-line"></i></button>
            {/* @dev check if the item is hearted by user then check */}
            {/* <button><i className="ri-heart-fill"></i></button> */}
        </div>
    )
}
