import UpperSectionHeader from "../../../common/UpperSectionHeader/UpperSectionHeader";
import SingleProduct from "../SingleProduct/SingleProduct";

const ProductsSetTwo = () => {
  return (
    <div>
      <div className="container py-5">
        <UpperSectionHeader
          upperTitle="Hard to choose right products for your pets?"
          upperSubTitle="Our Products"
          upperButtonText="View more"
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
