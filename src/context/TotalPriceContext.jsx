/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const TotalPriceContext = createContext(null); // untuk menyimpan state
export const TotalPriceDispatchContext = createContext(null); // untuk menyimpan action

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOTAL_PRICE": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
};
const TotalPriceProvider = ({ children }) => {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });

  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>{children}</TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
};

export default TotalPriceProvider;
