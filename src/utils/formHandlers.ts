import { FormikHelpers } from 'formik';
import { messages } from '../constants/messages';
import { toast } from 'react-toastify';

interface Values {
  email: string;
  password: string;
}

type FormikOnSubmit = (
  values: Values,
  formikHelpers: FormikHelpers<Values>
) => void;

export const handleSubmit: FormikOnSubmit = (values, { setSubmitting }) => {
  localStorage.setItem('email', values.email);
  setSubmitting(false);
  toast.success(messages.LoginSucces);
};
