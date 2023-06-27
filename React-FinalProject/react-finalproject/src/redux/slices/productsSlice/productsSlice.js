import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadingAllProducts: (state) => {
      state.loading = true;
    },
    getAllProducts: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    errorAllProducts: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.products = []
    }
  },
});

export const {loadingAllProducts, getAllProducts, errorAllProducts} = productsSlice.actions;

export default productsSlice.reducer;
