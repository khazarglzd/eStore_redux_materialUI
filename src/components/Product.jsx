import React from 'react'


const Product = ({ product }) => {

    const { id, title, price, description, image } = product


    return (
        <div >
            <img src={image} alt="product image" width={120} height={150} />
            <p >{title}</p>
            <div >
                <h3 >{price} $</h3>
                <button >Details</button>
            </div>
        </div>
    )
}

export default Product