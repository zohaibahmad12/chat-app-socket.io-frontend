import { useState } from "react";

const WelcomeMessage = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 h-full text-white overflow-hidden">
      <h1 className="text-4xl font-bold mb-2 animate-fadeIn">Welcome to TALKY!</h1>
      <p className="text-lg text-gray-200 mb-8 animate-fadeIn delay-200">Select a chat to start messaging.</p>
      <div className="mt-6 animate-bounce">
        <svg className="w-10 h-10 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default WelcomeMessage;
