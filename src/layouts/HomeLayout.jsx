import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import shadow from '../assets/shadow.png';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import { Outlet, useLoaderData } from 'react-router-dom';

const HomeLayout = () => {

  const game = useLoaderData();
  console.log(game)

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ✅ Shadow image (Layer 2) */}
      <img
        src={shadow}
        alt="Shadow"
        className="absolute -top-50 -right-30 w-96 opacity-80 z-0"
      />
      <img
        src={shadow}
        alt="Shadow"
        className="absolute top-100 -left-40 w-96 opacity-80 z-0"
      />

      {/* ✅ Main content (Layer 3) */}
      <div className="relative z-10 md:container mx-auto px-4 lg:px-48 pt-16">
        <Navbar />
        <Carousel />
      

      <div className='mt-50'>
          <Reviews />
      </div>


        {/* <div className='mt-30'>
          <Footer />
        </div> */}
      </div>
    </div>
  );
};

export default HomeLayout;
