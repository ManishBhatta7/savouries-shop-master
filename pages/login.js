// pages/login.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const { token } = await res.json();
      localStorage.setItem('token', token);
      router.push('/cart');
    } else {
      setLoginError('Login failed. Please check your credentials.');

      // Check if the error indicates user not found, then prompt to register
      const data = await res.json();
      if (data.error && data.error.includes('User not found')) {
        setLoginError('User not found. Please register first.');
      }
    }
  };

  return (
    <Layout>
      <div
        className="bg-cover bg-center h-screen flex items-center"
        style={{ backgroundImage: `url('/hero-image.jpg')` }}
      >
        <div className="container mx-auto p-4">
          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-sm mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-primary text-center">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {loginError && <p className="text-red-500">{loginError}</p>}
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition duration-300 w-full"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center">
              Don't have an account?{' '}
              <a href="/register" className="text-primary hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
