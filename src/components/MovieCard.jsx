import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-40 md:w-48 shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer">
      <img 
        src={IMG_CDN_URL + posterPath} 
        alt="movie poster"
        className="w-full h-auto rounded-md shadow-lg"
      />
    </div>
  )
}

export default MovieCard
