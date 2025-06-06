import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMyReview = () => {
    const game = useLoaderData();
    const navigate = useNavigate();
    //console.log('This is game from loader', game);

    const { coverImage, genres, publishingYear, rating, reviewDescription, title, _id } = game;

    const handleUpdateGames = e => {
        e.preventDefault();


        const coverImage = e.target.coverImage.value;
        const title = e.target.title.value;
        const reviewDescription = e.target.reviewDescription.value;
        const rating = e.target.rating.value;
        const publishingYear = e.target.publishingYear.value;
        const genres = e.target.genres.value;

        const newGame = { coverImage, title, reviewDescription, rating, publishingYear, genres };
        //console.log(newGame);

        // send data to database 
        fetch(`https://chill-gamer-server-drab.vercel.app/games/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newGame)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Review updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate('/myReview');

                }

            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className=" rounded-lg shadow-md bg-neutral-800/50 border-2 border-white w-full space-y-8 py-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-base-content">
                        Update Review
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleUpdateGames} >
                    <div className="rounded-md shadow-sm space-y-4">
                        {/* Game Cover Image URL */}
                        <div>
                            <label htmlFor="coverImage" className="label">
                                <span className="label-text">Game Cover Image URL</span>
                            </label>
                            <input
                                defaultValue={coverImage}
                                id="coverImage"
                                name="coverImage"
                                type="url"
                                required
                                className="input input-bordered w-full"
                                placeholder="https://example.com/game-cover.jpg"
                            />
                        </div>

                        {/* Game Title */}
                        <div>
                            <label htmlFor="title" className="label">
                                <span className="label-text">Game Title</span>
                            </label>
                            <input
                                defaultValue={title}
                                id="title"
                                name="title"
                                type="text"
                                required
                                className="input input-bordered w-full"
                                placeholder="Game Title"
                            />
                        </div>

                        {/* Review Description */}
                        <div>
                            <label htmlFor="reviewDescription" className="label">
                                <span className="label-text">Review Description</span>
                            </label>
                            <textarea
                                defaultValue={reviewDescription}
                                id="reviewDescription"
                                name="reviewDescription"
                                required
                                className="textarea textarea-bordered w-full"
                                placeholder="Write your review here..."

                                rows="4"
                            />
                        </div>

                        {/* Rating */}
                        <div>
                            <label htmlFor="rating" className="label">
                                <span className="label-text">Rating (1-5)</span>
                            </label>
                            <input
                                defaultValue={rating}
                                id="rating"
                                name="rating"
                                type="number"
                                min="1"
                                max="5"
                                step="0.1"
                                required
                                className="input input-bordered w-full"
                                placeholder="Enter rating (e.g., 4.5)"
                            />
                        </div>

                        {/* Publishing Year */}
                        <div>
                            <label htmlFor="publishingYear" className="label">
                                <span className="label-text">Publishing Year</span>
                            </label>
                            <input
                                defaultValue={publishingYear}
                                id="publishingYear"
                                name="publishingYear"
                                type="number"
                                min="1900"
                                max="2099"
                                required
                                className="input input-bordered w-full"
                                placeholder="e.g., 2021"

                            />
                        </div>

                        {/* Genres Dropdown */}
                        <div>
                            <label htmlFor="genres" className="label">
                                <span className="label-text">Genre</span>
                            </label>
                            <select

                                id="genres"
                                name="genres"
                                required
                                className="select select-bordered w-full"

                            >
                                <option defaultValue={genres} disabled>
                                    Select a genre
                                </option>
                                <option value="Action">Action</option>
                                <option value="RPG">RPG</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Simulation">Simulation</option>
                                <option value="Platformer">Platformer</option>
                            </select>
                        </div>

                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type='submit' className="btn w-full bg-pink-500 text-white hover:bg-pink-600">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMyReview;