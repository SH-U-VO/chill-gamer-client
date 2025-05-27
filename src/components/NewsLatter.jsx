import React from 'react';
import { FaSearch } from "react-icons/fa";

const NewsLatter = () => {
    return (
        <div className="bg-gradient-to-b from-[#3b3b3b] to-[#1f1f1f] text-white py-16 px-4 rounded-2xl mx-auto max-w-4xl text-center shadow-lg">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-10 leading-snug">
                SUBSCRIBE FOR THE <br className="hidden sm:block" />
                LATEST GAME REVIEWS
            </h2>

            <div className="flex items-center justify-center">
                <div className="flex items-center w-full max-w-md bg-[#2a2a2a] rounded-full px-4 py-2 shadow-inner border border-[#444]">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent outline-none w-full placeholder-gray-400 text-sm text-white px-2"
                    />
                    <button className="text-pink-400 hover:text-pink-600">
                        <FaSearch />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsLatter;
