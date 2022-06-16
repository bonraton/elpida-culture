import React from 'react';
import { useForm } from 'react-hook-form';
import Form from '../shared/Form';
import Input from '../shared/Input';
import sendEmail from '../../utils/emailJs';
import { emailJsParams, childrenQuestionnareFormParams } from '../../helpers/constant/apiConstant';
import usePopupState from '../../hooks/usePopupState';
import Popup from '../shared/Popup';

export default function ChildrenForm() {
  const { isOpen, changePopupStatus } = usePopupState();

  const {
    handleSubmit, register, formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {
      name,
      country,
      parentsNames,
      age,
      instrument,
      education,
      access,
      teacher,
      link,
      part,
      adress,
      phone,
      message,
    } = data;
    const { questionFormTemplate } = emailJsParams;
    sendEmail(
      questionFormTemplate,
      childrenQuestionnareFormParams(
        name,
        country,
        parentsNames,
        age,
        instrument,
        education,
        access,
        teacher,
        link,
        part,
        adress,
        phone,
        message,
      ),
    );
    changePopupStatus();
  };

  return (
    <div>
      <h2 className="form__title">Questionnaire for children</h2>
      <Form
        formClass="form form_large form_dark"
        btnClass="button button_dark button_grid-sized"
        btnName="Submit"
        handleSubmit={handleSubmit(onSubmit)}
      >
        <Input
          register={register}
          name="name"
          label="Your first and last name"
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
          name="parentsNames"
          label="Parents' first and last names"
          error={errors.parentsNames}
          isRequired
        />
        <Input
          register={register}
          name="age"
          label="Your age"
        />
        <Input
          register={register}
          name="instrument"
          label="Musical instrument"
        />
        <Input
          register={register}
          name="education"
          label="How long have you been studying music?"
        />
        <Input
          register={register}
          name="access"
          label="Do you have access to an instrument for lessons/practice?"
        />
        <Input
          register={register}
          name="teacher"
          label="Do you need a teacher?"
        />
        <Input
          register={register}
          name="link"
          label="Link to a recording of a performance (if available)"
        />
        <Input
          register={register}
          name="part"
          label="Would you like to take part in our concerts/projects?"
        />
        <Input
          register={register}
          name="adress"
          label="Your address"
          error={errors.adress}
          isRequired
        />
        <Input
          register={register}
          name="phone"
          label="Your phone number"
          error={errors.phone}
          isRequired
        />
        <Input
          className="input__label input__label_large"
          register={register}
          name="message"
          label="Additional questions or coments"
          labelClass="input__label input__label_large"
        />
      </Form>
      <Popup onClose={changePopupStatus} isOpen={isOpen} />
    </div>
  );
}
