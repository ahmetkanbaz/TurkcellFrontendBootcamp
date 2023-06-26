import PropTypes from "prop-types";
import { CustomButton } from "./ButtonStyle";
const Button = ({
  padding,
  buttonText,
  color,
  backgroundcolor,
  icon,
  iconPosition,
  fontSize,
  type,
  disabled,
  className,
  onClick,
}) => {
  return (
    <CustomButton
      className={`d-flex justify-content-center gap-2 align-items-center ${className}`}
      padding={padding}
      color={color}
      backgroundcolor={backgroundcolor}
      fontSize={fontSize}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {iconPosition === "left" && icon}
      {buttonText}
      {iconPosition === "right" && icon}
    </CustomButton>
  );
};

Button.propTypes = {
  padding: PropTypes.string,
  buttonText: PropTypes.string,
  color: PropTypes.string,
  backgroundcolor: PropTypes.string,
  icon: PropTypes.element,
  iconPosition: PropTypes.string,
  fontSize: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
