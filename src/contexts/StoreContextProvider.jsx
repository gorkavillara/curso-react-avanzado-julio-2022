import React, { useReducer, createContext } from "react";
import { productsReducer, ACTIONS } from "../reducers/products";

export const StoreContext = createContext();

// const initializer = () => {
//   return axios
//     .get("https://62c343ea876c4700f539c147.mockapi.io/api/products")
//     .then(r => { return r.data })
//     .catch((e) => console.error(e));
// };

// const arrowF = () => {
//     return 4
// }

// const arrowF = () => 4

const initializer = () => [];

const StoreContextProvider = ({ children }) => {
  //   const [products, setProducts] = useState([]);
  const [products, dispatch] = useReducer(
    productsReducer,
    [{ id: 0, title: "dummy" }],
    initializer
  );
  return (
    <StoreContext.Provider
      value={{
        products,
        setProducts: (payload) =>
          dispatch({ type: ACTIONS.SET_PRODUCTS, payload }),
        addToCart: (id) => dispatch({ type: ACTIONS.ADD_TO_CART, payload: id }),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
