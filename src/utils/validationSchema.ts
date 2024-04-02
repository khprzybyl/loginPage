import * as Yup from 'yup';
import { I18n } from '../constants/i18n';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email(I18n.EmailInvalid).required(I18n.EmailRequired),
  password: Yup.string()
    .min(8, I18n.PasswordMinLength)
    .required(I18n.PasswordRequired),
});
