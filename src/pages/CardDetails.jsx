import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
  const { id } = useParams();
  const games = useLoaderData();
  const game = games.find((g) => g._id === id);
  if (!game) {
    return <div className="text-center text-white py-20">Game not found.</div>;
  }

  return (
    <div className="min-h-screen rounded-4xl bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-white">
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline btn-secondary mb-8"
          >
            Back
          </button>

          {/* Game Cover Image */}
          {game.coverImage && (
            <img
              src={game.coverImage}
              alt={game.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
          )}

          {/* Game Title */}
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{game.title}</h2>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300">
                <strong>Year:</strong> {game.publishingYear}
              </p>
              <p className="text-gray-300">
                <strong>Genre:</strong> {game.genres}
              </p>
              <p className="text-gray-300">
                <strong>Rating:</strong> {game.rating}
              </p>
              <p className="text-gray-300">
                <strong>User:</strong> {game.userName} ({game.userEmail})
              </p>
            </div>
            <div>
              <p className="text-gray-400">
                <strong>Review:</strong> {game.reviewDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;