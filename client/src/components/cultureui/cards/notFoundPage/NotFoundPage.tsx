import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404 Error</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-6">Under maintenance</h2>
      <p className="text-center text-gray-500 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved. Try searching our site.
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-64 h-64 text-gray-300 mt-8"
        viewBox="0 0 200 200"
        fill="none"
      >
        <text x="65" y="100" fontSize="80" fontWeight="bold" fill="currentColor">
          404
        </text>
      </svg>
    </div>
  );
};

export default NotFoundPage;
