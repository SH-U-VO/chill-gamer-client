import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 py-12">
            {/* Grid Section */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                
                {/* Newsletter */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Join a Newsletter</h2>
                    <label className="label">
                        <span className="text-sm">Your Email</span>
                    </label>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="input input-bordered bg-neutral text-white w-full sm:max-w-xs"
                        />
                        <button className="btn bg-[#B26793] text-white hover:bg-pink-600 w-full sm:w-auto">
                            Subscribe
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xl">
                        <a className="hover:text-pink-500"><i className="fa-brands fa-dribbble"></i></a>
                        <a className="hover:text-pink-500"><i className="fa-brands fa-behance"></i></a>
                        <a className="hover:text-pink-500"><i className="fa-brands fa-instagram"></i></a>
                        <a className="hover:text-pink-500"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a className="hover:text-pink-500">Home</a></li>
                        <li><a className="hover:text-pink-500">About Us</a></li>
                        <li><a className="hover:text-pink-500">Services</a></li>
                        <li><a className="hover:text-pink-500">Solutions</a></li>
                        <li><a className="hover:text-pink-500">Blog</a></li>
                        <li><a className="hover:text-pink-500">Careers</a></li>
                    </ul>
                </div>

                {/* Company Info */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Company</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a className="hover:text-pink-500">Our Story</a></li>
                        <li><a className="hover:text-pink-500">Case Studies</a></li>
                        <li><a className="hover:text-pink-500">Testimonials</a></li>
                        <li><a className="hover:text-pink-500">Partners</a></li>
                        <li><a className="hover:text-pink-500">FAQs</a></li>
                    </ul>
                </div>

                {/* Brand Info */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-3">
                        <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
                        <span>Pinka</span>
                    </h2>
                    <p className="text-sm mb-4">
                        Pinka is a cutting-edge AI technology platform designed to revolutionize the way businesses.
                    </p>
                    <p className="text-sm text-gray-400">AI Innovative Technology Website</p>
                </div>
            </div>

            {/* Divider */}
            <div className="divider my-8 opacity-100"></div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:justify-between md:items-center text-sm text-gray-400">
                <p className="text-center md:text-left">AI Innovative Technology Website</p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center items-center text-center md:text-left">
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>Pinka Technologies, Inc. 1234 Innovation Drive, Suite 500</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-envelope"></i>
                        <span>contact@pinka.ai</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-phone"></i>
                        <span>+1 (800) 123–4567</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
