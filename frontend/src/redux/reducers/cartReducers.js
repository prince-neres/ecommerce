import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

// eslint-disable-next-line default-param-last
const cartReducer = (state = { cartItems: [] }, action) => {
  const item = action.payload;
  const existItem = state.cartItems.find((x) => x.product === item?.product);

  switch (action.type) {
    case CART_ADD_ITEM:
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x)),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
