import { createSlice } from "@reduxjs/toolkit"


const getInitialState = () => {
    const data = JSON.parse(sessionStorage.getItem("cart"));
    if (data !== null) {
        return { carts: data }
    } else {
        return { carts: [] }
    }
}

// card slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState: getInitialState(),
    reducers: {

        // add to cart
        addToCart: (state, action) => {

            const IteamIndex = state.carts.findIndex((iteam) => iteam._id === action.payload._id);

            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1
            } else {
                const temp = { ...action.payload, qnty: 1 }
                state.carts = [...state.carts, temp]

            }
            console.log(state.carts);
            sessionStorage.setItem("cart", JSON.stringify(state.carts));
        },

        // remove perticular iteams
        removeToCart: (state, action) => {
            console.log(action.payload);
            console.log(state.carts);
            const data = state.carts.filter((ele) => ele._id !== action.payload);
            state.carts = data;
            sessionStorage.setItem("cart", JSON.stringify(state.carts));
        },

        // remove single iteams
        removeSingleIteams: (state, action) => {
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam._id === action.payload._id);

            if (state.carts[IteamIndex_dec].qnty >= 1) {
                state.carts[IteamIndex_dec].qnty -= 1
            }
            sessionStorage.setItem("cart", JSON.stringify(state.carts));

        },

        // clear cart
        emptycartIteam: (state) => {
            state.carts = []
            sessionStorage.setItem("cart", JSON.stringify(state.carts));
        }
    }
});

export const { addToCart, removeToCart, removeSingleIteams, emptycartIteam } = cartSlice.actions;

export default cartSlice.reducer;


