import React from 'react';
import PropTypes from 'prop-types';

const Light  = ({color}) => (<div className={`light-shape light-${color}`} />);

Light.propTypes = {
  color: PropTypes.string,
}

export default Light;