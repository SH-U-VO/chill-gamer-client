import { NavLink, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const AllReview = () => {
    const AllGames = useLoaderData();
    const { userDb } = useContext(AuthContext);
    const [watchList, setWatchList] = useState([]);


    useEffect(() => {
        if (userDb) {
            setWatchList(userDb?.myWatchlist || []);
        }
    }, [userDb]);



    if (!userDb) {
        return <div className="text-white text-center p-10">Loading your profile...</div>;
    }
    console.log(userDb)
    console.log(AllGames)
    console.log(watchList);
    console.log('This is watchlist', watchList);



    const handleWatchLater = (gameId) => {
        console.log('this is game id', gameId)
        const userID = userDb._id
        const myWatchlistInfo = { gameId, userID };
        console.log('this is my watchlist info', myWatchlistInfo)
        if (!watchList.includes(gameId)) {
            const updatedList = [...watchList, gameId];
            setWatchList(updatedList);
            Swal.fire({
                icon: 'success',
                title: 'Added to Watch Later',
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Already in Watch Later',
                showConfirmButton: false,
                timer: 1500,
            });
        }

        fetch(`http://localhost:3000/users`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(myWatchlistInfo),
        })

            .then((res) => res.json())
            .then((data) => {
                console.log('User update response:', data);
                if (data.modifiedCount === 0) {
                    throw new Error('Failed to update user reviews in the database.');
                }
            })
            .catch((error) => {
                console.error('Something went wrong:', error);
            });
    };

    return (
        <div>
            <div className="py-20 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl border-b border-gray-600 lg:text-5xl font-bold text-gray-400">
                            EXPLORE TOP TITLES
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {AllGames &&
                            AllGames.map((game) => {
                                const isWatched = watchList.includes(game._id);
                                return (
                                    <div
                                        key={game._id}
                                        className="relative bg-neutral-800/50 rounded-lg shadow-md p-8 flex flex-col justify-between items-center text-center"
                                    >
                                        {/* Watch Later Fancy Button */}
                                        <button
                                            onClick={() => handleWatchLater(game._id)}
                                            disabled={isWatched}
                                            className={`absolute top-4 right-4 px-4 py-1 rounded-full text-xs shadow-lg transition-transform duration-300 ${isWatched
                                                ? 'bg-gray-500 text-white cursor-not-allowed'
                                                : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105'
                                                }`}
                                        >
                                            {isWatched ? '✓ Added' : '★ Watch Later'}
                                        </button>

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
                                            {game.reviewDescription?.substring(0, 100)}...
                                        </p>
                                        <div className="flex items-center mb-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-yellow-400 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.928c-.383-1.194-1.983-1.194-2.366 0L2.928 7.632c-1.194.383-1.194 1.983 0 2.366l4.704 4.704c.383 1.194 1.983 1.194 2.366 0l4.704-4.704c1.194-.383 1.194-1.983 0-2.366L9.049 2.928zM10 13.5l-6.309 3.948 1.114-4.892L.5 7.632l4.892-1.114L10 2.5l4.608 4.018 4.892 1.114-3.297 2.854 1.114 4.892L10 13.5z" />
                                            </svg>
                                            <span>{game.rating}</span>
                                        </div>
                                        <span className="text-xs text-gray-500">Year: {game.publishingYear}</span>
                                        <span className="text-xs text-gray-500">Genre: {game.genres}</span>

                                        <NavLink
                                            to={`/game/${game._id}`}
                                            className="btn btn-sm btn-outline text-gray-300 hover:text-white hover:border-purple-400 mt-4"
                                        >
                                            Explore Details
                                        </NavLink>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllReview;
