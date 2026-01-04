import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';
import { addVideoTailer } from '../utils/moviesSlice'
import { useDispatch} from 'react-redux';
const useMovieTrailer = (movieId) => {
    const dispatch  = useDispatch();
    const getMovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);
        const json = await data.json();
        const results = json.results;
        const idx = results.length - 1;
        const key = results[idx].key;
        dispatch(addVideoTailer(key));
    }
    useEffect(() => {
        getMovieTrailer();
    },[])
}

export default useMovieTrailer;