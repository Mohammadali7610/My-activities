import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.data.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.data.push({ ...action.payload, quantity:1});
      }
    },
    removeFromCart: (state, action) => {
      state.data.splice(state.data.findIndex((data )=>data.id === action.payload.id ),1);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.data.findIndex((data) => data.id === id);
      if (itemIndex !== -1) {
        state.data[itemIndex].quantity = quantity;
      }
    },
    },
});

export const { addToCart, removeFromCart,updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
