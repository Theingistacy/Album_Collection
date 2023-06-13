export const cartInitialState = {
  items: [],
  isOpen: false,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      // return { ...state, items: state.items.concat(action.payload) };
      return {
        ...state,
        items: action.payload, // modifying the items array was done in the addToCartHandler
      };

    case "DELETE_CART_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.record._id !== action.payload),
      };

    case "TOGGLE_CART":
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};
