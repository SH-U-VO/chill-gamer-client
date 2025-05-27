import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/logo.png';
import { IoMdLogIn } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css'; // Import the new CSS file

const Navbar = () => {
  const { userDb, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setTimeout(() => navigate('/login'));
      })
      .catch((error) => {
        console.error('Logout Error:', error);
      });
  };

  return (
    <div>
      <div className="navbar bg-transparent shadow-sm mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* Mobile Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mobile-dropdown bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-xl shadow-lg backdrop-blur-md border border-white/10 mt-3 p-4 z-50"
            >
              <li>
                <NavLink
                  to="/"
                  className="text-sm font-medium hover:bg-pink-500/20 hover:text-pink-400 rounded-lg px-3 py-2 transition-all duration-200"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <details>
                  <summary className="text-sm font-medium hover:bg-pink-500/20 hover:text-pink-400 rounded-lg px-3 py-2 transition-all duration-200">
                    Reviews
                  </summary>
                  <ul className="p-2 w-56 bg-gray-900/90 rounded-lg border border-white/10 shadow-md mt-1">
                    <li>
                      <NavLink
                        to="/addReview"
                        className="text-sm font-medium hover:bg-pink-500/20 hover:text-pink-400 rounded-lg px-3 py-2 transition-all duration-200"
                      >
                        Add Review
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/allReview"
                        className="text-sm font-medium hover:bg-pink-500/20 hover:text-pink-400 rounded-lg px-3 py-2 transition-all duration-200"
                      >
                        All Review
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/myReview"
                        className="text-sm font-medium hover:bg-pink-500/20 hover:text-pink-400 rounded-lg px-3 py-2 transition-all duration-200"
                      >
                        My Reviews
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <NavLink
                  to="/gameWatchlist"
                  className="text-sm font-medium hover:bg-pink-500/20 hover:text-pink-400 rounded-lg px-3 py-2 transition-all duration-200"
                >
                  Watchlist
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="text-2xl font-semibold flex items-center">
            <img src={logo} alt="Chill Gamer Logo" className="w-10 h-10 mr-2" />
            Chill Gamer
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 px-1">
            <li className="text-[#ffffff80]">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'text-pink-400' : 'hover:text-pink-400 transition-colors duration-200')}>Home</NavLink>
            </li>
            <li>
              <details>
                <summary className="text-[#ffffff80] hover:text-pink-400 transition-colors duration-200">
                  Reviews
                </summary>
                {/* Desktop Reviews Dropdown */}
                <ul className="p-4 w-56 desktop-dropdown bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-xl shadow-lg backdrop-blur-md border border-white/10 z-50">
                  <li>
                    <NavLink
                      to="/addReview"
                      className="text-sm font-medium hover:bg-pink-500/20 hover:text-pink-400 rounded-lg px-3 py-2 transition-all duration-200"
                    >
                      Add Review
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/allReview"
                      className="text-sm font-medium hover:bg-pink-500/20 hover:text-pink-400 rounded-lg px-3 py-2 transition-all duration-200"
                    >
                      All Review
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/myReview"
                      className="text-sm font-medium hover:bg-pink-500/20 hover:text-pink-400 rounded-lg px-3 py-2 transition-all duration-200"
                    >
                      My Reviews
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li className="text-[#ffffff80]">
              <NavLink to="/gameWatchlist" className={({ isActive }) => (isActive ? 'text-pink-400' : 'hover:text-pink-400 transition-colors duration-200')}>Watchlist</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {userDb ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                {userDb.photoURL ? (
                  <img
                    src={userDb.photoURL}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <FaUserCircle className="w-10 h-10 text-gray-400" />
                )}
              </div>
              {/* User Profile Dropdown */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content profile-dropdown bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-xl shadow-lg backdrop-blur-md border border-white/10 mt-3 p-4 z-50"
              >
                <li className="mb-2">
                  <span className="font-semibold text-sm px-3 py-2">
                    {userDb.displayName || userDb.email}
                  </span>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm btn-outline btn-error hover:bg-pink-500 hover:border-pink-500 hover:text-white rounded-lg px-3 py-2 transition-all duration-200"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="btn btn-outline btn-secondary rounded-4xl btn-wide"
            >
              Log In
              <IoMdLogIn className="text-xl" />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;