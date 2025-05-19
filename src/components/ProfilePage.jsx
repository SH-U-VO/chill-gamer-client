import React from 'react';
import profile from '../assets/profile.png';
import { FaArrowUp } from "react-icons/fa";

const ProfilePage = () => {
    return (
        <div>
            <div className=" flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="flex-1 lg:w-1/2 flex items-center justify-center lg:min-h-0 relative">
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                    {/* Glass Button */}
                    <a
                        href="/myReview"
                        className="absolute bottom-20 left-20 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-sm rounded-xl hover:bg-white/30 transition-all duration-200"
                    >
                        My Reviews
                        {/* Avatar */}
                        <div className="avatar-group -space-x-6 mt-3">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                                </div>
                            </div>
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-12">
                                    <span>+99</span>
                                </div>
                            </div>
                        </div>
                        {/* Arrow Icon */}
                        <FaArrowUp className="absolute text-pink-400 top-2 right-2 rotate-45" />
                    </a>
                </div>
                {/* Text Section */}
                <div className="flex-1 lg:w-1/2 flex flex-col items-center justify-center min-h-[300px] lg:min-h-0">
                    <div className="text-center px-4">
                        {/* Heading */}
                        <h2 className="text-4xl lg:text-4xl font-bold mb-4">My Name</h2>
                        {/* Subheading */}
                        <p className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto">
                            We're committed to pushing the boundaries of what's possible
                            through the power of technology. Our AI-driven solutions are
                            designed to fuel growth.
                        </p>
                        {/* Button */}
                        <a
                            href="/addReview"
                            className="mt-8 inline-block px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors duration-300"
                        >
                            Add Review
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;