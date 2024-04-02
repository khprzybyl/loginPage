import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import showIcon from '../assets/svg/show.svg';
import hideIcon from '../assets/svg/hide.svg';

interface Values {
  email: string;
  password: string;
}

type FormikOnSubmit = (
  values: Values,
  formikHelpers: FormikHelpers<Values>
) => void;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});

export const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit: FormikOnSubmit = (values, { setSubmitting }) => {
    localStorage.setItem('email', values.email);
    setSubmitting(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-80 px-5 sm:px-8 py-10 bg-slate-50 rounded-lg shadow-lg">
      <p className=" flex justify-center text-xl leading-8 font-bold mb-7">
        LOGIN
      </p>
      <Formik<Values>
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty, errors, touched }) => (
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col text-sm">
              <label
                htmlFor="email"
                className="block font-medium text-gray-900"
              >
                Email
              </label>
              <div className="relative mt-1 rounded-md">
                <Field
                  id="email"
                  name="email"
                  placeholder="E-mail address"
                  type="email"
                  className={`block w-full rounded-md border-0 py-3 px-5 text-gray-900 ring-1 ring-inset ${
                    errors.email && touched.email
                      ? 'ring-red-500 hover:ring-red-500 focus:ring-red-500'
                      : 'ring-gray-300 hover:ring-yellow-400 focus:ring-yellow-400'
                  } placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset leading-6 shadow-sm`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-400 text-xs leading-6 "
                />
              </div>
            </div>
            <div className="flex flex-col text-sm">
              <label
                htmlFor="password"
                className="block font-medium text-gray-900"
              >
                Password
              </label>
              <div className="relative mt-1 rounded-md">
                <Field
                  placeholder="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  className={`block w-full rounded-md border-0 py-3 px-5 text-gray-900 ring-1 ring-inset pr-10 ${
                    errors.password && touched.password
                      ? 'ring-red-500 hover:ring-red-500 focus:ring-red-500'
                      : 'ring-gray-300 hover:ring-yellow-400 focus:ring-yellow-400'
                  } placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset leading-6 shadow-sm`}
                />
                <img
                  src={showPassword ? hideIcon : showIcon}
                  alt="Toggle visibility"
                  className="pointer-events-auto absolute text-gray-500 my-auto inset-y-0 right-0 mr-3 cursor-pointer h-5 w-5"
                  onClick={togglePasswordVisibility}
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-400 text-xs leading-6 "
              />
            </div>
            <p className="text-sm color">Forgot password?</p>
            <button
              type="submit"
              disabled={isSubmitting || !isValid || !dirty}
              className="enabled:hover:-translate-y-0.5 transition motion-reduce:enabled:hover:translate-y-0 motion-reduce:transition-none bg-yellow-400 rounded-lg py-3 mt-4 font-medium shadow-sm disabled:opacity-50 disabled:bg-slate-400 "
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
