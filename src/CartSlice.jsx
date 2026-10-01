import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, { payload }) {
      const existing = state.items.find(item => item.id === payload.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...payload, quantity: 1 });
    },
    increaseQuantity(state, { payload: id }) {
      const item = state.items.find(item => item.id === id);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, { payload: id }) {
      const item = state.items.find(item => item.id === id);
      if (!item) return;
      if (item.quantity > 1) item.quantity -= 1;
      else state.items = state.items.filter(item => item.id !== id);
    },
    removeItem(state, { payload: id }) {
      state.items = state.items.filter(item => item.id !== id);
    },
  },
});
export const { addItem, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export const selectItems = state => state.cart.items;
export const selectCartCount = state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotal = state => state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
export default cartSlice.reducer;
