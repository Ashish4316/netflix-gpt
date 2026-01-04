import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMoveTrailer';


const VideBackground = ({ movieId }) => {
  const store = useSelector((store) => store.movies);
  useMovieTrailer(movieId);

  return (
    <div className="relative w-screen h-[80vh] md:h-[95vh] overflow-hidden">
      {/* Background Video */}
      <iframe
        className="absolute top-0 left-0 w-full h-full scale-125 object-cover -z-10"
        src={`https://www.youtube.com/embed/${store.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${store.key}&modestbranding=1&rel=0`}
        title="YouTube video player"
        allow="encrypted-media"
      />

      {/* Dark Netflix Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
    </div>
  );
};

export default VideBackground;
