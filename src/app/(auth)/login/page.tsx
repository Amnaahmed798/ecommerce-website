"use client";

import React from 'react';
import LoginCard from '@/components/layouts/LoginCard'; // Make sure the path is correct

const LoginPage: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('Logging in with', email, password);
    // Handle login logic here (e.g., make an API call)
  };

  return (
    <div className="login-page">
      {/* Pass the handleLogin function as a prop */}
      <LoginCard onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
