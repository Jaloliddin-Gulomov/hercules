import React from 'react'
import style from './ProductCard.css'
const ProductCard = (data) => {
    return (
        <div className='card'>
            <img src={data.data.image} alt="Image" />
            <h3>{data.data.title}</h3>
            <p>{data.data.description}</p>
            <a href="#">{data.data.link}</a>
        </div>
    )
}

export default ProductCard