import React from 'react';
import Form from '../shared/Form';
import Input from '../shared/Input';
import contactImage from '../../images/contact_image.png';

export default function Contact() {
  return (
    <section id="contact-form" className="contact">
      <h2 className="contact__title">Contact us</h2>
      <Form
        formClass="form form_large form_light"
        btnClass="button button_light button_grid-sized"
        btnName="Submit"
      >
        <Input labelClass="input__label" name="first-name" className="input input_error" placeholder="Your first name" label="First Name" />
        <Input labelClass="input__label" name="last-name" className="input" placeholder="Your last name" label="Second name" />
        <Input labelClass="input__label" name="email" className="input" placeholder="Your email" label="Email" />
        <Input labelClass="input__label" name="subject" className="input" placeholder="Example: musical help needed" label="Subject" />
        <Input labelClass="input__label input__label_large" name="message" className="input input_large" placeholder="Write to us and we will get back to you as soon as possible" label="Message" />
      </Form>
      <img className="contact__image" alt="notes" src={contactImage} />
    </section>
  );
}
