import { BsFillCartPlusFill } from "react-icons/bs";
import { SingleCard, ProductTitle, ProductPrice } from "./SingleProductStyle";
import PropTypes from "prop-types";
import { BsInfoCircle } from "react-icons/bs";
import {useNavigate} from 'react-router-dom'
const SingleProduct = ({ columnSize, singleProduct }) => {
  const navigate = useNavigate()
  return (
    <div className={columnSize}>
      {singleProduct && (
        <SingleCard className="card p-2 border-0 shadow-sm">
          <img
            src={singleProduct.image}
            className="card-img-top object-fit-contain"
            alt=""
          />
          <div className="card-body">
            <ProductTitle className="card-title text-truncate">
              {singleProduct.title}
            </ProductTitle>
            <p className="card-text text-truncate mb-1">{singleProduct.description}</p>
            <div className="d-flex justify-content-lg-between flex-wrap pb-2">
              <span>Rating {singleProduct.rating.rate}</span>
              <span>Stok Adedi: {singleProduct.rating.count}</span>
            </div>
            <p className="mb-1 category">Kategori: {singleProduct.category}</p>
            <ProductPrice className="fw-bold mb-1 price">Fiyat: {singleProduct.price}</ProductPrice>
            <div className="d-flex justify-content-lg-evenly justify-content-between align-items-center">
              <BsFillCartPlusFill size={"1.5rem"} cursor={"pointer"} />
              <BsInfoCircle
                size={"1.5rem"}
                cursor={"pointer"}
                color="#003459"
                onClick={() => navigate(`/detailproduct/${singleProduct.id}`)}
              />
            </div>
          </div>
        </SingleCard>
      )}
    </div>
  );
};

SingleProduct.propTypes = {
  columnSize: PropTypes.string,
  singleProduct: PropTypes.object,
};

export default SingleProduct;
