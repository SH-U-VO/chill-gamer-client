// src/pages/Login.jsx
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { signInUser, googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const { email, password } = formData;

    signInUser(email, password)
      .then((result) => {
        //console.log('User signed in:', result.user);
        setFormData({ email: '', password: '' });
        setSuccess('Login successful!');
        setTimeout(() => navigate('/'), 1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/invalid-credential') {
          setError('No user found with this email. Please register first.');
        } else {
          setError(error.message);
        }
      });
  };

  const handleGoogleLogin = async () => {
    setError('');
    setSuccess('');
    try {
      await googleLogIn();
      setSuccess('Google login successful!');
      navigate('/'); // ✅ Navigation here
    } catch {
      setError('Google login failed. Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md rounded-lg shadow-md bg-neutral-800/50 border-2 border-white w-full space-y-8 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-base-content">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Or{' '}
              <Link to="/register" className="font-medium text-primary hover:text-primary-focus">
                create a new account
              </Link>
            </p>
          </div>

          {error && (
            <div className="alert alert-error shadow-lg">
              <div className="flex items-center gap-2 font-bold">
                <svg className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}

          {success && (
            <div className="alert alert-success shadow-lg">
              <div className="flex items-center gap-2 font-bold">
                <svg className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{success}</span>
              </div>
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input input-bordered w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="input input-bordered w-full"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-full">Sign In</button>
          </form>

          <div className="divider">OR</div>
          <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary w-full">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
