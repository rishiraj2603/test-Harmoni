import { configureStore, createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: { products: [], count: 0 },
  reducers: {
    updateCart: (state, action) => {
      const { change, id, title, image, price } = action.payload;
      let productToChange = state.products.find((item) => item.id === id);
      console.log("🚀 ~ productToChange:", productToChange);

      if (productToChange) {
        productToChange.quantity = Math.max(
          0,
          productToChange.quantity + change
        );
        let total = 0;
        // productToChange.forEach((value) => (total += value.quantity));
        // state.count = total;
        console.log("if");
      } else {
        console.log("else", state.products[id]);
        state.products.push({ id, title, image, price, quantity: 1 });
      }
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
