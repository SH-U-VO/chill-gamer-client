import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { CgDetailsMore } from "react-icons/cg";
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const MyReview = () => {
    const AllGames = useLoaderData();
    const { userDb } = useContext(AuthContext);
    const [displayedGames, setDisplayedGames] = useState([]);

    useEffect(() => {
        if (userDb) {
            const filteredGames = AllGames.filter(game =>
                userDb?.myReviews?.includes(game._id)
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
        <div className="min-h-[50vh] rounded-4xl bg-gradient-to-br from-base-300/50 via-gray-900/50 to-purple-900/50">
            <div className="p-10 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-400 border-b border-gray-600">
                            My Reviews
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedGames &&
                            displayedGames.map((game) => (
                                <div
                                    key={game._id}
                                    className="bg-neutral-800/50 rounded-lg shadow-md p-8 flex flex-col justify-between items-center text-center relative"
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
                                        {game.reviewDescription?.substring(0, 100)}...
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
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => handleDelete(game._id)}
                                            className="btn btn-md btn-outline text-gray-300 hover:text-white hover:border-red-400 mt-4"
                                        >
                                            Delete
                                        </button>
                                        <NavLink
                                            to={`/updateGame/${game._id}`}
                                            className="btn btn-md btn-outline text-gray-300 hover:text-white hover:border-purple-400 mt-4"
                                        >
                                            Update
                                        </NavLink>
                                    </div>
                                    <NavLink
                                        to={`/game/${game._id}`}
                                        className="text-3xl btn btn-sm text-pink-400 absolute top-5 right-5 hover:bg-gradient-to-br from-base-300/50 via-gray-900/50 to-purple-900/50"
                                    >
                                        <CgDetailsMore />
                                    </NavLink>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReview;
