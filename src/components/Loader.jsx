// Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        <img 
          src="./loader.png" // Replace with actual base64 of your logo
          alt="Loading..."
          className="w-24 h-24 animate-pulse"
        />
       
      </div>
    </div>
  );
};

export default Loader;