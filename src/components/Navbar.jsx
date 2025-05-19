import logo from '../assets/logo.png'
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-transparent shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow ">
              <li><a>Home</a></li>
              <li>
                <details>
                  <summary >Reviews</summary>
                  <ul className="p-2 w-50">
                    <li><a>Add Review</a></li>
                    <li><a>All Review</a></li>
                    <li><a>My Reviews</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Watchlist</a></li>
            </ul>
          </div>
          <a className="text-2xl font-semibold flex items-center">
            <img src={logo} alt="Chill Gamer Logo" className="w-10 h-10 mr-2" />
            Chill Gamer
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 px-1">
            <li className='text-[#ffffff80]'><a>Home</a></li>
            <li>
              <details>
                <summary className='text-[#ffffff80]'>Reviews</summary>
                <ul className="p-2 w-50 z-100">
                  <li><a>Add Review</a></li>
                  <li><a>All Review</a></li>
                  <li><a>My Reviews</a></li>
                </ul>
              </details>
            </li>
            <li className='text-[#ffffff80]'><a>Watchlist</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn btn-wide bg-transparent rounded-full border-2  border-white text-white hover:bg-pink-200/70 hover:shadow-lg hover:drop-shadow-lg transition-all duration-300"
          >
            Log In
            <IoMdLogIn className='text-xl'></IoMdLogIn>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;