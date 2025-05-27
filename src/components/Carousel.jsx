import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const Carousel = () => {

    // Carousel
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        "https://c4.wallpaperflare.com/wallpaper/625/560/10/pubg-video-games-first-person-shooter-people-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/656/869/201/call-of-duty-wallpaper-preview.jpg",
        "https://images2.alphacoders.com/782/782652.jpg",
        "https://wallpapersok.com/images/high/1080p-gta-5-game-poster-f500vqmcsqkt7hzh.webp",
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="relative w-full mx-auto min-h-screen md:min-h-[50vh] lg:min-h-[75vh] overflow-hidden rounded-2xl shadow-lg">
                {items.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-3000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <img
                            src={src}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}



            </div>


            <div className='absolute mt-20   border-2 border-white-600'>
                <Marquee  >
                <img className='h-10 mr-30' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGDLXbBy0gRuhDvHXMOZULiE0CElKsJfpuw&s"></img>

                <img className='h-10 mr-30' src='https://mms.businesswire.com/media/20220131005684/en/1344260/5/PlayStation_Logo_%28002%29.jpg?download=1'></img>


                <img className='h-10 mr-30' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGDLXbBy0gRuhDvHXMOZULiE0CElKsJfpuw&s"></img>

                <img className='h-10 mr-30' src='https://mms.businesswire.com/media/20220131005684/en/1344260/5/PlayStation_Logo_%28002%29.jpg?download=1'></img>

                <img className='h-10 mr-30' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGDLXbBy0gRuhDvHXMOZULiE0CElKsJfpuw&s"></img>
            </Marquee>
            </div>
        </>
    );

};

export default Carousel;
