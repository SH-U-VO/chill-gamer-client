import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const email = formData.email;
    const password = formData.password;

    signInUser(email, password)
      .then((result) => {
        console.log('User signed in:', result.user);
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

       
        console.log('Login Info:', loginInfo);

        // Clear form fields
        setFormData({
          email: '',
          password: '',
        });

        // Show success message
        setSuccess('Login successful!');

        setTimeout(()=> navigate('/'),1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Login Error:', errorCode, errorMessage);

        // Display user-friendly error messages
        if (errorCode === 'auth/invalid-credential') {
          setError('No user found with this email. Please register first.');
        } else {
          setError(errorMessage); // Fallback to the raw error message
        }
      });
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
              <div className='flex items-center gap-2 font-bold'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}
          {success && (
            <div className="alert alert-success shadow-lg">
              <div className='flex items-center gap-2 font-bold'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{success}</span>
              </div>
            </div>
          )}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              {/* Email */}
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
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Password */}
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
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" className="btn btn-primary w-full">
                Sign In
              </button>
            </div>
          </form>

          {/* Google Login */}
          <div className="divider">OR</div>
          <button className="btn btn-outline btn-secondary w-full">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;