export const emailJsParams = {
  serviceId: 'service_2yeuycm',
  publicKey: '5KzlMD3g9UezcAVjw',
  formTemplate: 'template_ihdgfji',
  questionFormTemplate: 'template_l8mzadh',
};

export function contactFormParams(firstName, lastName, email, subject, message) {
  return {
    firstName: `firstName: ${firstName}`,
    lastName: `lastName: ${lastName}`,
    email: `email: ${email}`,
    subject: `subject: ${subject}`,
    message: `message: ${message}`,
    letterSubject: 'contact request',
  };
}

export function joinFormParams(firstName, lastName, email, phone, part) {
  return {
    firstName: `firstName: ${firstName}`,
    lastName: `lastName: ${lastName}`,
    email: `email: ${email}`,
    phone: `phone: ${phone}`,
    part: `Part of the organisation: ${part}`,
    letterSubject: 'join request',
  };
}

export function donationFormParams(
  firstName,
  lastName,
  email,
  donationType,
  organisation,
  message,
) {
  return {
    firstName: `firstName: ${firstName}`,
    lastName: `lastName: ${lastName}`,
    email: `email: ${email}`,
    donationType: `Donate in the name of: ${donationType}`,
    organiation: `Name of the organisation ${organisation}`,
    message: `Part of the organisation: ${message}`,
    letterSubject: 'donation',
  };
}

export function childrenQuestionnareFormParams(
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
  phone,
  adress,
  message,
) {
  return {
    name: `First and last name: ${name}`,
    country: `Country and city: ${country}`,
    parentsNames: `parents first and last names: ${parentsNames}`,
    age: `age: ${age}`,
    instrument: `Musical instrument: ${instrument}`,
    education: `How long have you been studying music?: ${education}`,
    access: `Do you have access to an instrument for lessons/practice?: ${access}`,
    teacher: `Do you need a teacher? ${teacher}`,
    link: `Link to a recording: ${link}`,
    part: `Would you like to take part in our concerts/projects?: ${part}`,
    adress: `Adress: ${adress}`,
    phone: `Phone: ${phone}`,
    message: `Additional questions or coments: ${message}`,
    letterSubject: 'children questionnaire',
  };
}

export function adultQuestionnareFormParams(
  name,
  country,
  profession,
  instrument,
  aid,
  part,
  offer,
  adress,
  phone,
  message,
) {
  return {
    name: `First and last name: ${name}`,
    country: `Country and city: ${country}`,
    profession: `profession: ${profession}`,
    instrument: `Musical instrument: ${instrument}`,
    aid: `What kind of aid whould you like to apply for?: ${aid}`,
    part: `Would you like to take part in our concerts/projects?: ${part}`,
    offer: `Would you like to offer your services: ${offer}`,
    adress: `Adress: ${adress}`,
    phone: `Phone: ${phone}`,
    message: `Additional questions or coments: ${message}`,
    letterSubject: 'children questionnaire',
  };
}
