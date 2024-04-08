import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ForgotPassword } from './ForgotPassword';

describe('ForgotPassword Component', () => {
  test('toggles hint on click', () => {
    render(<ForgotPassword />);
    const button = screen.getByRole('button', { name: /forgot password\?/i });
    fireEvent.click(button);
    expect(screen.getByText(/no reset this time/i)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByText(/no reset this time/i)).toBeNull();
  });
});
