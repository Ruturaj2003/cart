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

  throw new Error('No matching action type ' + action.type);
};
