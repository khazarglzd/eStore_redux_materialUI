import React from 'react'
import { Routes, Route } from "react-router-dom"
import ProductDetails from '../components/ProductDetails'
import Home from "../pages/Home"

const RouterConfig = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
        </Routes>
    )
}

export default RouterConfig
