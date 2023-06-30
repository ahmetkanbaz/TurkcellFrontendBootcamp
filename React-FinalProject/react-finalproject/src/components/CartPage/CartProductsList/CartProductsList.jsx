import SingleCartProduct from "../SingleCartProduct/SingleCartProduct"
import {useSelector} from 'react-redux'

const CartProductsList = () => {
  const loginUserCart = useSelector((state) => state.cart.cart)
  return (
    <div className="border p-3 rounded-4">
      <h4 className="fw-bold">Products</h4>
        {
          loginUserCart.map((product) => (
            <SingleCartProduct key={product.id} product = {product}/>
          ))
        }
    </div>
  )
}

export default CartProductsList