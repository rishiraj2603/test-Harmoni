import { configureStore, createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: { products: [], count: 0 },
  reducers: {
    updateCart: (state, action) => {
      const { change, id, title, image, price } = action.payload;
      let productToChange = state.products.find((item) => item.id === id);

      if (productToChange) {
        productToChange.quantity = Math.max(
          0,
          productToChange.quantity + change
        );
      } else {
        state.products.push({ id, title, image, price, quantity: 1 });
      }
      state.count = state.products.reduce(
        (total, product) => total + product.quantity,
        0
      );
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
