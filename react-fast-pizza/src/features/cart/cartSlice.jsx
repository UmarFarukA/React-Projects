import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantityItem(state, action) {
      const qty = state.cart.find((item) => item.pizzaId === action.payload);
      qty.quantity++;
    },
    decreaseQuantityItem(state, action) {
      const qty = state.cart.find((item) => item.pizzaId === action.payload);
      qty.quantity--;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantityItem,
  decreaseQuantityItem,
  clearCart,
} = cartSlice.actions;

export const getTotalQuantity = (store) =>
  store.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalPrice = (store) =>
  store.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0);

export const getUsername = (store) => store.user.username;
export default cartSlice.reducer;
