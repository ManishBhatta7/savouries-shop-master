// CartProvider.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(); // Create CartContext

const cartReducer = (state, action) => {
  // Define reducer logic for cart actions
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => {
    // Implement addToCart functionality
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext); // Custom hook to use CartContext
};

export default CartContext; // Export CartContext for use in other components
