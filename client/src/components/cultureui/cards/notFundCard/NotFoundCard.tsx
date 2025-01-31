import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      {/* Título */}
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404 Error</h1>
      <h2 className="text-xl font-medium text-gray-600 mb-6">Under maintenance</h2>
      
      {/* Descripción */}
      <p className="text-center text-gray-500 max-w-md mb-12">
        Sorry, the page you are looking for doesn’t exist or has been moved. Try searching our site.
      </p>      
    </div>
  );
};

export default NotFoundPage;



