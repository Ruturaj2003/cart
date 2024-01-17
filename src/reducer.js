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
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const id = action.id;
    const item = newCart.get(id);
    const newItem = {
      ...item,
      amount: item.amount + 1,
    };
    newCart.set(id, newItem);
    return {
      ...state,
      cart: newCart,
    };
  }
  if (action.type === DECRREASE) {
    const newCart = new Map(state.cart);
    const id = action.id;
    const item = newCart.get(id);
    if (item.amount === 1) {
      // const newCart = new Map(state.cart);
      newCart.delete(id);
      return {
        ...state,
        cart: newCart,
      };
    }

    const newItem = {
      ...item,
      amount: item.amount - 1,
    };
    newCart.set(id, newItem);
    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === LOADING) {
    return { ...state, loading: true };
  }

  if (action.type === DISPLAY_ITEMS) {
    const cartItems = action.cart;
    return {
      cart: new Map(cartItems.map((item) => [item.id, item])),

      loading: false,
    };
  }
  throw new Error('No matching action type ' + action.type);
};
