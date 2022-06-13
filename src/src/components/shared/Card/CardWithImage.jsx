import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CardWithImage(props) {
  const [textVisible, setTextVisible] = useState(true);

  const textClass = !textVisible ? 'card__text' : 'card__text card__text_hidden';

  function handleClick() {
    setTextVisible(!textVisible);
  }

  const buttonValue = !textVisible ? 'Close  ↑' : 'Read more  ↓';

  const {
    title, subtitle, image, text,
  } = props;

  return (
    <div onClick={handleClick} role="presentation" className="card card_image">
      <img className="card__image" alt="someAlt" src={image} />
      <h4 className="card__title">{title}</h4>
      <p className="card__subtitle">{subtitle}</p>
      <p className={textClass}>{text}</p>
      <button onClick={handleClick} type="button" className="card__button">
        {buttonValue}
      </button>
    </div>
  );
}

CardWithImage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
