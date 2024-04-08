import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoginPage } from './LoginPage';
import React from 'react';

describe('LoginPage Component', () => {
  beforeEach(() => {
    Storage.prototype.setItem = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('email is saved to localStorage on successful login', async () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /login/i });

    await act(async () => {
      fireEvent.change(emailInput, {
        target: { value: 'validemail@example.com' },
      });
      fireEvent.change(passwordInput, {
        target: { value: 'validPassword123' },
      });
      fireEvent.click(submitButton);
    });

    expect(Storage.prototype.setItem).toHaveBeenCalledWith(
      'email',
      'validemail@example.com'
    );
  });

  test('error message is displayed for invalid email format', async () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /login/i });

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
    });
  });

  test('login button is disabled when form is invalid', async () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: '' } });

    expect(submitButton).toBeDisabled();
  });

  test('login button is enabled when form inputs are valid', async () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /login/i });

    await act(async () => {
      fireEvent.change(emailInput, {
        target: { value: 'validemail@example.com' },
      });
      fireEvent.change(passwordInput, {
        target: { value: 'validPassword123' },
      });
    });

    expect(submitButton).not.toBeDisabled();
  });
});
