import PropTypes from "prop-types";
import { UpperSectionHeaderDiv } from "./UpperStyle";
const UpperSectionHeader = ({ upperTitle, upperSubTitleSpan,  upperSubTitle, upperButtonText }) => {
  return (
    <UpperSectionHeaderDiv>
      {upperTitle && <span>{upperTitle}</span>}
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          {
            upperSubTitleSpan && <span className="">{upperSubTitleSpan}</span>
          }
          <p className="text-capitalize subTitle mb-0">{upperSubTitle}</p>
        </div>
        <button className="btn btn-info rounded-pill d-none d-md-block">
          {upperButtonText}
        </button>
      </div>
    </UpperSectionHeaderDiv>
  );
};

UpperSectionHeader.propTypes = {
  upperTitle: PropTypes.string,
  upperSubTitleSpan: PropTypes.string,
  upperSubTitle: PropTypes.string,
  upperButtonText: PropTypes.string,
};

export default UpperSectionHeader;
