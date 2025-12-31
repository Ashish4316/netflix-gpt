import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute top-[25%] md:top-[30%] left-4 md:left-16 text-white z-10 max-w-xs md:max-w-2xl">
      <h1 className="text-2xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="hidden md:block text-sm md:text-base mb-6">{overview}</p>
      <div className="flex gap-3">
        <button className="bg-white text-black px-4 md:px-8 py-2 md:py-3 rounded font-semibold hover:bg-opacity-80 transition">
          Play
        </button>
        <button className="bg-gray-500 bg-opacity-70 text-white px-4 md:px-8 py-2 md:py-3 rounded font-semibold hover:bg-opacity-50 transition">
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle;
