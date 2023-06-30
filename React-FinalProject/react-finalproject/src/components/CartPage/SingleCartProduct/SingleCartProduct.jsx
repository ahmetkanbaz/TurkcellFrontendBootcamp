import { AiFillDelete } from "react-icons/ai";
import Button from "../../../common/Button/Button";
import { useState } from "react";
import Toast from "../../../common/Toast/Toast";
import PropTypes from "prop-types";
const SingleCartProduct = ({ product }) => {
  const { title, category, image, price, quantity } = product;
  const [productCount, setProductCount] = useState(quantity);
  const [isUserProductCount, setIsUserProductCount] = useState(false);

  const increaseProductCount = () => {
    setProductCount(productCount + 1);
  };

  const decreaseProductCount = () => {
    if (productCount === 1) {
      Toast({
        message: "Ürün adedi 1'den az olamaz.",
        type: "error",
      });
      return;
    }
    setProductCount(productCount - 1);
  };

  const handleChangeProductCount = () => {
    if (productCount <= 0) {
      Toast({
        message: "Ürün adedi 1'den az olamaz.",
        type: "error",
      });
      setProductCount(1);
    }
    setIsUserProductCount(false);
  };
  return (
    <div className="border-top border-2 py-3">
      <div className="row">
        <div className="col-lg-4 col-12 mb-lg-0 mb-3">
          <div className="d-flex justify-content-center">
            <img
              src={image}
              alt=""
              className="img-fluid singleCartProductImage"
            />
          </div>
        </div>
        <div className="col-lg-8 col-12">
          <div className="d-flex justify-content-end">
            <AiFillDelete cursor="pointer" />
          </div>
          <h5 className="fw-bold">{title}</h5>
          <p className="text-capitalize">{category}</p>
          <div className="d-flex gap-5">
            <span>Adet</span>
            {isUserProductCount ? (
              <div className="d-flex gap-3">
                <input
                  type="number"
                  value={productCount}
                  onChange={(e) => setProductCount(Number(e.target.value))}
                  className="productCountStyle rounded w-100 text-center"
                />
                <Button
                  buttonText="Add"
                  padding=".2rem 1rem"
                  backgroundcolor="transparent"
                  onClick={handleChangeProductCount}
                />
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <Button buttonText="-" onClick={decreaseProductCount} />
                <div
                  className="text-center productCountStyle"
                  onClick={() => setIsUserProductCount(true)}
                >
                  {productCount}
                </div>
                <Button buttonText="+" onClick={increaseProductCount} />
              </div>
            )}
          </div>
          <p className="text-center mt-3 fw-bold">{price} VND</p>
        </div>
      </div>
    </div>
  );
};

SingleCartProduct.propTypes = {
  product: PropTypes.object,
};

export default SingleCartProduct;
