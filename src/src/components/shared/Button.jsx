import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { btnClass, btnName } = props;
  return (
    <button className={btnClass} type="button">{btnName}</button>
  );
}

Button.propTypes = {
  btnClass: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
};

export default Button;
