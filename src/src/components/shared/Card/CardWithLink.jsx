import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CardWithLink(props) {
  const { cardTitle, cardText, link } = props;
  return (
    <Link className="link" to={link}>
      <div className="card">
        <h3 className="card__title">{cardTitle}</h3>
        <p className="card__text">{cardText}</p>
        <span className="card__span">&#x27F6;</span>
      </div>
    </Link>
  );
}

CardWithLink.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
