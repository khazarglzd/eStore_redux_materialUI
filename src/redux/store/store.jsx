import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../slices/productSlice"
import basketReducer from "../slices/basketSlice"


export default configureStore({
    reducer: {
        product: productReducer,
        basket: basketReducer
    },
})