// reducer
const cartReducer = (
  state = {
    // state merupakan nilai awal
    cart: [],
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

// subscribe

// dispatch
