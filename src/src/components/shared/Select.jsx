/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Select(props) {
  const {
    name, defaultValue, register, className, setValue, options,
  } = props;

  const [isOpened, setIsOpened] = useState(false);
  const [selectValue, setSelectValue] = useState(defaultValue);

  const openDropDown = () => {
    setIsOpened(!isOpened);
  };

  const selectClass = isOpened ? 'select__options' : 'select__options select__options_hidden';

  return (
    <div name={name} role="presentation" onClick={openDropDown} className={className}>
      <div role="presentation" className="select-container">
        <span className="select__button" type="button">&#8964;</span>
        <p className="select__title">{selectValue}</p>
        <ul {...register(name)} {...setValue(name, selectValue)} className={selectClass}>
          {options.map((item) => (
            <li key={Math.random()} className="select__option" role="presentation" onClick={() => setSelectValue(item)}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Select.defaultProps = {
  children: null,
  className: 'select',
  options: [],
};

Select.propTypes = {
  setValue: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};
