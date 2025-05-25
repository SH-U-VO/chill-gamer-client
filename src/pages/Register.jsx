import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

  const { createUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoURL: '',
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

  // const validatePassword = (password) => {
  //   const hasUppercase = /[A-Z]/.test(password);
  //   const hasLowercase = /[a-z]/.test(password);
  //   const hasNumber = /[0-9]/.test(password);
  //   const hasMinLength = password.length >= 6;

  //   if (!hasUppercase) {
  //     return 'Password must contain at least one uppercase letter.';
  //   }
  //   if (!hasLowercase) {
  //     return 'Password must contain at least one lowercase letter.';
  //   }
  //   if (!hasMinLength) {
  //     return 'Password must be at least 6 characters long.';
  //   }
  //   if (!hasNumber) {
  //     return 'Password must contain at lease one number.';
  //   }

  //   return '';
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    console.log(formData)

    const email = formData.email;
    const password = formData.password;

    // // Password validation
    // const passwordError = validatePassword(formData.password);
    // if (passwordError) {
    //   setError(passwordError);
    //   return;
    // }

    createUser(email, password)
      .then(result => {
        console.log('User created at fb', result.user);
        // Signed up 
        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = {
          name: formData.name,
          email: formData.email,
          createdAt: createdAt,
          myReviews: [],
          myWatchlist: [],
        };

        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              console.log('users created to db', data);
            }

          })
        setFormData({
          name: '',
          email: '',
          photoURL: '',
          password: '',
        })
      })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    // });

  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md rounded-lg shadow-md bg-neutral-800/50 border-2 border-white w-full space-y-8 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-base-content">
              Create a new account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-primary hover:text-primary-focus">
                Sign in
              </Link>
            </p>
          </div>
          {error && (
            <div className="alert alert-error shadow-lg">
              <div>
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
              <div>
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
              {/* Name */}
              <div>
                <label htmlFor="name" className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="input input-bordered w-full"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

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

              {/* Photo URL */}
              <div>
                <label htmlFor="photoURL" className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  id="photoURL"
                  name="photoURL"
                  type="url"
                  className="input input-bordered w-full"
                  placeholder="https://example.com/photo.jpg"
                  value={formData.photoURL}
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
                  autoComplete="new-password"
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
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;