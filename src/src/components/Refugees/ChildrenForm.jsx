import React from 'react';
import Form from '../shared/Form';
import Input from '../shared/Input';

export default function ChildrenForm() {
  return (
    <div>
      <h2 className="form__title">Questionnaire for children</h2>
      <Form
        formClass="form form_large form_dark"
        btnClass="button button_dark button_grid-sized"
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
          name="parents-names"
          label="Parents' first and last names*"
          labelClass="input__label"
        />
        <Input
          className="input"
          name="age"
          label="Your age"
          labelClass="input__label"
        />
        <Input
          className="input"
          name="instrument"
          label="Musical instrument"
          labelClass="input__label"
        />
        <Input
          className="input"
          name="education"
          label="How long have you been studying music?"
          labelClass="input__label"
        />
        <Input
          className="input"
          name="access"
          label="Do you have access to an instrument for lessons/practice?"
          labelClass="input__label"
        />
        <Input
          className="input"
          name="teacher"
          label="Do you need a teacher?"
          labelClass="input__label"
        />
        <Input
          className="input"
          name="link"
          label="Link to a recording of a performance (if available)"
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
