import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './shared/Form';
import Input from './shared/Input';
import saxophoneImage from '../images/saxophone_image.png';
import Select from './shared/Select';

export default function Dontation() {
  return (
    <div>
      <Header />
      <section className="donation">
        <div className="donation-container">
          <h1 className="donation__title">DONATE NOW</h1>
          <p className="form__subtitle">Support Cultural Integration</p>
          <div className="donation__form">
            <Form formClass="form" btnClass="button button_dark button_grid-sized" btnName="Donate">
              <Input
                label="First Name"
                name="first-name"
                placeholder="John"
                className="input"
                labelClass="input__label"
              />
              <Input
                label="Last Name"
                name="last-name"
                placeholder="Smith"
                className="input"
                labelClass="input__label"
              />
              <Input
                label="Email"
                name="email"
                placeholder="example@gmail.com"
                className="input"
                labelClass="input__label"
              />
              <Select className="select" title="My name" />
              {/* <Input
                label="Donate in the name of:"
                name="email"
                placeholder="example@gmail.com"
                className="input"
                labelClass="input__label"
              /> */}
              <Input
                label="Name of the organisation:"
                name="organisation"
                placeholder="Example:"
                className="input"
                labelClass="input__label"
              />
              <Input
                label="How did you find out about us"
                name="message"
                placeholder="Example: Social media"
                className="input"
                labelClass="input__label"
              />
            </Form>
          </div>
        </div>
        <img className="donation__image" alt="saxophone" src={saxophoneImage} />
      </section>
      <Footer />
    </div>
  );
}
