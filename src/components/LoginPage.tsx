import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import showIcon from '../assets/svg/show.svg';
import hideIcon from '../assets/svg/hide.svg';
import { ToastContainer } from 'react-toastify';
import { validationSchema } from '../utils/validationSchema';
import { handleSubmit } from '../utils/formHandlers';
import { FormInput } from './FormInput';
import { I18n } from '../constants/i18n';

export const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const visibilityIcon = (
    <img
      src={showPassword ? hideIcon : showIcon}
      alt={showPassword ? 'Hide password' : 'Show password'}
      className="pointer-events-auto absolute text-gray-500 my-auto inset-y-0 right-0 mr-3 cursor-pointer h-5 w-5"
      onClick={togglePasswordVisibility}
    />
  );

  return (
    <div className="w-80 px-5 sm:px-8 py-10 bg-slate-50 rounded-lg shadow-lg">
      <p className=" flex justify-center text-xl leading-8 font-bold mb-7">
        LOGIN
      </p>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="flex flex-col gap-4">
            <FormInput label="Email" name="email" />
            <FormInput
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              renderOptional={visibilityIcon}
            />
            <p className="text-sm color">Forgot password?</p>
            <button
              type="submit"
              disabled={isSubmitting || !isValid || !dirty}
              className="enabled:hover:-translate-y-0.5 transition motion-reduce:enabled:hover:translate-y-0 motion-reduce:transition-none bg-yellow-400 rounded-lg py-3 mt-4 font-medium shadow-sm disabled:opacity-50 disabled:bg-slate-400 "
            >
              {I18n.ButtonText}
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};
