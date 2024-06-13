import React from "react";
import PropTypes from "prop-types";

const Button = ({
  width,
  border,
  backgroundColor,
  textColor,
  borderRadius,
  onClick,
  children,
  padding,
  className,
  cursor,
  type,
}) => {
  const buttonStyle = {
    width,
    border,
    backgroundColor,
    color: textColor,
    borderRadius,
    padding,
    cursor,
  };

  return (
    <button
      style={buttonStyle}
      type={type}
      onClick={onClick}
      className={`${className} lg:text-lg w-[160px] h-[45px] md:text-base text-xs font-semibold  bg-[#1b2464]`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  border: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  padding: PropTypes.string,
};

Button.defaultProps = {
  border: "1px solid #ffff",
  backgroundColor: "#2a3893",
  textColor: "#ffffff",
  borderRadius: "6px",
  height: "100%",
  // padding: '6px 20px',
  width: "",
};

export default Button;
// 131a53