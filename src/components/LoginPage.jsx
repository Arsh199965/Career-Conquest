// LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center mb-6">Career Conquest</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" 
              required 
            />
          </div>
          <button 
            type="button" 
            onClick={handleLogin} 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
