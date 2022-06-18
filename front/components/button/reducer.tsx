import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  productName: string;
  price: number;
  id: string;
}

export interface Cart {
  id: string;
  items: Item[];
}

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: { id: "0", items: [] } as Cart,
  reducers: {
    changeCart(state, action: PayloadAction<Cart>) {
      const { payload } = action;
      state.id = payload.id;
      state.items = payload.items;
    },
    createCart(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
  },
});

export const { changeCart, createCart } = cartSlice.actions;

export default cartSlice.reducer;
