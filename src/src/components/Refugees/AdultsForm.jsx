import React from 'react';
import Form from '../shared/Form';
import Input from '../shared/Input';

export default function AdultsForm() {
  return (
    <div>
      <h2 className="form__title form__title_light">Questionnaire for adults</h2>
      <Form
        formClass="form form_large form_light"
        btnClass="button button_light button_grid-sized"
        btnName="Submit"
      >
        <Input
          className="input"
          name="name"
          label="Your first and last name*"
          labelClass="input__label"
        />
        <Input
          className="input"
          name="country"
          label="What country and city are you from?"
          labelClass="input__label"
        />
        <Input
          className="input"
          name="profession"
          label="Your profession"
          labelClass="input__label"
        />
        <Input
          className="input"
          name="instrument"
          label="Your instrument(s)"
          labelClass="input__label"
        />
        <Input
          className="input"
          name="aid"
          label="What kind of aid whould you like to apply for?"
          labelClass="input__label"
        />
        <Input
          className="input"
          name="part"
          label="Would you like to take part in our concerts/projects?"
          labelClass="input__label"
        />
        <Input
          className="input"
          name="offer"
          label="Would you like to offer your services (teaching, organising projects)?"
          labelClass="input__label input__label_large"
        />
        <Input
          className="input"
          name="adress"
          label="Your address*"
          labelClass="input__label"
        />
        <Input
          className="input"
          name="phone"
          label="Your phone number*"
          labelClass="input__label"
        />
        <Input
          className="input"
          name="message"
          label="Additional questions or coments"
          labelClass="input__label input__label_large"
        />
      </Form>
    </div>
  );
}
