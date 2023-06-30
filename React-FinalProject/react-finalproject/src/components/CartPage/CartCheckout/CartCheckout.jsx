import Button from "../../../common/Button/Button";
import { useSelector } from "react-redux";
const CartCheckout = () => {
  const loginUserCart = useSelector((state) => state.cart.cart);

  const subTotalCart = () => {
    let subTotal = 0;
    loginUserCart.map((product) => {
      subTotal += product.quantity * product.price;
    });
    return subTotal;
  };

  const subTotal = subTotalCart();
  const shipping = 19.99;

  const handleCheckout = () => {
    console.log("Checkout");
  };
  return (
    <div className="border rounded-4 p-3">
      <h4 className="fw-bold">Cart Checkout</h4>
      <div>
        <div className="d-flex flex-column gap-2 border-bottom border-top border-2 py-3">
          <div className="d-flex justify-content-between">
            <span>Subtotal</span>
            <span>{subTotal.toFixed(2)} VND</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Shipping</span>
            <span>{shipping} VND</span>
          </div>
        </div>
        <div className="d-flex justify-content-between pt-3">
          <span>Total</span>
          <span>{(subTotal + shipping).toFixed(2)} VND</span>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Button
            buttonText="Checkout"
            padding=".3rem .9rem"
            backgroundcolor="#003459"
            color="#FDFDFD"
            onClick={handleCheckout}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
