import axios from 'axios'
import { addToCart, removeFromCart, clearCart, setCart, setCartError } from '../redux/slices/cartSlice/cartSlice';

const apiUrl = 'http://localhost:3000';

export const updateProduct = async (productValues) => {
  try {
    const response = await axios.put(`${apiUrl}/products/${productValues.id}`, productValues)
    return response.data
  }

  catch (error) {
    return error.message
  }
}

export const addNewProduct4Cart = (userData, product) => async (dispatch) => {
  try {
    const updatedUserValues = {
      ...userData,
      cart: [...userData.cart, product]
    }
    await axios.put(`${apiUrl}/users/${userData.id}`, updatedUserValues)
    dispatch(addToCart(product))
    localStorage.setItem('isLogin', JSON.stringify(updatedUserValues))
  }
  catch (error) {
    dispatch(setCartError(error.message))
  }
}

export const removeProductFromCart = (userData, product) => async (dispatch) => {
  try {
    const updatedUserValues = {
      ...userData,
      cart: userData.cart.filter((item) => item.id != product.id)
    }
    await axios.put(`${apiUrl}/users/${userData.id}`, updatedUserValues)
    dispatch(removeFromCart(product))
    localStorage.setItem('isLogin', JSON.stringify(updatedUserValues))
  }
  catch (error) {
    dispatch(setCartError(error.message))
  }
}

export const clearAllCartProducts = (userData) => {
  const updatedUserValues = {
    ...userData,
    cart: []
  }
  axios.put(`${apiUrl}/users/${userData.id}`, updatedUserValues)
  localStorage.setItem('isLogin', JSON.stringify(updatedUserValues))
  return clearCart()
}

export const updateCart = (userData, cart) => {
  const updatedUserValues = {
    ...userData,
    cart
  }
  axios.put(`${apiUrl}/users/${userData.id}`, updatedUserValues)
  localStorage.setItem('isLogin', JSON.stringify(updatedUserValues))
  return setCart(cart)
}