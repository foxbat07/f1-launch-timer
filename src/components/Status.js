import React from 'react';
import PropTypes from 'prop-types';

const primaryFormatter = (value) => (
  <>
    {(typeof value === 'number') ? `${value} ms` : `${value}`}
  </>
);

const secondaryFormatter = (value) => (
  <>
    {(value !== 1000000.0) ? `BEST TIME: ${value} ms` : 'SET FASTEST LAUNCH TIME'}
  </>
);


const Status  = ({primary, secondary}) => (
  <div>
    <h3>
      {primaryFormatter(primary)}
    </h3>
    <h6>
      {secondaryFormatter(secondary)}
    </h6>
  </div>
);

Status.propTypes = {
    primary: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    secondary: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
};

export default Status;