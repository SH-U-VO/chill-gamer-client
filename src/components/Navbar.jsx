import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import logo from '../assets/logo.png';
import { IoMdLogIn } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('User logged out successfully');
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
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow"
                        >
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <details>
                                    <summary>Reviews</summary>
                                    <ul className="p-2 w-50">
                                        <li>
                                            <a href="/addReview">Add Review</a>
                                        </li>
                                        <li>
                                            <a href="/allReview">All Review</a>
                                        </li>
                                        <li>
                                            <a href="/myReview">My Reviews</a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <a href="/gameWatchlist">Watchlist</a>
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
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <details>
                                <summary className="text-[#ffffff80]">Reviews</summary>
                                <ul className="p-2 w-50 z-100">
                                    <li>
                                        <a href="/addReview">Add Review</a>
                                    </li>
                                    <li>
                                        <a href="/allReview">All Review</a>
                                    </li>
                                    <li>
                                        <a href="/myReview">My Reviews</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li className="text-[#ffffff80]">
                            <a href="/gameWatchlist">Watchlist</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                {user.photoURL ? (
                                    <img
                                        src={user.photoURL}
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full"
                                    />
                                ) : (
                                    <FaUserCircle className="w-10 h-10 text-gray-400" />
                                )}
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow"
                            >
                                <li className="mb-2">
                                    <span className="font-semibold">
                                        {user.displayName || user.email}
                                    </span>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogOut}
                                        className="btn btn-sm btn-outline btn-error"
                                    >
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <NavLink
                            to="/Login"
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