import axios from 'axios'

const apiUrl = 'http://localhost:3000';

export const postNewUser = async (newUser) => {
  try {
    const response = await axios.post(`${apiUrl}/users`, newUser)
    return response
  }
  catch (error) {
    return error.message
  }
}

export const updateProduct = async (productValues) => {
  try {
    const response = await axios.put(`${apiUrl}/products/${productValues.id}`, productValues)
    return response.data
  }

  catch (error) {
    return error.message
  }
}