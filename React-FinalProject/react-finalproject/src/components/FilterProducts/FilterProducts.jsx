import Button from "../../common/Button/Button";
import SingleProduct from "../Products/SingleProduct/SingleProduct";
import { AiOutlineDown } from "react-icons/ai";
import { useSelector } from "react-redux";

const FilterProducts = () => {
  const allProducts = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>There is an error</div>;
  }
  return (
    <div>
      <div className="container py-4">
        <div className="row pb-5">
          <div className="col-md-3 sticky-lg-top">
            <h4 className="pb-3 fw-bold">Filter</h4>
            <div className="card">
              <div className="card-header">Filter Products</div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    className="form-control"
                    name="category"
                    id="category"
                  >
                    <option value="">Select Category</option>
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="1000"
                    id="price"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rating">Rating</label>
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="5"
                    id="rating"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="brand">Brand</label>
                  <select className="form-control" name="brand" id="brand">
                    <option value="">Select Brand</option>
                    <option value="1">Brand 1</option>
                    <option value="2">Brand 2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="d-flex justify-content-between pb-3 align-items-center">
              <div className="d-flex gap-3 align-items-center">
                <h4 className="fw-bold">Small Dog</h4>
                <span>52 puppies</span>
              </div>
              <Button
                padding="0.25rem 0.625rem"
                backgroundcolor="transparent"
                color="#667479"
                fontSize="0.875rem"
                icon={<AiOutlineDown size="1.1rem" />}
                buttonText="Sort by: Popular"
                iconPosition="right"
              />
            </div>
            <div className="row justify-content-center g-3">
              {allProducts.map((singleProduct) => (
                <SingleProduct
                  key={singleProduct.id}
                  singleProduct={singleProduct}
                  columnSize="col-lg-4 col-md-6 col-6"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
