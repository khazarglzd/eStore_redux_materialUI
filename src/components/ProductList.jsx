import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getALlProducts } from '../redux/slices/productSlice';
import Product from './Product';


const ProductList = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product)
    console.log(products)

    useEffect(() => {
        dispatch(getALlProducts())
    }, [])

    return (
        <div className='product-list'>{
            products?.map((product) => {
                return <div >
                    <Product key={products.id} product={product} />
                </div>
            })

        }</div>
    )
}

export default ProductList