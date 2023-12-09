import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
export default function Details(){

    // some state
    // hold it here 

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
        <button
        data-testid="toList"
        onClick={goHome}
        >back to movie list</button>
        </div>
    )

}