/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import Header from './Header';
import Footer from './Footer';
import Form from './shared/Form';
import Input from './shared/Input';
import saxophoneImage from '../images/saxophone_image.png';
import Select from './shared/Select';
import { emailJsParams, donationFormParams } from '../helpers/constant/apiConstant';
import sendEmail from '../utils/emailJs';
import { donation } from '../helpers/constant/selectOptions';

const redirectToPayPal = () => {
  window.location.href = 'https://www.paypal.com/donate/?hosted_button_id=CC89J4NN3W25Q';
};

export default function Dontation() {
  const {
    handleSubmit, register, setValue, formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {
      firstName, lastName, email, donationType, organisation, message,
    } = data;
    const { formTemplate } = emailJsParams;
    sendEmail(
      formTemplate,
      donationFormParams(firstName, lastName, email, donationType, organisation, message),
    );
    redirectToPayPal();
  };

  return (
    <div>
      <Header />
      <section className="donation">
        <div className="donation-container">
          <h1 className="donation__title">DONATE NOW</h1>
          <p className="form__subtitle">Support Cultural Integration</p>
          <div className="donation__form">
            <Form
              formClass="form"
              btnClass="button button_dark button_grid-sized"
              btnName="Donate"
              handleSubmit={handleSubmit(onSubmit)}
              btnClick={handleSubmit(onSubmit)}
            >
              <Input
                name="firstName"
                label="First Name"
                placeholder="John"
                register={register}
                error={errors.firstName}
                isRequired
              />
              <Input
                register={register}
                label="Last Name"
                name="lastName"
                placeholder="Smith"
                error={errors.lastName}
                isRequired
              />
              <Input
                register={register}
                label="Email"
                name="email"
                placeholder="example@gmail.com"
                error={errors.email}
                isRequired
              />
              <Select
                options={donation}
                setValue={setValue}
                register={register}
                label="Donate in the name of:"
                name="donationType"
                defaultValue="Donate in the name of:"
              />
              <Input
                register={register}
                label="Name of the organisation:"
                name="organisation"
                placeholder="Example:"
              />
              <Input
                register={register}
                label="How did you find out about us"
                name="message"
                placeholder="Example: Social media"

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
