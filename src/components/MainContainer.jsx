import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideBackground from "./VideBackground"

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingmovies);
    if (!movies || movies.length === 0) return null; // wait until movies loaded
    const mainMovie = movies[0];
    console.log(mainMovie);
    const{original_title,overview, id} = mainMovie;
    return (
        <div>
            <VideoTitle title = {original_title} overview = {overview}/>
            <VideBackground movieId = {id}/>
        </div>
    );
};
export default MainContainer;