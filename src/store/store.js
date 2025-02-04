import { configureStore, createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: { products: {}, count: 0 },
  reducers: {
    updateCart: (state, action) => {
      const { change, id } = action.payload;
      state.products[id] = Math.max(0, (state.products[id] || 0) + change);
      let total = 0;
      Object.values(state.products).forEach((value) => (total += value));
      state.count = total;
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
