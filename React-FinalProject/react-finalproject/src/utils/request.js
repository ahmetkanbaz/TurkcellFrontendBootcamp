import axios from 'axios'
import { loadingAllProducts, getAllProducts, errorAllProducts } from '../redux/slices/productsSlice/productsSlice'
import { loadingDetailProduct, getDetailProduct, errorDetailProduct } from '../redux/slices/productDetailSlice/productDetailSlice';

const apiUrl = 'http://localhost:3000';

export const fetchAllProducts = () => async (dispatch) => {
  dispatch(loadingAllProducts())
  try {
    const response = await axios.get(`${apiUrl}/products`)
    dispatch(getAllProducts(response.data))
  }
  catch (error) {
    dispatch(errorAllProducts(error.message))
  }
}

export const fetchDetailProduct = (id) => async (dispatch) => {
  dispatch(loadingDetailProduct())
  try {
    const response = await axios.get(`${apiUrl}/products/${id}`)
    dispatch(getDetailProduct(response.data))
  }
  catch (error) {
    dispatch(errorDetailProduct(error.message))
  }
}