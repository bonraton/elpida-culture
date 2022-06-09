import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Select(props) {
  const { className, title } = props;

  const [isOpened, setIsOpened] = useState(true);
  const [option, setOption] = useState(title);

  function handleClick() {
    setIsOpened(!isOpened);
  }

  const options = ['first Option', 'second Option', 'third Option'];
  const selectClass = isOpened ? 'select__options select__options_hidden' : 'select__options';

  return (
    <div className={className}>
      <div role="presentation" onClick={handleClick} className="select-container">
        <span className="select__button" type="button">&#8964;</span>
        <p className="select__title">{option}</p>
        <ul className={selectClass}>
          {options.map((item) => (
            <li role="presentation" onClick={() => setOption(item)} className="select__option">{item}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}
Select.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
