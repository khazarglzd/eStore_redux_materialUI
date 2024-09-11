import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    products: [],
    selectedProduct: {},
    loading: false
}

const BASE_URL = "https://fakestoreapi.com"

export const getALlProducts = createAsyncThunk(
    'getAllProducts',
    async () => {
        const response = await axios.get(`${BASE_URL}/products`)
        return response.data
    },
)


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    }
},
)


export const { } = productSlice.actions

export default productSlice.reducer