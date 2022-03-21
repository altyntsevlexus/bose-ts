import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProductType } from '../types';

const initialState = <CartProductType[]>[];

const compare = (item: CartProductType, payload: CartProductType) =>
  item.productId === payload.productId && item.color === payload.color;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    delItem: (state, { payload }: PayloadAction<CartProductType>) => {
      state.splice(
        state.findIndex((item) => compare(item, payload)),
        1,
      );
    },

    addItem: (state, { payload }: PayloadAction<CartProductType>) => {
      const product = state.find((item) => compare(item, payload));

      if (product) {
        product.quantity += payload.quantity;
      } else {
        state.push(payload);
      }
    },

    increment: (state, { payload }: PayloadAction<CartProductType>) => {
      const product = state.find((item) => compare(item, payload))!;
      product.quantity += 1;
    },

    decrement: (state, { payload }: PayloadAction<CartProductType>) => {
      const product = state.find((item) => compare(item, payload))!;
      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.splice(
          state.findIndex((item) => compare(item, payload)),
          1,
        );
      }
    },

    empty: () => initialState,
  },
});

export const { delItem, addItem, increment, decrement, empty } =
  cartSlice.actions;

export default cartSlice.reducer;
