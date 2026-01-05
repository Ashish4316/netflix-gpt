import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
    if(!Array.isArray(movies) || movies.length === 0){
      return null;
    }
  return (
    <div className="px-4 md:px-8">
      <h1 className="text-2xl md:text-3xl py-4 text-white font-semibold">{title}</h1>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4">
            {movies.slice(1).map((movie,index) => (
                <MovieCard key={movie.id ?? index} posterPath={movie.poster_path}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList;
