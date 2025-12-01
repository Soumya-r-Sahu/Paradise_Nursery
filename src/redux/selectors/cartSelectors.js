// Redux Selectors for Cart
export const getCartItems = (state) => state.cartItems;

export const getCartCount = (state) => {
  return state.cartItems.reduce((total, item) => total + item.quantity, 0);
};

export const getCartTotal = (state) => {
  return state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

