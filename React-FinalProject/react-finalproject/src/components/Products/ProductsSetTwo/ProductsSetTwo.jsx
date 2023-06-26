import UpperSectionHeader from "../../../common/UpperSectionHeader/UpperSectionHeader";
import SingleProduct from "../SingleProduct/SingleProduct";
import {useNavigate} from 'react-router-dom'

const ProductsSetTwo = () => {
  const navigate = useNavigate()
  return (
    <div className="d-none d-lg-flex">
      <div className="container py-5">
        <UpperSectionHeader
          upperTitle="Hard to choose right products for your pets?"
          upperSubTitle="Our Products"
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
          <button className="btn btn-info rounded-pill w-75">
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsSetTwo;
