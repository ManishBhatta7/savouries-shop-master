// pages/register.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerError, setRegisterError] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/login');
    } else {
      setRegisterError('Registration failed. Please try again.');

      // Check if the error indicates user already exists
      const data = await res.json();
      if (data.error && data.error.includes('User already exists')) {
        setRegisterError('User already exists. Please login instead.');
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
            <h1 className="text-3xl font-bold mb-4 text-primary text-center">Register</h1>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
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
                  className="mt-1 block w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {registerError && <p className="text-red-500">{registerError}</p>}
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition duration-300 w-full"
              >
                Register
              </button>
            </form>
            <p className="mt-4 text-center">
              Already have an account?{' '}
              <a href="/login" className="text-primary hover:underline transition duration-300">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
