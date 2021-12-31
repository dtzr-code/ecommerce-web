import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //must spread the state.items like 'copying' the intiial state of the items and adding on to it
      //the payload contains the item that we want to add
      const found = state.items.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (found) {
        const index = state.items.findIndex(
          (cartItem) => cartItem.id === action.payload.id
        );
        state.items[index].quantity += 1
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
     
    },

    increaseQty: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.items[index].quantity += 1;
    },

    decreaseQty: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.items[index].quantity > 1) {
        state.items[index].quantity -= 1;
      } else {
        alert('Minimum quanitity is 1. Remove item instead.')
      }
    },

    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      let newCart = [...state.items];

      if (index >= 0) {
        //If the item exists in the basket remove it
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove from product (id:${action.payload.id}) as its not found in the cart`
        );
      }

      state.items = newCart;
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseQty, decreaseQty } =
  cartSlice.actions;

export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) =>
  state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);

export default cartSlice.reducer;
