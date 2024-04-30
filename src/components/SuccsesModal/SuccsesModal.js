"use client"
import React, { useEffect } from 'react'

function SuccsesModal({succsesClick, title, time = 4000, html = false}) {
    useEffect(() => {
        setTimeout(() => {
            succsesClick(null)
        }, time);
    }, [])
    return (
        <div className='succses-modal'>
            <div className='succes-modal__container'>
                {html ? <p dangerouslySetInnerHTML={{__html:title}}></p> : title}
            </div>
        </div>
    )
}

export default SuccsesModal