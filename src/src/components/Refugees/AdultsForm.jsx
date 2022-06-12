import React from 'react';
import { useForm } from 'react-hook-form';
import Form from '../shared/Form';
import Input from '../shared/Input';

export default function AdultsForm() {
  const {
    handleSubmit, register, formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h2 className="form__title form__title_light">Questionnaire for adults</h2>
      <Form
        formClass="form form_large form_light"
        btnClass="button button_light button_grid-sized"
        btnName="Submit"
        handleSubmit={handleSubmit(onSubmit)}
      >
        <Input
          register={register}
          name="name"
          label="Your first and last name*"
          error={errors.name}
          isRequired
        />
        <Input
          register={register}
          name="country"
          label="What country and city are you from?"
        />
        <Input
          register={register}
          name="profession"
          label="Your profession"
        />
        <Input
          register={register}
          name="instrument"
          label="Your instrument(s)"
        />
        <Input
          register={register}
          name="aid"
          label="What kind of aid whould you like to apply for?"
        />
        <Input
          register={register}
          name="part"
          label="Would you like to take part in our concerts/projects?"
        />
        <Input
          register={register}
          className="input__label input__label_large"
          name="offer"
          label="Would you like to offer your services (teaching, organising projects)?"
        />
        <Input
          register={register}
          name="adress"
          label="Your address*"
          error={errors.adress}
          isRequired
        />
        <Input
          register={register}
          name="phone"
          label="Your phone number*"
          error={errors.phone}
          isRequired
        />
        <Input
          register={register}
          className="input__label input__label_large"
          name="message"
          label="Additional questions or coments"
          labelClass="input__label input__label_large"
        />
      </Form>
    </div>
  );
}
