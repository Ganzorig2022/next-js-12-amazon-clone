import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

//https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createslice
export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    //Actions
    addToBasket: (state, action) => {
      //actions.payload-oor "product{}" "Product.jsx"-ees irne.
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      // 1) find clicked index from product array
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        // 2) The item exists in the basket... remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product {id: ${action.payload.id} as its not in there}`
        );
      }

      // 3) set a new array
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotals = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
