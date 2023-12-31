import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

export default function Details(){

    // some state
    // hold it here 


    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);
    console.log("details",Object.values(details));


    
    // when I tap into a movie, I should make a get request, where I specifically
    //query for the movie X genre 
    const dispatch = useDispatch();
    const history = useHistory();

    const goHome = () =>{
        history.goBack();

    }

    const fetchMovieDetails = ()=>{
        dispatch({
            type: "SAGA/FETCH_MOVIE_DETAILS"
        })
    }

    return(
        <div data-testid="movieDetails">

        <h1>Movie Title: </h1>

        <p>{details.movieTitle}</p>
        <img
        src={details.movieImage}></img>
        <h1>Description</h1>

        <p>{details.movieDescription}</p>
        <h1>Genres:</h1>
        {genres.map(genre =>{
            return(
                <p>{genre.movie_genre}</p>
            )
        })}


        <button
        data-testid="toList"
        onClick={goHome}
        >back to movie list</button>
        </div>
    )

}