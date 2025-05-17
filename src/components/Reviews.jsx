import React from 'react';

const Reviews = () => {
  return (
    <div className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center lg:text-left mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            FUTURE OF INTELLIGENT
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-400">
            TECHNOLOGY
          </h2>
        </div>
        <div className="lg:text-right mb-8 lg:mb-16">
          <p className="text-sm text-gray-400">
            Our cutting-edge AI solutions are at the forefront
            of intelligent technology, designed to transform
            the way businesses operate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            
          {/* AI Cloud Solutions Card */}
          <div className="bg-neutral-800 rounded-lg shadow-md p-8 flex flex-col justify-between items-center text-center">
            <div className="rounded-full bg-purple-200 bg-opacity-10 p-6 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 15a4 4 0 004 4h9a4 4 0 004-4M5 19v-6a4 4 0 014-4h6a4 4 0 014 4v6M3 21v-2a4 4 0 004-4h10a4 4 0 004 4v2m-12-3h8"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Cloud Solutions</h3>
            <p className="text-sm text-gray-400 mb-4">
              Deploy scalable AI applications securely
              on cloud infrastructures for maximum
              flexibility.
            </p>
            <button className="btn btn-sm btn-outline text-gray-300 hover:text-white hover:border-purple-400">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Reviews;