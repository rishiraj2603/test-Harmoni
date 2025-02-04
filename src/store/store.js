import { configureStore, createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: { product: [], item: 0 },
  reducers: {
    updateCart: (state, action) => {
      state.item += 1;
    },
  },
});

const CategorySlice = createSlice({
  name: "category",
  initialState: { selectedCategory: "" },
  reducers: {
    updateCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { cart: CartSlice.reducer, category: CategorySlice.reducer },
});

export const { updateCart } = CartSlice.actions;
export const { updateCategory } = CategorySlice.actions;
export default store;
