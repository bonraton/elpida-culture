import React, { useState } from 'react';

export default function Select() {
  const [isOpened, setIsOpened] = useState(false);
  const [option, setOption] = useState('Select Your Option');

  function handleClick() {
    setIsOpened(!isOpened);
  }

  function choseOption(e) {
    setOption(e.target.innerHTML);
    setIsOpened(!isOpened);
  }

  const options = ['first Option', 'second Option', 'third Option'];
  const selectClass = isOpened ? 'select__options select__options_hidden' : 'select__options';

  return (
    <div className="select">
      <div className="select-container">
        <button onClick={handleClick} className="select__button" type="button">&#8964;</button>
        <p className="select__title">{option}</p>
        <ul className={selectClass}>
          {/* <div className="select__options-container"> */}
          {options.map((item) => (
            <li role="presentation" onClick={choseOption} className="select__option">{item}</li>
          ))}
          {/* </div> */}
        </ul>
      </div>

    </div>
  );
}
