import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/progressbar.css";
const ProgressBar = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="percentage__container">
      <div className="percentage" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default ProgressBar;
