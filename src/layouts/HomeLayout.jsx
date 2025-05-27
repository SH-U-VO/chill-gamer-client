import Navbar from '../components/Navbar';
import shadow from '../assets/shadow.png';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <div className="relative flex flex-col justify-between min-h-[calc(100vh+300px)] overflow-hidden">
        {/* Shadow images */}
        <img
          src={shadow}
          alt="Shadow"
          className="absolute -top-50 -right-30 w-100 opacity-100 z-0"
        />
        <img
          src={shadow}
          alt="Shadow"
          className="absolute top-100 -left-40 w-200 h-300 opacity-100 z-0"
        />
        <img
          src={shadow}
          alt="Shadow"
          className="absolute bottom-0 -right-80 w-200 h-300 opacity-100 z-0"
        />

        {/* Main content */}
        <div className="relative z-10 md:container mx-auto px-4 lg:px-20 pt-8">
          <Navbar />

          <div className="min-h-[calc(100vh-200px)]">
            <Outlet />
          </div>

          {/* Footer shown only on md (medium) screens */}
          <div className="mt-8 block lg:hidden">
            <Footer />
          </div>
        </div>
      </div>

      {/* Footer shown only on lg (large) and above screens */}
      <div className="mt-8 hidden lg:block px-6">
        <Footer />
      </div>
    </>
  );
};

export default HomeLayout;
