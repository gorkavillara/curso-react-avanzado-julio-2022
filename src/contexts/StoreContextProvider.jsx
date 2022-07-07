import React, { useReducer, createContext } from "react";
import { productsReducer, ACTIONS } from "../reducers/products";

export const StoreContext = createContext();

const initialState = {
  storeProducts: [],
  cart: {
    products: [],
  },
};

const StoreContextProvider = ({ children }) => {
  //   const [products, setProducts] = useState([]);
  const [store, dispatch] = useReducer(productsReducer, initialState);
  return (
    <StoreContext.Provider
      value={{
        products: store.storeProducts,
        setProducts: (payload) =>
          dispatch({ type: ACTIONS.SET_PRODUCTS, payload }),
        addToCart: (id) => dispatch({ type: ACTIONS.ADD_TO_CART, payload: id }),
        cart: store.cart
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
