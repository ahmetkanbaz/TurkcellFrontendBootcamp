import axios from 'axios'
import { loadingAllProducts, getAllProducts, errorAllProducts } from '../redux/slices/productsSlice/productsSlice'

export const fetchAllProducts = () => async (dispatch) => {
  dispatch(loadingAllProducts())
  try {
    const response = await axios.get('https://fakestoreapi.com/products')
    dispatch(getAllProducts(response.data))
  }
  catch (error) {
    dispatch(errorAllProducts(error.message))
  }
}