import React from 'react';
import { LoginPage } from './components/LoginPage';

export const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200">
      <LoginPage />
    </div>
  );
};

export default App;
