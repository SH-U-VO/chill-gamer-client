import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-white px-6 py-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    {/* <!-- Newsletter --> */}
    <div>
      <h2 className="text-lg font-semibold mb-4">Join a Newsletter</h2>
      <label className="label">
        <span className="text-sm">Your Email</span>
      </label>
      <div className="flex items-center gap-2 mb-4">
        <input type="email" placeholder="Enter Your Email" className="input input-bordered bg-neutral text-white w-full max-w-xs" />
        <button className="btn bg-pink-500 text-white hover:bg-pink-600">Subscribe</button>
      </div>
      <div className="flex gap-3 text-xl">
        <a className="hover:text-pink-500"><i className="fa-brands fa-dribbble"></i></a>
        <a className="hover:text-pink-500"><i className="fa-brands fa-behance"></i></a>
        <a className="hover:text-pink-500"><i className="fa-brands fa-instagram"></i></a>
        <a className="hover:text-pink-500"><i className="fa-brands fa-twitter"></i></a>
      </div>
    </div>

    {/* <!-- Quick Links --> */}
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

    {/* <!-- Company --> */}
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
{/* 
    <!-- Brand Info --> */}
    <div>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span className="text-pink-500 text-2xl">◐</span> Pinka
      </h2>
      <p className="text-sm mb-4">
        Pinka is a cutting-edge AI technology platform designed to revolutionize the way businesses.
      </p>
      <p className="text-sm text-gray-400">AI Innovative Technology Website</p>
    </div>
  </div>

  {/* <!-- Divider --> */}
  <div className="divider my-8 opacity-20"></div>

  {/* <!-- Bottom row --> */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
    <p>AI Innovative Technology Website</p>
    <div className="flex items-center gap-4">
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

        </div>
    );
};

export default Footer;