import React from 'react';
import { useNavigate } from 'react-router-dom'; // This is used for routing if using react-router

const HomePage = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation
  
  // Function to handle back navigation
  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Back button */}
      <button 
        onClick={handleBack} 
        className="absolute top-4 left-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none">
        ← Back
      </button>

      {/* Main content */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to the Homepage</h1>
        <p className="text-gray-600 mb-8">This is your homepage content.</p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default HomePage;
