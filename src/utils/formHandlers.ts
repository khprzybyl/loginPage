import { FormikHelpers } from 'formik';
import { I18n } from '../constants/i18n';
import { toast } from 'react-toastify';

interface Values {
  email: string;
  password: string;
}

type FormikOnSubmit = (
  values: Values,
  formikHelpers: FormikHelpers<Values>
) => void;

export const handleSubmit: FormikOnSubmit = (
  values,
  { setSubmitting, resetForm }
) => {
  localStorage.setItem('email', values.email);
  toast.success(I18n.LoginSucces);
  resetForm();
  setSubmitting(false);
};
