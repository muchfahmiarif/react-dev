import toolkit from "@reduxjs/toolkit";
import { build } from "vite";

const { configureStore, createAction, createReducer } = toolkit;

// Reducer

const cartReducer = createReducer([], (builder) => {
  // array kosong merupakan cart reducer karena pada pilih reuducer di store, reducer yang dipilih adalah cart
  builder.addCase("ADD_TO_CART", (state, action) => {
    state.push(action.payload); // => cara ke 1 ; pilih state mana yang mau diubah
    // ada 2 cara; 1. push, 2. spread operator
    // state.cart = [...state.cart, action.payload]; => cara ke 2
  });
});

// Store
const store = configureStore({
  // reducer: cartReducer, // => hanya menggunakan 1 reducer
  reducer: {
    cart: cartReducer, // => menggunakan lebih dari 1 reducer
  },
});

// Subscribe

// Dispatch
