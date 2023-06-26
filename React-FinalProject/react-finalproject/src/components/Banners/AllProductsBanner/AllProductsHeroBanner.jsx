import Banner from "../../../common/Banner/Banner";
import { AllProductsBannerContainer } from "./AllProductsBannerStyle";
import allProductsBanner from "../../../assets/banner/allProductsBanner.svg";
import {Link} from 'react-router-dom'
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
            <Link to={'/'} className="text-decoration-none">Home</Link>
          </li>
          <li className="breadcrumb-item active">
            Products
          </li>
        </ol>
      </nav>

      <AllProductsBannerContainer className="pb-0 pt-lg-0">
        <Banner
          title={title}
          sizetitle="3.25rem"
          color="#FDFDFD"
          subTitle={subTitle}
          subTitleSize="2.25rem"
          description={description}
          image={allProductsBanner}
          reverse="flex-row-reverse"
        />
      </AllProductsBannerContainer>
    </div>
  );
};

export default AllProductsHeroBanner;
