import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { btnClass, btnName, btnClick } = props;
  return (
    <button onClick={btnClick} className={btnClass} type="submit">{btnName}</button>
  );
}

Button.defaultProps = {
  btnClick: null,
};

Button.propTypes = {
  btnClass: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
  btnClick: PropTypes.func,
};

export default Button;
