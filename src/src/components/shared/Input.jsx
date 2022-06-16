/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const {
    className, name, placeholder, label,
    register, error, isRequired,
    // errorMessage,
  } = props;

  const errorClass = error ? 'input_error' : '';
  const spanError = error ? 'This field is required' : '';

  return (
    <label htmlFor={name} className={className}>
      <span className="input__error">{spanError}</span>
      {label}
      <input
        {...register(name, { required: isRequired })}
        name={name}
        className={`input ${errorClass}`}
        placeholder={placeholder}
        autoComplete="off"
      />
    </label>
  );
}

Input.defaultProps = {
  isRequired: false,
  error: null,
  placeholder: '',
  className: 'input__label',
};

Input.propTypes = {
  isRequired: PropTypes.bool,
  error: PropTypes.object,
  register: PropTypes.func.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
};
