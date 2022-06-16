/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

// eslint-disable

export default function Form(props) {
  const {
    children, btnName, btnClass, formClass, btnClick, handleSubmit,
  } = props;
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} type="submit" className={formClass}>
        {children}
        <Button btnClick={btnClick} btnClass={btnClass} btnName={btnName} />
      </form>
    </div>
  );
}

Form.defaultProps = {
  children: null,
  btnClick: null,
};

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  btnName: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  formClass: PropTypes.string.isRequired,
  btnClick: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
};
