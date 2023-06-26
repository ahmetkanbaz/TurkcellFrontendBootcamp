import Button from "../../../common/Button/Button";
import UpperSectionHeader from "../../../common/UpperSectionHeader/UpperSectionHeader";
import SingleProduct from "../SingleProduct/SingleProduct";
import { useNavigate } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const ProductsSetOne = () => {
  const navigate = useNavigate();
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
          <SingleProduct columnSize="col-lg-3 col-md-4 col-6" />
          <SingleProduct columnSize="col-lg-3 col-md-4 col-6" />
          <SingleProduct columnSize="col-lg-3 col-md-4 col-6" />
          <SingleProduct columnSize="col-lg-3 col-md-4 col-6" />
          <SingleProduct columnSize="col-lg-3 col-md-4 col-6" />
          <SingleProduct columnSize="col-lg-3 col-md-4 col-6" />
          <SingleProduct columnSize="col-lg-3 col-md-4 col-6" />
          <SingleProduct columnSize="col-lg-3 col-md-4 col-6" />
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
