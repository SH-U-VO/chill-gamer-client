import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const GameWatchlist = () => {
  const AllGames = useLoaderData();
  const { userDb } = useContext(AuthContext);
  const [displayedGames, setDisplayedGames] = useState([]);

  useEffect(() => {
    if (userDb) {
      const filteredGames = AllGames.filter(game =>
        userDb?.myWatchlist?.includes(game._id)
      );
      setDisplayedGames(filteredGames);
    }
  }, [AllGames, userDb]);

  if (!userDb) {
    return <div className="text-white text-center p-10">Loading your profile...</div>;
  }


  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/games/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your game has been deleted.",
                icon: "success"
              });
              // Remove the deleted game from UI
              const remainingGames = displayedGames.filter(game => game._id !== _id);
              setDisplayedGames(remainingGames);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-violet-900 py-12 rounded-4xl">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400">
            My Watchlist
          </h2>
        </div>

        {/* Grid of Watchlist Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedGames && displayedGames.length > 0 ? (
            displayedGames.map((game) => (
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
                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={() => handleDelete(game._id)}
                      className="btn btn-primary bg-gradient-to-r from-red-500 to-pink-600 border-none text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg hover:from-red-600 hover:to-pink-700 transform hover:-translate-y-1 transition-all duration-300 w-1/2"
                    >
                      Remove
                    </button>
                    <NavLink
                      to={`/game/${game._id}`}
                      className="btn btn-primary bg-gradient-to-r from-indigo-500 to-violet-600 border-none text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-violet-700 transform hover:-translate-y-1 transition-all duration-300 w-1/2"
                    >
                      Explore
                    </NavLink>
                  </div>
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