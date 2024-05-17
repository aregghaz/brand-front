import React from 'react'

function BrandsItem({img, title}) {
    return (
        <>
            <img src={img} alt={title} />
        </>
    )
}

export default BrandsItem