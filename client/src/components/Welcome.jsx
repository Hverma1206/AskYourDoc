import React, { useState } from "react";
import { Link } from "react-router-dom";
import PDFWidget from "./PDFWidget";

const Welcome = () => {

  return (
    <div id="home" className="relative flex flex-col items-center justify-center h-full max-w-7xl mx-auto">
      {/* Welcome message */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_#E2745B_0%,_transparent_60%)] blur-3xl opacity-50 -top-30 left-150 z-0"></div>

      <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_#1E90FF_0%,_transparent_35%)] blur-3xl opacity-30 top-90 left-50 z-0"></div>

      <div className="flex gap-10 -ml-30 -mt-20">
        {/* Subheading */}
        <div className="relative text-left mt-20">
          <h1 className="text-7xl text-[#FF8163] font-bold">Ask. Read.</h1>
          <h1 className="text-7xl text-white font-bold">Understand.</h1>
          <p className="text-[#D6C7BA] text-2xl mb-10 max-w-2xl mt-4">
            Upload documents, get instant answers, and master your knowledge
            effortlessly.
          </p>
          <Link
            to="/chat"
            className="text-base bg-[#FF8163] text-white px-6 py-4 rounded-full border/10 border-gray-300 font-medium hover:opacity-90 transition"
          >
            Go to Conversation
          </Link>
        </div>
        <div className="z-10">
          <PDFWidget />
        </div>
        
      </div>
    </div>
  );
};

export default Welcome;
