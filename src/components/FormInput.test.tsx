import React, { ReactNode } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik, Form } from 'formik';
import '@testing-library/jest-dom';
import * as Yup from 'yup';
import { FormInput } from './FormInput';

interface FormWrapperProps {
  children: ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => (
  <Formik
    initialValues={{ email: '' }}
    validationSchema={Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    })}
    onSubmit={() => {}}
  >
    <Form>{children}</Form>
  </Formik>
);

describe('FormInput', () => {
  test('changes input class on error', async () => {
    render(
      <FormWrapper>
        <FormInput label="Email" name="email" />
      </FormWrapper>
    );

    userEvent.tab();
    userEvent.tab();

    await waitFor(() => {
      const input = screen.getByLabelText(/email/i);
      expect(input).toHaveClass('ring-red-500');
    });
  });

  test('correctly links label with input using the name prop', () => {
    render(
      <FormWrapper>
        <FormInput label="Email" name="email" type="email" />
      </FormWrapper>
    );

    const input = screen.getByLabelText('Email');
    expect(input).toBeInTheDocument();
    expect(input.id).toBe('email');
    const label = screen.getByText('Email').closest('label');
    expect(label).toHaveAttribute('for', 'email');
  });
});
