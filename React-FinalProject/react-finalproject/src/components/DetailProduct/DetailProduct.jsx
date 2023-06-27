/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { DetailProductContainer } from "./DetailProductStyle";
import { FiShare2 } from "react-icons/fi";
import ProductSlider from "./ProductSlider/ProductSlider";
import detailPageOne from "../../assets/detailPage/detailPageOne.svg";
import detailPageTwo from "../../assets/detailPage/detailPageTwo.svg";
import {BsFacebook, BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs'
import RandomProducts from "./RandomProducts/RandomProducts";
import DetailTable from "./DetailTable/DetailTable";
import { useParams } from "react-router-dom";
const DetailProduct = () => {
  const {id} = useParams()
  const productImages = [
    "https://picsum.photos/200/300",
    "https://cdn.pazarium.com.tr/ip-detayli-beli-lastikli-dar-paca-siyah-pantolon-kadin-pantolon-sumeyye-tekstil-390959-66-O.jpg",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ];
  return (
    <DetailProductContainer>
      <div className="container">
        <div className="detailContainerWrapper p-3">
        <div className="row">
          <div className="col-lg-6 col-12">
            <ProductSlider images={productImages} />
            <div className="my-3 d-flex flex-wrap justify-content-between quarantee">
              <div>
                <img src={detailPageOne} alt="" />
                <span className="ps-2 fw-bold lh-sm">
                  100% health guarantee for pets
                </span>
              </div>
              <div>
                <img src={detailPageTwo} alt="" />
                <span className="fw-bold ps-2 lh-sm">
                  100% guarantee of pet identification
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-4">
              <div className="d-flex gap-1 align-items-center">
                <FiShare2 size="1.25rem"  cursor='pointer'/>
                <h6 className="fw-bold align-items-center pt-2">Share:</h6>
              </div>
              <div className="d-flex gap-3">
                <BsFacebook size='1.25rem' opacity='.5' cursor='pointer'/>
                <BsTwitter size='1.25rem' opacity='.5' cursor='pointer'/>
                <BsInstagram size='1.25rem' opacity='.5' cursor='pointer'/>
                <BsYoutube size='1.25rem' opacity='.5' cursor='pointer'/>
              </div>
            </div>
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
                <li className="breadcrumb-item active">Product Detail</li>
              </ol>
            </nav>
            <h4 className="fw-bold">Product Name</h4>
            <h5 className="fw-bold lh-lg">Product Price</h5>
            <div className="d-flex gap-3 pb-md-3 pb-0">
              <Button
                padding="0.875rem 1.75rem"
                buttonText="Contact us"
                color="#FDFDFD"
                backgroundcolor="#003459"
                fontSize="1rem"
                className="fw-bold"
              />
              <Button
                padding="0.875rem 1.75rem"
                buttonText="Chat with Monito"
                color="#002A48"
                backgroundcolor="transparent"
                icon={<LiaCommentDotsSolid size="1.5rem" color="#002A48" />}
                iconPosition="left"
                fontSize="1rem"
                className="fw-bold"
              />
            </div>
            <div className="d-flex d-md-none justify-content-between align-items-center">
              <h4 className="fw-bold">Information</h4>
              <div className="d-flex gap-1 py-3">
                <FiShare2 size="1.5rem" />
                <h5 className="fw-bold align-items-center share">Share</h5>
              </div>
            </div>
            <DetailTable id={id}/>
          </div>
        </div>
        </div>
      <RandomProducts />
      </div>
    </DetailProductContainer>
  );
};

export default DetailProduct;
