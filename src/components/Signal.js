import React from 'react';
import PropTypes from 'prop-types';

import Light from  './Light';

const Signal  = ({status}) => (
  <div>
    <Light color="off" />
    <Light color="off" />
    <Light color={status} />
    <Light color={status} />
  </div>
);

Signal.propTypes = {
  status: PropTypes.string,
};

export default Signal;