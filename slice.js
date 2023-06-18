import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

// Store
const store = configureStore({
  // reducer: cartReducer, // => hanya menggunakan 1 reducer
  reducer: {
    cart: cartSlice.reducer, // => menggunakan lebih dari 1 reducer
  },
});
console.log("oncreate store : ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// Dispatch
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 1 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 5 }));
