import toolkit from "@reduxjs/toolkit";
import { build } from "vite";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART"); // => action creator

// Reducer
const cartReducer = createReducer([], (builder) => {
  // array kosong merupakan cart reducer karena pada pilih reuducer di store, reducer yang dipilih adalah cart
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload); // => cara ke 1 ; pilih state mana yang mau diubah
    // ada 2 cara; 1. push, 2. spread operator
    // state.cart = [...state.cart, action.payload]; => cara ke 2
  });
});
// kalo ingin tambah reducer (login reducer) maka buat lagi seperti di atas

// Store
const store = configureStore({
  // reducer: cartReducer, // => hanya menggunakan 1 reducer
  reducer: {
    cart: cartReducer, // => menggunakan lebih dari 1 reducer
  },
});

// Subscribe

// Dispatch
const action1 = {
  type: "ADD_TO_CART", // type harus sama dengan yang ada di reducer
  payload: {
    id: 2,
    name: "Baju",
  },
};
store.dispatch(action1);
