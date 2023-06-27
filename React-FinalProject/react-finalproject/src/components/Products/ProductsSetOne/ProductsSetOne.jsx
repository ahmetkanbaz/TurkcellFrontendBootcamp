import Button from "../../../common/Button/Button";
import UpperSectionHeader from "../../../common/UpperSectionHeader/UpperSectionHeader";
import SingleProduct from "../SingleProduct/SingleProduct";
import { useNavigate } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import {useSelector} from 'react-redux'

const ProductsSetOne = () => {
  const navigate = useNavigate();
  const allProducts = useSelector((state) => state.products.products)
  const loading = useSelector((state) => state.products.loading)
  const error = useSelector((state) => state.products.error)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>There is an error</div>
  }
  return (
    <div>
      <div className="container py-5">
        <UpperSectionHeader
          upperTitle="Whats new?"
          upperSubTitle="Take a look at some of our pets"
          upperButtonText="View more"
          onClick={() => navigate("/products")}
        />
        <div className="row g-3 py-3">
        {
            allProducts.slice(0, 8).map((singleProduct) => (
              <SingleProduct key={singleProduct.id} singleProduct = {singleProduct} columnSize="col-lg-3 col-md-4 col-6"/>
            ))
          }
        </div>
        <div className="d-md-none d-flex justify-content-center">
          <Button
            buttonText="View more"
            color="#003459"
            padding="0.625rem 1.75rem"
            backgroundcolor="transparent"
            icon={<AiOutlineRight size="1.25rem" />}
            iconPosition="right"
            fontSize="1rem"
            className='w-100'
            onClick={() => navigate("/products")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsSetOne;
