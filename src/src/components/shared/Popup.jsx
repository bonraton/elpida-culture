import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Popup(props) {
  const { isOpen, onClose } = props;

  const popupClass = isOpen ? 'popup' : 'popup popup_hidden';
  return (
    <div onClick={onClose} role="presentation" className={popupClass}>
      <div className="card card_popup">
        <h3>Thank you</h3>
        <p role="presentation" className="card__text card__text_popup">
          Your message has been sent.
          We will get back to you soon!
        </p>
        <Button btnClass="button button_dark" btnName="Close" />
      </div>
    </div>
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
