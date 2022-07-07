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
      return payload;
    default:
      return state;
  }
};
