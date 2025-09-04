import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    initialState: [],
    name: "cart",
    reducers: {
        addToCart: (state, action) => {
            const existedProduct = state.find((p) => p.id === action.payload.id);
            if (existedProduct) {
                existedProduct.quantity += 1;
            } else {
                const newProduct = { ...action.payload, quantity: 1 };
                state.push(newProduct)
            }
        },


        removeFromCart: (state, action) => {
            return state.filter((p) => p.id !== action.payload.id)
        },
        ClearCart: () => {
            return []
        },
    }
})
export const { addToCart, removeFromCart, ClearCart } = cartSlice.actions

export default cartSlice.reducer