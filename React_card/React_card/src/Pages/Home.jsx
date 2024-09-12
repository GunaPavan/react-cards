import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
  return (
    <div className="w-full  bg-hero-pattern min-h-screen  flex flex-col justify-center items-center">
        <h1 className="text-6xl font-sans text-white font-extrabold">Study in Top European Countries</h1>
        <button onClick={() => navigate("/cards")} className="flex gap-3 items-center text-lg font-sans text-black bg-white px-5 mt-20 py-3 rounded-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] font-medium">Get Started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</button>
    </div>
  );
}
