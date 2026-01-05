import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMoveTrailer";
import { background } from "../utils/constant";

const VideBackground = ({ movieId }) => {
  const store = useSelector((s) => s.movies);
  const trailerKey = store?.key;
  useMovieTrailer(movieId);

  // if there's no trailer key don't render anything
  if (!trailerKey) return null;

  return (
    <div className="relative w-full max-w-full h-[80vh] md:h-[95vh] overflow-hidden">
      {/* Background Video - enlarge & center so it always covers parent */}
      <iframe
        // cover the parent: make iframe larger than container and center to crop edges
        className="absolute pointer-events-none -z-10"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}&modestbranding=1&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '180%',          // keep width as-is
          height: '220%',         // increased height to cover taller viewports
          transform: 'translate(-50%, -50%)',
          border: 0,
          filter: 'brightness(1.08) contrast(1.03) saturate(1.04)'
        }}
      />

      {/* lighter overlay so video remains visible but not too dark */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/6 to-transparent" />
    </div>
  );
};

export default VideBackground;
