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
import { getTotals } from './utils';

const url = 'https://www.course-api.com/react-useReducer-cart-project';
const AppContext = createContext();

const initialState = {
  loading: true,
  cart: new Map(),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);
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

  const increase = (id) => {
    dispatch({
      type: INCREASE,
      id,
    });
  };
  const decrease = (id) => {
    dispatch({
      type: DECRREASE,
      id,
    });
  };
  const fetchData = async () => {
    dispatch({
      type: LOADING,
    });

    const resp = await fetch(url);
    const cart = await resp.json();
    dispatch({
      type: DISPLAY_ITEMS,
      cart,
    });
    console.log(cart);
  };

  useEffect(() => {
    fetchData();
  }, []);
  //
  //
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
