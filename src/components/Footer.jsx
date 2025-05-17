import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="bg-black text-white px-6 py-12">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    {/* <!-- Newsletter --> */}
    <div>
      <h2 class="text-lg font-semibold mb-4">Join a Newsletter</h2>
      <label class="label">
        <span class="text-sm">Your Email</span>
      </label>
      <div class="flex items-center gap-2 mb-4">
        <input type="email" placeholder="Enter Your Email" class="input input-bordered bg-neutral text-white w-full max-w-xs" />
        <button class="btn bg-pink-500 text-white hover:bg-pink-600">Subscribe</button>
      </div>
      <div class="flex gap-3 text-xl">
        <a class="hover:text-pink-500"><i class="fa-brands fa-dribbble"></i></a>
        <a class="hover:text-pink-500"><i class="fa-brands fa-behance"></i></a>
        <a class="hover:text-pink-500"><i class="fa-brands fa-instagram"></i></a>
        <a class="hover:text-pink-500"><i class="fa-brands fa-twitter"></i></a>
      </div>
    </div>

    {/* <!-- Quick Links --> */}
    <div>
      <h2 class="text-lg font-semibold mb-4">Quick Links</h2>
      <ul class="space-y-2 text-sm">
        <li><a class="hover:text-pink-500">Home</a></li>
        <li><a class="hover:text-pink-500">About Us</a></li>
        <li><a class="hover:text-pink-500">Services</a></li>
        <li><a class="hover:text-pink-500">Solutions</a></li>
        <li><a class="hover:text-pink-500">Blog</a></li>
        <li><a class="hover:text-pink-500">Careers</a></li>
      </ul>
    </div>

    {/* <!-- Company --> */}
    <div>
      <h2 class="text-lg font-semibold mb-4">Company</h2>
      <ul class="space-y-2 text-sm">
        <li><a class="hover:text-pink-500">Our Story</a></li>
        <li><a class="hover:text-pink-500">Case Studies</a></li>
        <li><a class="hover:text-pink-500">Testimonials</a></li>
        <li><a class="hover:text-pink-500">Partners</a></li>
        <li><a class="hover:text-pink-500">FAQs</a></li>
      </ul>
    </div>
{/* 
    <!-- Brand Info --> */}
    <div>
      <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
        <span class="text-pink-500 text-2xl">◐</span> Pinka
      </h2>
      <p class="text-sm mb-4">
        Pinka is a cutting-edge AI technology platform designed to revolutionize the way businesses.
      </p>
      <p class="text-sm text-gray-400">AI Innovative Technology Website</p>
    </div>
  </div>

  {/* <!-- Divider --> */}
  <div class="divider my-8 opacity-20"></div>

  {/* <!-- Bottom row --> */}
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
    <p>AI Innovative Technology Website</p>
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-location-dot"></i>
        <span>Pinka Technologies, Inc. 1234 Innovation Drive, Suite 500</span>
      </div>
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-envelope"></i>
        <span>contact@pinka.ai</span>
      </div>
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-phone"></i>
        <span>+1 (800) 123–4567</span>
      </div>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;