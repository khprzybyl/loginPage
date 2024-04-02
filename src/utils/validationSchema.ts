import * as Yup from 'yup';
import { messages } from '../constants/messages';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(messages.EmailInvalid)
    .required(messages.EmailRequired),
  password: Yup.string()
    .min(8, messages.PasswordMinLength)
    .required(messages.PasswordRequired),
});
