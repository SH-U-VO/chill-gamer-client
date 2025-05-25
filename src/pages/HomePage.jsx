import Carousel from '../components/Carousel';
import Reviews from '../components/Reviews';
import { useLoaderData } from 'react-router-dom';
import ProfilePage from '../components/ProfilePage';


const HomeLayout = () => {

    const games = useLoaderData().slice(0, 4);


    return (
        <div className="relative min-h-screen overflow-hidden">

            {/* ✅ Main content (Layer 3) */}
            <div className="relative z-10 ">
                <Carousel />

                {/* Reviews */}
                <div className='mt-50'>
                    <Reviews games={games}></Reviews>
                    <div className='justify-center flex'>
                        <a
                            href='/allReview'
                            className="btn btn-wide bg-transparent rounded-full border-2  border-white text-white hover:bg-pink-200/70 hover:shadow-lg hover:drop-shadow-lg transition-all duration-300"
                        >
                            Explore More !

                        </a>


                    </div>
                </div>

                {/* My Profile */}
                <div className='mt-40 mx-10'>
                    <ProfilePage />
                </div>
            </div>
        </div>

    );
};

export default HomeLayout;
