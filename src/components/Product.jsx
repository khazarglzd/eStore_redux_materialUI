import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/Product.css"

const Product = ({ product }) => {

    const { id, title, price, description, image } = product

    const navigate = useNavigate();

    return (
        <div className='product-cart'>
            <img src={image} alt="product image" width={120} height={150} />
            <p className='product-title'>{title}</p>
            <div className='price_action'>
                <h3 className='product-price'>{price} $</h3>
                <button onClick={() => navigate("/product-details/" + id)} className='details'>Details</button>
            </div>
        </div>
    )
}

export default Product