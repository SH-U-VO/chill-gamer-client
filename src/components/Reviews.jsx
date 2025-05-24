import React from 'react';
import { NavLink} from 'react-router-dom';
const Reviews = ({ games }) => {


    return (
        <div className="py-20 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center lg:text-left mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        LATEST GAME REVIEWS
                    </h2>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-400">
                        EXPLORE TOP TITLES
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {games &&
                        games.map((game) => (
                            <div
                                key={game._id}
                                className="bg-neutral-800/50 rounded-lg shadow-md p-8 flex flex-col justify-between items-center text-center"
                            >
                                <div className="rounded-full bg-purple-200 bg-opacity-10 p-6 mb-4">
                                    {game.coverImage && (
                                        <img
                                            src={game.coverImage}
                                            alt={game.title}
                                            className="w-16 h-16 object-cover rounded-full"
                                        />
                                    )}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                                <p className="text-sm text-gray-400 mb-4">
                                    {game.reviewDescription.substring(0, 100)}... {/* Show a snippet */}
                                </p>
                                <div className="flex items-center mb-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-yellow-400 mr-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.928c-.383-1.194-1.983-1.194-2.366 0L2.928 7.632c-1.194.383-1.194 1.983 0 2.366l4.704 4.704c.383 1.194 1.983 1.194 2.366 0l4.704-4.704c1.194-.383 1.194-1.983 0-2.366L9.049 2.928zM10 13.5l-6.309 3.948 1.114-4.892L.5 7.632l4.892-1.114L10 2.5l4.608 4.018 4.892 1.114-3.297 2.854 1.114 4.892L10 13.5z"
                                        />
                                    </svg>
                                    <span>{game.rating}</span>
                                </div>
                                <span className="text-xs text-gray-500">Year: {game.publishingYear}</span>
                                <span className="text-xs text-gray-500">Genre: {game.genres}</span>
                                <NavLink

                                    to={`/game/${game.id}`}
                                    className="btn btn-sm btn-outline text-gray-300 hover:text-white hover:border-purple-400 mt-4">
                                    Explore Details
                                </NavLink>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;