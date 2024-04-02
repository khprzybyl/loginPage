import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface Values {
  email: string;
  password: string;
}

export const LoginPage: React.FC = () => {
  return (
    <div className="p-10 bg-slate-50 rounded-lg shadow-lg">
      <p className=" flex justify-center text-xl leading-8 font-bold mb-7">
        LOGIN
      </p>
      <Formik<Values>
        initialValues={{ email: '', password: '' }}
        //TODO: Create validataiton and submit function
        validate={() => console.log('validate')}
        onSubmit={() => console.log('submit')}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <div className="relative mt-1 rounded-md">
                <Field
                  id="email"
                  name="email"
                  placeholder="E-mail address"
                  type="email"
                  className="block w-full rounded-md border-0 py-3 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-sm"
                />
                <ErrorMessage name="email" component="div" />
              </div>
            </div>
            <div className="flex flex-col text-sm">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <div className="relative mt-1 rounded-md ">
                <Field
                  placeholder="Password"
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 py-3 px-5 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-sm"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 sm:text-sm">icon</span>
                </div>
                <ErrorMessage name="password" component="div" />
              </div>
            </div>
            <p className="text-sm color">Forgot password?</p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="enabled:hover:-translate-y-0.5 transition enabled:motion-reduce:hover:translate-y-0 motion-reduce:transition-none bg-yellow-400 rounded-lg py-3 mt-4 font-medium shadow-sm"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
