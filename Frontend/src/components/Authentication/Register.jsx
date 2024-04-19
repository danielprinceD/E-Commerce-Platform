import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

export const Register = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Your login logic here
    };

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="bg-white w-full sm:max-w-md px-6 py-12 rounded shadow-md">
                <h1 className="text-2xl mb-8 text-center">Register</h1>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                        id="user"
                        className="block w-full p-3 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                        id="password"
                        className="block w-full p-3 border border-gray-300 rounded"
                    />
                    <button
                        type="button"
                        id="login-btn"
                        onClick={handleLogin}
                        className="w-full bg-blue-500 text-white p-3 rounded mt-4 mb-4"
                    >
                        Login
                    </button>
                    <div className="text-center text-gray-500">
                        <p className="text-xs">
                            Already registered?{' '}
                            <NavLink to="/login" className="text-blue-500">
                                Login
                            </NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};
