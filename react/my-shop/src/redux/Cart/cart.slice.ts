import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../data/products";

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};


export const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addProduct: (state, action) => {
      state.cart = [
        ...state.cart,  // tudo o que já tinha
        action.payload,  // mais a adição do payload
      ]
    },
    removeProduct: (state, action) => {
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );

      state.cart = cartFiltered; // agora o carrinho vai ser o carrinho com o filtro do produto que a gente estava removendo
    },
  },
});

export const {addProduct, removeProduct} = cartSlice.actions