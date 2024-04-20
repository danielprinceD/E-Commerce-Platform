import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

export const Logout = () => {
  const navigate = useNavigate();
  const context = useAuth();
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-20 border border-gray-300 shadow-lg z-50 flex flex-col items-center">
      <h2 className='text-center'>Are You Really Want to Logout?</h2>
      <div className='flex mt-4'>
        <button className="mr-4 py-4 px-6 bg-red-500 text-white rounded cursor-pointer transition duration-300 hover:bg-red-600" onClick={() => {
          context.logout();
          navigate('/login');
        }}>Logout</button>
        <button className="py-4 px-6 bg-gray-600 text-white rounded cursor-pointer transition duration-300 hover:bg-gray-700" onClick={() => {
          navigate(-1);
        }}>Cancel</button>
      </div>
    </div>
  );
};
