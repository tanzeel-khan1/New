import React from "react";
import { useNavigate } from "react-router-dom";

     const Error = ({ code = "404", message = "Page Not Found" }) => {
  const navigate = useNavigate();

            const handleGoHome = () => {
          navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-600 mb-4">{code}</h1>
      <p className="text-2xl font-semibold mb-2">{message}</p>
      <p className="mb-6 text-gray-500">Sorry, You Land On Wrong Page</p>
      <button
        onClick={handleGoHome}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
        Go to Home
      </button>
    </div>
  );
};

export default Error;
