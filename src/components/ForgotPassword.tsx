import React, { useState } from 'react';
import { I18n } from '../constants/i18n';

export const ForgotPassword = () => {
  const [showPasswordHint, setForgotPasswordHint] = useState(false);

  const handleForgotPasswordClick = () => {
    setForgotPasswordHint(!showPasswordHint);
  };

  return (
    <div
      className="text-sm flex flex-col items-start"
      onClick={handleForgotPasswordClick}
    >
      <button type="button">Forgot password?</button>
      {showPasswordHint && (
        <span className="text-blue-500 text-xs mt-2 max-w-full break-words">
          {I18n.ForgotPassword}
        </span>
      )}
    </div>
  );
};
