/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import Header from './Header';
import Footer from './Footer';
import Form from './shared/Form';
import Input from './shared/Input';
import saxophoneImage from '../images/saxophone_image.png';
import required from '../helpers/constant/errorMessages';
import Select from './shared/Select';

// const redirectToPayPal = () => {
// window.location.href = 'https://www.paypal.com/donate/?hosted_button_id=CC89J4NN3W25Q';
// console.log('clicked');
// };

export default function Dontation() {
  const selectOptions = ['oleg', 'john', 'mamba'];
  const {
    handleSubmit, register, setValue, formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
                labelClass="input__label"
                placeholder="John"
                errorMessage={required.firstName}
                register={register}
                error={errors.firstName}
                isRequired
              />
              <Input
                register={register}
                label="Last Name"
                name="lastName"
                placeholder="Smith"
                labelClass="input__label"
                errorMessage={required.lastName}
                error={errors.lastName}
                isRequired
              />
              <Input
                register={register}
                label="Email"
                name="email"
                placeholder="example@gmail.com"
                labelClass="input__label"
                errorMessage={required.email}
                error={errors.email}
                isRequired
              />
              <Select
                options={selectOptions}
                setValue={setValue}
                register={register}
                name="select"
                defaultValue="Select Option"
              />
              <Input
                register={register}
                label="Name of the organisation:"
                name="organisation"
                placeholder="Example:"
                labelClass="input__label"
              />
              <Input
                register={register}
                label="How did you find out about us"
                name="message"
                placeholder="Example: Social media"
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
