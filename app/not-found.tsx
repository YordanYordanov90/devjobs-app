import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-lg mt-4 text-gray-600">Page Not Found</p>
        <p className="text-sm text-gray-500 mt-2">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          className="mt-6 inline-block px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
          href="/"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
