import React from 'react';
// import Button from './Button';

export default function Popup() {
  return (
    <div className="popup">
      <div className="card card_popup">
        <h3>Thank you</h3>
        <p className="card__text">
          Your message has been sent.
          We will get back to you soon!
        </p>
        {/* <Button btnClass="button button_dark" btnName="Close" /> */}
      </div>
    </div>
  );
}
