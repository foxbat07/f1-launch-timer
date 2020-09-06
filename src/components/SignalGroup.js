import React from 'react';
import PropTypes from 'prop-types';
import Signal from  './Signal';

const SignalGroup  = ({position}) => (
  <div className="signal-group">
    {[...Array(position)].map((e, i) => <Signal key={i} status="on" />)}
    {[...Array(5 - position)].map((e, i) => <Signal key={i} status="off" />)}
  </div>
);

SignalGroup.propTypes = {
  status: PropTypes.number,
};

export default SignalGroup;