import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../slices/productsSlice/productsSlice'
import productDetailReducer from '../slices/productDetailSlice/productDetailSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    detailProduct: productDetailReducer
  }
})

export default store