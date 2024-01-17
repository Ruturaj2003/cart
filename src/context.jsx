import { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer } from './reducer';
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECRREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';
import cartItems from './data';

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const greeting = 'DOTA';

  const clearCart = () => {
    dispatch({
      type: CLEAR_CART,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: REMOVE,
      id,
    });
    console.log('Item Gg' + id);
  };
  //
  //
  return (
    <AppContext.Provider value={{ ...state, clearCart, removeItem }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
