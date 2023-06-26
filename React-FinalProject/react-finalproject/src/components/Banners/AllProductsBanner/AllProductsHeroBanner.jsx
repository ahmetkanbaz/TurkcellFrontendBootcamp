import Banner from "../../../common/Banner/Banner";
import {AllProductsBannerContainer} from './AllProductsBannerStyle'
import allProductsBanner from '../../../assets/banner/allProductsBanner.svg'
const AllProductsHeroBanner = () => {
  const title = "One more friend";
  const subTitle = "Thousands more fun!";
  const description =
    "Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!";
  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb pt-5">
          <li className="breadcrumb-item active" aria-current="page">
            Home
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Library
          </li>
        </ol>
      </nav>
      <AllProductsBannerContainer className="pb-0 pt-lg-0 d-none d-lg-flex">
        <Banner
          title={title}
          sizetitle="3.25rem"
          color='#FDFDFD'
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
