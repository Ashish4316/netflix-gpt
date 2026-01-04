import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-4 md:px-12 lg:px-20">
      {/* Netflix gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-xl lg:max-w-2xl mt-20 md:mt-0">
        {/* Title - Netflix style */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-shadow-lg text-white">
          {title}
        </h1>

        {/* Description - Netflix style */}
        <p className="hidden md:block text-base lg:text-lg text-gray-100 mb-8 md:mb-10 leading-relaxed max-w-lg line-clamp-3">
          {overview}
        </p>

        {/* Netflix-style buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
          {/* Play Button - Netflix exact style */}
          <button className="
            group
            flex items-center justify-center gap-2 
            bg-white hover:bg-gray-200
            text-black 
            px-6 md:px-8 py-3 md:py-4 
            rounded-md 
            font-semibold text-lg
            transition-all duration-200
            transform hover:scale-105
            shadow-2xl
            min-w-[140px]
          ">
            {/* Netflix play icon */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span className="tracking-wide">Play</span>
          </button>

          {/* More Info Button - Netflix exact style */}
          <button className="
            group
            flex items-center justify-center gap-2 
            bg-gray-600/70 hover:bg-gray-600/90 backdrop-blur-sm
            text-white 
            px-6 md:px-8 py-3 md:py-4 
            rounded-md 
            font-semibold text-lg
            transition-all duration-200
            transform hover:scale-105
            shadow-2xl
            min-w-[140px]
          ">
            {/* Netflix info icon */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            <span className="tracking-wide">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;