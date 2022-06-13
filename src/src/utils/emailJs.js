import emailjs from 'emailjs-com';
import { emailJsParams } from '../helpers/constant/apiConstant';

const { serviceId, publicKey } = emailJsParams;

export default function sendEmail(templateId, templateParams) {
  emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((result) => result);
}
