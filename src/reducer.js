import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECRREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';

export const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: new Map(),
    };
  }
  if (action.type === REMOVE) {
    // This is to avoid mutating existing values
    const newCart = new Map(state.cart);
    newCart.delete(action.id);
    return {
      ...state,
      cart: newCart,
    };
  }

  throw new Error('No matching action type ' + action.type);
};
