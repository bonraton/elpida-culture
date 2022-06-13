import React from 'react';
import { useForm } from 'react-hook-form';
import Header from './Header';
import Footer from './Footer';
import guitarImage from '../images/guitar_image.png';
import Form from './shared/Form';
import Input from './shared/Input';
import Select from './shared/Select';
import sendEmail from '../utils/emailJs';
import { joinFormParams, emailJsParams } from '../helpers/constant/apiConstant';

export default function Membership() {
  const {
    handleSubmit, register, setValue, formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {
      firstName, lastName, email, phone, part,
    } = data;
    const { formTemplate } = emailJsParams;
    sendEmail(formTemplate, joinFormParams(firstName, lastName, email, phone, part));
  };

  const joinFormOptions = ['A member', 'Part of a comitee'];

  return (
    <div>
      <Header />
      <section className="membership">
        <h1 className="membership__title">MEMBERSHIP</h1>
        <p className="membership__subtitle">
          We offer options for anyone who is involved in the music industry.
        </p>
        <div className="article">
          <h2 className="article__title">Become a member</h2>
          <p className="article__text">
            In becoming a member, you will receive our newsletter with updates on the
            association&#39;s activities. You also agree to offer proactive support as per the
            needs of the association (lease of instruments, practice facilities, music lessons
            free-of-charge or any other kind of support), to engage to participate in publicity
            and social media campaigns promoting events of the association, to have the right
            to submit project suggestions and ideas to the committee. Any member can apply to
            be a part of the committee.
          </p>
        </div>
        <div className="article">
          <h2 className="article__title">Become part of a committee</h2>
          <p className="article__text">
            As part of the committee, you agree to engage and partake in the organisational
            aspects of the association&#39;s activities and events, to participate in general
            meetings and in the election of new committee members. Participation in the
            committee is finalised with a signed agreement between the member and the
            association.
          </p>
        </div>
        <img className="membership__image" alt="guitar" src={guitarImage} />
      </section>
      <div className="membership__form">
        <h2 className="form__title">Join us</h2>
        <p className="form__subtitle">
          Here you can fill in an application form to join our community.
        </p>
        <Form
          formClass="form form_dark form_large"
          btnClass="button button_dark button_grid-sized"
          btnName="Submit"
          handleSubmit={handleSubmit(onSubmit)}
        >
          <Input
            register={register}
            label="First Name"
            name="firstName"
            placeholder="John"
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
          <Input
            register={register}
            label="Phone Number"
            name="phone"
            placeholder="555-555-555"
          />
          <Select
            defaultValue="I want to be a part of the organisation"
            name="part"
            register={register}
            className="select select_large"
            title="Select your status"
            setValue={setValue}
            options={joinFormOptions}
          />
        </Form>
      </div>
      <Footer />
    </div>
  );
}
