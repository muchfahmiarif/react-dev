import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

// Action
const addToCart = createAction("ADD_TO_CART"); // => action creator
const login = createAction("CREATE_SESSION");

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

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// Store
const store = configureStore({
  // reducer: cartReducer, // => hanya menggunakan 1 reducer
  reducer: {
    login: loginReducer,
    cart: cartReducer, // => menggunakan lebih dari 1 reducer
  },
});
console.log("oncreate store : ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// Dispatch
store.dispatch(addToCart({ id: 1, qty: 1 }));
store.dispatch(addToCart({ id: 2, qty: 3 }));
store.dispatch(login());
