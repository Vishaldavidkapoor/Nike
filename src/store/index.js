import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./ProductSlice";
import { cartSlice } from "./CartSlice";

export const store= configureStore({
    reducer:{
        products: productSlice.reducer,
        cart : cartSlice.reducer,
    }
})

