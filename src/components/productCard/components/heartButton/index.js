import React from 'react'
import './styles/style.css'

export default function HeartButton(isHearted) {
    return (
        <div className='heartButton__container'>
            {
                isHearted?.isHearted ?
                <button><i className="ri-heart-fill"></i></button>:
                <button><i className="ri-heart-line"></i></button>
            }
        </div>
    )
}
