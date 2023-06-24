import UpperSectionHeader from "../../../common/UpperSectionHeader/UpperSectionHeader"
import SingleProduct from "../SingleProduct/SingleProduct"
import {AllProductsDiv} from './AllProductsStyle'

const AllProducts = () => {
  return (
    <AllProductsDiv>
      <div className="container py-5">
        <UpperSectionHeader upperTitle='Whats new?' upperSubTitle='Take a look at some of our pets' upperButtonText='View more'/>
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