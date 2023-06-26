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
          <SingleProduct columnSize='col-lg-3 col-md-4 col-6'/>
          <SingleProduct columnSize='col-lg-3 col-md-4 col-6'/>
          <SingleProduct columnSize='col-lg-3 col-md-4 col-6'/>
          <SingleProduct columnSize='col-lg-3 col-md-4 col-6'/>
          <SingleProduct columnSize='col-lg-3 col-md-4 col-6'/>
          <SingleProduct columnSize='col-lg-3 col-md-4 col-6'/>
          <SingleProduct columnSize='col-lg-3 col-md-4 col-6'/>
          <SingleProduct columnSize='col-lg-3 col-md-4 col-6'/>
        </div>
      </div>
    </div>
  );
};

export default ProductsSetTwo;
