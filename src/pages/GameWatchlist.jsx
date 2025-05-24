import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GameWatchlist = () => {
  const watchlist = useLoaderData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-violet-900 py-12">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400">
            My Watchlist
          </h2>
        </div>

        {/* Grid of Watchlist Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {watchlist && watchlist.length > 0 ? (
            watchlist.map((game) => (
              <div
                key={game.id}
                className="card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg overflow-hidden"
              >
                {/* Game Cover Image */}
                {game.coverImage && (
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    className="w-full h-48 object-cover"
                  />
                )}

                {/* Card Content */}
                <div className="p-6 text-white flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-3">{game.title}</h3>
                  <div className="text-sm text-gray-300 mb-2">
                    <span>Year: {game.publishingYear}</span>
                  </div>
                  <div className="text-sm text-gray-300 mb-4">
                    <span>Genre: {game.genres}</span>
                  </div>
                  <button className="btn btn-primary bg-pink-500 border-none text-white hover:bg-pink-600">
                    Remove from Watchlist
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400">
              <p>Your watchlist is empty.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameWatchlist;