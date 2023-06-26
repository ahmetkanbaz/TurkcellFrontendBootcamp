import PropTypes from "prop-types";
import { BannerContainer } from "./BannerStyle";
import Button from "../Button/Button";
import { AiOutlinePlayCircle } from "react-icons/ai";
const Banner = ({
  title,
  sizetitle,
  color,
  subTitle,
  subTitleSize,
  description,
  image,
  reverse,
}) => {
  let alignEnd = reverse === "flex-row-reverse" ? "align-items-end" : "";
  const textEnd =
    reverse === "flex-row-reverse" ? " text-center text-lg-end" : "";
  return (
    <BannerContainer
      className="container"
      size={subTitleSize}
      sizetitle={sizetitle}
      color={color}
    >
      <div className={`row align-items-center ${reverse}`}>
        <div className={`col-12 col-lg-6 pe-5 d-flex flex-column ${alignEnd}`}>
          <h1 className="fw-bold text-capitalize">{title}</h1>
          <h3 className="fw-bold text-capitalize">{subTitle}</h3>
          <p className={`${textEnd}`}>{description}</p>
          <div className="d-flex gap-3">
            <Button
              icon={<AiOutlinePlayCircle size='1.5rem'/>}
              iconPosition="right"
              padding = '0.875rem 1.75rem'
              buttonText = 'View Intro'
              color = '#003459'
              backgroundcolor = 'transparent'
            />
            <Button
              padding = '0.875rem 1.75rem'
              buttonText = 'Explore Now'
              color = '#FDFDFD'
              backgroundcolor = '#003459'
            />
          </div>
        </div>
        <div className="col-12 col-lg-6 pt-5">
          <img src={image} alt="" className="img-fluid" />
        </div>
      </div>
    </BannerContainer>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  sizetitle: PropTypes.string,
  color: PropTypes.string,
  subTitle: PropTypes.string,
  subTitleSize: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  reverse: PropTypes.string,
};

export default Banner;
