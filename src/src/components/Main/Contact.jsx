import React from 'react';
import { useForm } from 'react-hook-form';
import Form from '../shared/Form';
import Input from '../shared/Input';
import contactImage from '../../images/contact_image.png';
import Popup from '../shared/Popup';
import usePopupState from '../../hooks/usePopupState';
import sendEmail from '../../utils/emailJs';
import { contactFormParams, emailJsParams } from '../../helpers/constant/apiConstant';

export default function Contact() {
  const {
    handleSubmit, register, formState: { errors },
  } = useForm();

  const { isOpen, changePopupStatus } = usePopupState();
  const onSubmit = (data) => {
    changePopupStatus();
    const { formTemplate } = emailJsParams;
    const {
      firstName, lastName, email, message, subject,
    } = data;
    sendEmail(formTemplate, contactFormParams(firstName, lastName, email, message, subject));
  };

  return (
    <section id="contact-form" className="contact">
      <h2 className="contact__title">Contact us</h2>
      <Form
        handleSubmit={handleSubmit(onSubmit)}
        formClass="form form_large form_light"
        btnClass="button button_light button_grid-sized"
        btnName="Submit"
      >
        <Input
          name="firstName"
          label="First Name"
          placeholder="Your first name"
          error={errors.firstName}
          register={register}
          isRequired
        />
        <Input
          name="lastName"
          placeholder="Your last name"
          label="Second name"
          error={errors.lastName}
          register={register}
          isRequired
        />
        <Input
          name="email"
          placeholder="Your email"
          label="Email"
          error={errors.email}
          register={register}
          isRequired
        />
        <Input
          register={register}
          name="subject"
          placeholder="Example: musical help needed"
          label="Subject"
        />
        <Input
          register={register}
          className="input__label input__label_large"
          name="message"
          placeholder="Write to us and we will get back to you as soon as possible"
          label="Message"
        />
      </Form>
      <img className="contact__image" alt="notes" src={contactImage} />
      <Popup onClose={changePopupStatus} isOpen={isOpen} />
    </section>
  );
}
