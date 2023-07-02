import { AllProductsBannerContainer } from "./AllProductsBannerStyle";
import allProductsBanner from "../../../assets/banner/allProductsBanner.svg";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Button from "../../../common/Button/Button";
import { Link } from "react-router-dom";
const AllProductsHeroBanner = () => {
  const title = "One more friend";
  const subTitle = "Thousands more fun!";
  const description =
    "Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!";
  return (
    <div className="container py-5">
      <nav
        className="pt-5"
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
          <li className="breadcrumb-item active">Products</li>
        </ol>
      </nav>

      <AllProductsBannerContainer className="pb-0 pt-lg-0">
        <div className="position-relative p-3">
          <div className="layout position-absolute"></div>
          <div className="layout2 d-flex d-lg-none position-absolute"></div>
          <div className={`row align-items-center flex-row-reverse text-lg-end`}>
            <div className={`col-12 col-lg-5 d-flex flex-column`}>
              <h1 className="text-capitalize">{title}</h1>
              <h3 className="fw-bold text-capitalize">{subTitle}</h3>
              <p>{description}</p>
              <div className="d-flex gap-3 justify-content-lg-end">
                <Button
                  icon={<AiOutlinePlayCircle size="1.5rem" />}
                  iconPosition="right"
                  padding="0.625rem 1.75rem"
                  buttonText="View Intro"
                  color="#003459"
                  backgroundcolor="transparent"
                />
                <Button
                  padding="0.625rem 1.75rem"
                  buttonText="Explore Now"
                  color="#FDFDFD"
                  backgroundcolor="#003459"
                />
              </div>
            </div>
            <div className="col-12 col-lg-7 pt-5">
              <img
                src={allProductsBanner}
                alt=""
                className="img-fluid heroImage"
              />
            </div>
          </div>
        </div>
      </AllProductsBannerContainer>
    </div>
  );
};

export default AllProductsHeroBanner;
