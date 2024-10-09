import React from "react";
import ChevronRightIcon from "../Icons/ChevronRightIcon";

const Button = ({ children, bgColor, padding, margin, height, role }) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: bgColor,
        padding: padding,
        margin: margin,
        height: height,
      }}
      className="flex items-center text-white rounded-md transition duration-300 hover:bg-opacity-80"
      role={role}
    >
      <span className="flex-1">{children}</span>
      <ChevronRightIcon />
    </button>
  );
};

export default Button;
