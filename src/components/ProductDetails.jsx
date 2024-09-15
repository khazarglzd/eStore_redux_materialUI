import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const ProductDetails = () => {

    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)
    const { title, price, description, image } = selectedProduct

    const dispatch = useDispatch();

    useEffect(() => {
        getProductById();
    }, [])


    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }

    return (
        <div >
            <img src={image} alt="product-image" />
            <div >
                <h1  >{title}</h1>
                <p >{description}</p>
                <h1 >{price} $</h1>
                <div >
                    <CiCircleMinus />
                    <p >0</p>
                    <CiCirclePlus />
                </div>
                <button >Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetails