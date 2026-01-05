import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import VideBackground from './VideBackground'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingmovies ?? [])
  const firstMovie = movies[0]

  return (
    <section className="bg-black relative">
      {/* Hero section with video background */}
      {firstMovie && (
        <div className="relative w-full h-[80vh] md:h-[95vh] overflow-hidden">
          <VideBackground movieId={firstMovie.id} />
        </div>
      )}

      {/* Movie lists with left padding and negative top margin to overlap */}
      <div className="-mt-200 relative z-20 space-y-8 pb-12 pl-6 md:pl-12">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Trending Movies"} movies={movies} />
        <MovieList title={"Upcoming Movies"} movies={movies} />
        <MovieList title={"Horror Movies"} movies={movies} />
        <MovieList title={"Popular"} movies={movies} />
      </div>
    </section>
  )
}

export default SecondaryContainer;
