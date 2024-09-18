import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import "../../src/css/ProductDetails.css"
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket } from '../redux/slices/basketSlice';

const ProductDetails = () => {


    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)
    const { title, price, description, image } = selectedProduct
    const [count, setCount] = useState(1)

    const dispatch = useDispatch();

    useEffect(() => {
        getProductById();
    }, [])

    const increment = (e) => {
        setCount(count + 1)
    }

    const decrement = (e) => {
        if (count !== 0) {
            setCount(count - 1)
        }
        else {
            count == 0
        }
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }

        dispatch(addToBasket(payload))
    }


    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }

    return (
        <div className='prd-dtl-container'>
            <img src={image} alt="product-image" className='prd-dtl-image' />
            <div className='prd-dtl-right'>
                <h1 className='prd-dtl-title' >{title}</h1>
                <p className='prd-dtl-description'>{description}</p>
                <h1 className='prd-dtl-price'>{price} $</h1>
                <div className='prd-dtl-count-div'>
                    <CiCircleMinus onClick={decrement} className='prd-dtl-icons' />
                    <p className='prd-dtl-count-amount'>{count}</p>
                    <CiCirclePlus onClick={increment} className='prd-dtl-icons' />
                </div>
                <button onClick={addBasket} className='addToCart'>Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductDetails