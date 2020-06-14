import React from 'react';
import PropTypes from 'prop-types';

const Control = ({mode, handleClick}) => {
  return (
    <button
      className={`button b-${mode.toLowerCase()}`}
      onClick={handleClick}
    >
      {mode}
    </button>
  );
}

Control.propTypes = {
  status: PropTypes.string,
};

export default Control;