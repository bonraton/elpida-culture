import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Form(props) {
  const {
    children, btnName, btnClass, formClass,
  } = props;
  return (
    <div className="form-container">
      <form type="submit" className={formClass}>
        {children}
        <Button btnClass={btnClass} btnName={btnName} />
      </form>
    </div>
  );
}

Form.defaultProps = {
  children: null,
};

Form.propTypes = {
  children: PropTypes.element,
  btnName: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  formClass: PropTypes.string.isRequired,

};