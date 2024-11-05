"use client";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center px-6 md:px-12 py-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-9xl font-bold text-blue-500">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
          Oops! Page not found.
        </p>
        <p className="text-gray-500 mt-2">
          The page you’re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          className="inline-block mt-6 px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
          href="/"
        >
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
