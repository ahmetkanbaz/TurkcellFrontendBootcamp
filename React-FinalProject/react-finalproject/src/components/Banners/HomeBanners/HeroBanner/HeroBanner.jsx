import { HeroBannerDiv } from "./HeroBannerStyle";
import homeBanner from "../../../../assets/banner/homeBanner.svg";
import Banner from "../../../../common/Banner/Banner";
const HeroBanner = () => {
  const title = "One more friend";
  const subTitle = "Thousands more fun!";
  const description =
    "Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!";

  return (
    <HeroBannerDiv className="position-relative pt-5">
      {/* <div className="position-absolute layout1"></div> */}
      <Banner
        title={title}
        sizetitle='3.75rem'
        color='#002A48'
        subTitle={subTitle}
        subTitleSize="2.875rem"
        description={description}
        image={homeBanner}
        reverse="null"
      />
    </HeroBannerDiv>
  );
};

export default HeroBanner;
