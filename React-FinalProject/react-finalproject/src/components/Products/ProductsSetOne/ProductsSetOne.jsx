import UpperSectionHeader from "../../../common/UpperSectionHeader/UpperSectionHeader";
import SingleProduct from "../SingleProduct/SingleProduct";
import { useNavigate } from "react-router-dom";

const ProductsSetOne = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container py-5">
        <UpperSectionHeader
          upperTitle="Whats new?"
          upperSubTitle="Take a look at some of our pets"
          upperButtonText="View more"
          onClick={() => navigate('/products')}
        />
        <div className="row g-3 py-3">
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </div>
        <div className="d-md-none d-flex justify-content-center">
          <button className="btn btn-info rounded-pill w-75" onClick={() => navigate('/products')}>
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsSetOne;
