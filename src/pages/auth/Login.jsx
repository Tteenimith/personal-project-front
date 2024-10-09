import React from "react";

const Login = () => {
  return (
    <div>
      
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-400 to-blue-500">
        <header className="flex flex-col items-center space-y-4">
          <img
            src="http://picsum.photos/500"
            alt="WAMS logo"
            className="w-16 h-16"
          />
          <h1 className="text-white text-3xl font-bold text-center">
            Warehouse Management
          </h1>
          <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-full">
            LOGIN
          </button>
        </header>

        <main className="flex flex-row space-x-6 mt-10">
          <img
            src="http://picsum.photos/1000"
            alt="Warehouse workers"
            className="w-48 h-32 rounded-lg shadow-lg"
          />
          <img
            src="http://picsum.photos/1100"
            alt="Warehouse shelves"
            className="w-48 h-32 rounded-lg shadow-lg"
          />
          <img
            src="http://picsum.photos/1200"
            alt="Warehouse goods"
            className="w-48 h-32 rounded-lg shadow-lg"
          />
        </main>
      </div>
      
    </div>
  );
};

export default Login;
