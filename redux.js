import { legacy_createStore } from "redux";

// reducer
const cartReducer = (
  state = {
    // state merupakan nilai awal
    cart: [
      {
        id: 1,
        name: "Sepatu",
      },
    ],
  },
  action
) => {
  // di dalam functin ini akan handle action yang dikirimkan, action merupakan object yang berisi type dan payload
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state, // mengambil state yang lama
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store
const store = legacy_createStore(cartReducer); // createStore sudah deprecated, sebaiknya gunakan configureStorex
console.log("oncreate store : ", store.getState());

// subscribe untuk memantau perubahan state
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// dispatch
const action1 = {
  type: "ADD_TO_CART", // type harus sama dengan yang ada di reducer
  payload: {
    id: 2,
    name: "Baju",
  },
};
store.dispatch(action1);
