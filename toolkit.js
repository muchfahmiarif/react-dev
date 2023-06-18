import toolkit from "@reduxjs/toolkit";
import { build } from "vite";

const { configureStore, createAction, createReducer } = toolkit;

// Reducer
const initialState = {
  cart: [],
};
const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase("ADD_TO_CART", (state, action) => {
    state.cart.push(action.payload); // => cara ke 1 ; pilih state mana yang mau diubah
    // ada 2 cara; 1. push, 2. spread operator
    // state.cart = [...state.cart, action.payload]; => cara ke 2
  });
});

// Store

// Subscribe

// Dispatch
