import {BsFillCartPlusFill} from 'react-icons/bs'
import {SingleCard, ProductTitle, ProductPrice} from './SingleProductStyle'
const SingleProduct = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <SingleCard className="card p-2 border-0 shadow-sm">
        <img
          src="https://picsum.photos/200/300"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <ProductTitle className="card-title">Title</ProductTitle>
          <p className="card-text text-truncate mb-1">Description</p>
          <div className='d-flex justify-content-between pb-2'>
            <span>Rating</span>
            <span>Stok Adedi:</span>
          </div>
          <p className='mb-1 category'>Kategori</p>
          <ProductPrice className="fw-bold mb-1 price">Fiyat</ProductPrice>
          <div className="d-flex justify-content-evenly align-items-center">
            <BsFillCartPlusFill size={'1.7rem'} cursor={'pointer'}/>
            <button className='btn btn-danger'>Detay</button>
          </div>
        </div>
      </SingleCard>
    </div>
  );
};

export default SingleProduct;
