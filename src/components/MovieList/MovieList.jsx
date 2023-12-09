import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

  const navigateToMovieDetails=(movieTitle,movieImage)=>{
    // when I call this function, I want to basically dispatch set movie details 
    // and then just grab that with a selector in details

    console.log("title:",movieTitle);
    console.log("image:",movieImage);

    // history.push('/Details');
  }
  
  const history = useHistory();
  const dispatch = useDispatch();
  
  // SELECTORS
  const movies = useSelector(store => store.movies);
  const genres = useSelector(store => store.genres);

  // for displaying all movies and getting all genres on page load
  useEffect(() => {
    getAllMovies();
    getAllGenres();

  }, []);
  const getAllMovies = () =>{
    dispatch({
       type: 'FETCH_MOVIES'
       });
  };

  const getAllGenres = ()=>{
    dispatch({
      type: 'FETCH_GENRES'
    });
  };

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img
              data-testid="toDetails"
              onClick={()=> navigateToMovieDetails(movie.poster,movie.title)}
               src={movie.poster}
               alt={movie.title}/>
            </div>
          );
        })}
      </section>
    </main>

  );
}


export default MovieList;
