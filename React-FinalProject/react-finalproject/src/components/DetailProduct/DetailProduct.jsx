import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import {LiaCommentDotsSolid} from 'react-icons/lia'
const DetailProduct = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-12">
            <img
              src='https://cdn.pazarium.com.tr/ip-detayli-beli-lastikli-dar-paca-siyah-pantolon-kadin-pantolon-sumeyye-tekstil-390959-66-O.jpg'
              className="img-fluid w-100 object-fit-cover rounded-3"
              alt="detailProduct"
            />
          </div>
          <div className="col-lg-6 col-12">
            <nav
              style={{
                "--bs-breadcrumb-divider": "'>'",
              }}
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={"/"} className="text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={"/products"} className="text-decoration-none">
                    Products
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  Product Detail
                </li>
              </ol>
            </nav>
            <h4 className="fw-bold">Product Name</h4>
            <h5 className="fw-bold lh-lg">Product Price</h5>
            <div className="d-flex gap-3">
              <Button
                padding='0.875rem 1.75rem'
                buttonText='Contact us'
                color='#FDFDFD'
                backgroundcolor='#003459'
                fontSize='1rem'
                className='fw-bold'
              />
              <Button
                padding='0.875rem 1.75rem'
                buttonText='Chat with Monito'
                color='#002A48'
                backgroundcolor='transparent'
                icon={<LiaCommentDotsSolid size='1.5rem' color='#002A48'/>}
                iconPosition='left'
                fontSize='1rem'
                className='fw-bold'
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
