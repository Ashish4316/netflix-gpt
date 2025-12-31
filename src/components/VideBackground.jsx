import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addVideoTailer } from '../utils/moviesSlice'
import appStore from '../utils/appStore';

const VideBackground = ({movieId}) => {
  const dispatch  = useDispatch();
  const store = useSelector((store) => store.movies)

  const getMovieTrailer = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);
    const json = await data.json();
    const results = json.results;
    console.log(results);
    const idx = results.length - 1;
    const key = results[idx].key;
    dispatch(addVideoTailer(key));
  }
  useEffect(() => {
    getMovieTrailer();
  },[])
  return (
    <div>
      <iframe width="560" height="315" 
      src= {`https://www.youtube.com/embed/${store.key}?si=7CiHfP_6LJY5orr7`} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 

      >
      </iframe>  
    </div>
  )
}

export default VideBackground;

