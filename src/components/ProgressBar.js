import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div style={{ 
      width: '100%', 
      minWidth: '250px',
      backgroundColor: 'var(--black_color)',
      border: '1px solid var(--green_color)',
      boxShadow: "-4px -4px 10px rgba(61, 207, 182, 0.5),4px 4px 10px rgba(0, 0, 0, 0.8)",
      borderRadius: '4px',
      overflow: 'hidden',
      height: '10px'
    }}>
      <div style={{
        width: `${percentage}%`,
        height: '10px',
        backgroundColor: 'var(--green_color)',
        transition: 'width 0.3s ease-in-out',
        borderRadius: '4px'
      }}>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default ProgressBar;