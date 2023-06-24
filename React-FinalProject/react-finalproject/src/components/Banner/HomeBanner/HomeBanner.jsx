import { HomeBannerDiv } from "./HomeBannerStyle";
import homeBanner from "../../../assets/banner/homeBanner.svg";
const HomeBanner = () => {
  return (
    <HomeBannerDiv className="position-relative pt-5 pt-lg-0">
      {/* <div className="position-absolute layout1"></div> */}
      <div className="container pt-5">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <h1 className="fw-bold text-capitalize">One more friend</h1>
            <h3 className="fw-bold text-capitalize">Thousands more fun!</h3>
            <p>
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-primary mt-3">View Intro</button>
              <button className="btn btn-primary mt-3">Explore Now</button>
            </div>
          </div>
          <div className="col-12 col-lg-6 pt-5">
            <img src={homeBanner} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </HomeBannerDiv>
  );
};

export default HomeBanner;
