/* eslint-disable no-undef */
import { Link, useParams } from "react-router-dom";
import Button from "../../common/Button/Button";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { DetailProductContainer } from "./DetailProductStyle";
import { FiShare2 } from "react-icons/fi";
import ProductSlider from "./ProductSlider/ProductSlider";
import detailPageOne from "../../assets/detailPage/detailPageOne.svg";
import detailPageTwo from "../../assets/detailPage/detailPageTwo.svg";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import RandomProducts from "./RandomProducts/RandomProducts";
import DetailTable from "./DetailTable/DetailTable";
import { fetchDetailProduct } from "../../utils/request";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateProduct from "./UpdateProduct/UpdateProduct";
import {AiOutlineEdit} from 'react-icons/ai'
const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const detailProduct = useSelector(
    (state) => state.detailProduct.detailProduct
  );
  const loading = useSelector((state) => state.detailProduct.loading);
  const error = useSelector((state) => state.detailProduct.error);
  const loginUser = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(fetchDetailProduct(id));
  }, [id]);

  const productImages = [
    detailProduct.image,
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ];

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
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
                  <FiShare2 size="1.25rem" cursor="pointer" />
                  <h6 className="fw-bold align-items-center pt-2">Share:</h6>
                </div>
                <div className="d-flex gap-3 opacity-50">
                  <BsFacebook size="1.25rem" cursor="pointer" />
                  <BsTwitter size="1.25rem" cursor="pointer" />
                  <BsInstagram size="1.25rem" cursor="pointer" />
                  <BsYoutube size="1.25rem" cursor="pointer" />
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
              <h4 className="fw-bold">{detailProduct.title}</h4>
              <h5 className="fw-bold lh-lg">{detailProduct.price} VND</h5>
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
              <DetailTable detailProduct={detailProduct} />
              {loginUser.isAdmin == true && (
                <div className="d-flex justify-content-lg-end justify-content-center">
                  <Button
                    onClick={handleShow}
                    padding=".325rem 1rem"
                    buttonText="Update Product"
                    color = '#FDFDFD'
                    backgroundcolor="#003459"
                    fontSize='.9rem'
                    icon={<AiOutlineEdit />}
                    iconPosition="left"
                    className="fw-bold"
                  />
                </div>
              )}
              {show == true && (
                <UpdateProduct
                  detailProduct={detailProduct}
                  show={show}
                  handleClose={handleClose}
                />
              )}
            </div>
          </div>
        </div>
        <RandomProducts id={id} />
      </div>
    </DetailProductContainer>
  );
};

export default DetailProduct;
