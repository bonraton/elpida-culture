import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const {
    className, labelClass, name, placeholder, label,
  } = props;
  return (
    <label htmlFor={name} className={labelClass}>
      <span className="input__error">ERORR</span>
      {label}
      <input name={name} className={className} placeholder={placeholder} autoComplete="off" />
    </label>
  );
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelClass: PropTypes.string.isRequired,
};
