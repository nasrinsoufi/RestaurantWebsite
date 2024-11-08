import { useReducer } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import reducer from "./reducer";

const CartContext = createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
  
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

 
  useEffect(() => {
    dispatch({type:'GET_TOTALS'});
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, clearCart, remove ,addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
