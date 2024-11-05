import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-violet-600 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section - Copyright & Brand */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="text-sm md:text-base">
            &copy; 2024 DevJobs. All rights reserved.
          </div>
          <Link
            className="text-white font-semibold text-2xl md:text-3xl hover:text-gray-200 transition duration-300"
            href="/"
          >
            DevJobs
          </Link>
        </div>

        {/* Right Section - Subscription Form */}
        <form className="flex items-center space-x-2 w-full md:w-auto">
          <input
            type="email"
            name="email"
            placeholder="Subscribe to get notified"
            className="w-full md:w-64 px-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-300 transition duration-300"
          />
          <button
            type="submit"
            className="bg-gray-200 text-violet-600 px-6 py-2 rounded-full hover:bg-gray-300 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
