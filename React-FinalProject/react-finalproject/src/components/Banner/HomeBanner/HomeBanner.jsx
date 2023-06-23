import { HomeBannerDiv } from "./HomeBannerStyle";
import homeBanner from '../../../assets/banner/homeBanner.svg'
const HomeBanner = () => {
  return (
    <HomeBannerDiv>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-12 col-lg-6">
            <h1 className="fw-bold">Welcome to our website</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              voluptatem quas quidem doloribus fugit. Quisquam voluptatum,
              voluptate, quibusdam, quia voluptas quod quos voluptatem quas
              quidem doloribus fugit.
            </p>
            <button className="btn btn-primary mt-3">Learn More</button>
          </div>
          <div className="col-12 col-lg-6">
            <img
              src={homeBanner}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </HomeBannerDiv>
  );
};

export default HomeBanner;
