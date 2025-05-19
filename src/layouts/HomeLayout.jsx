import Navbar from '../components/Navbar';
import shadow from '../assets/shadow.png';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Shadow images (Layer 2) */}
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

      {/* Main content (Layer 3) */}
      <div className="relative z-10 md:container mx-auto px-4 lg:px-48 pt-16">
        {/* Navbar at the top */}
        <Navbar />

        {/* Outlet (child routes) with minimum height */}
        <div className=" min-h-[calc(100vh-200px)]">
          <Outlet />
        </div>

        {/* Footer at the bottom */}
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;