export const ACTIONS = {
  SET_PRODUCTS: "SET_PRODUCTS",
  TOGGLE_PRODUCT: "TOGGLE_PRODUCT",
  ADD_TO_CART: "ADD_TO_CART",
};

export const productsReducer = (state, { type, payload }) => {
  console.log("Ha entrado en el reducer");
  console.log("payload", payload);
  switch (type) {
    case ACTIONS.SET_PRODUCTS:
      return {
        ...state,
        storeProducts: payload,
      };
    case ACTIONS.ADD_TO_CART:
      const addedProduct = state.storeProducts.find(
        (product) => product.id === payload
      );
      return {
        ...state,
        cart: {
          products: [...state.cart.products, addedProduct],
        },
      };
    default:
      return state;
  }
};
