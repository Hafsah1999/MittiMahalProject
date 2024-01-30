import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Redux/CartContext";

// create store
export const store = configureStore({
    reducer:{
        allCart:cartSlice
    }
})