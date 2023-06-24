import SingleProduct from "../SingleProduct/SingleProduct"
import {AllProductsDiv} from './AllProductsStyle'

const AllProducts = () => {
  return (
    <AllProductsDiv>
      <div className="container py-5">
        <span>Whats new?</span>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-capitalize fw-bold fs-4 takeALook">Take a look at some of our pets</span>
          <button className="btn btn-info rounded-pill">View more</button>
        </div>
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
      </div>
    </AllProductsDiv>
  )
}

export default AllProducts