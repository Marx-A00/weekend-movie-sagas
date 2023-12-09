import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

  const navigateToMovieDetails=()=>{
    history.push('/Details');
  }
  
  const history = useHistory();
  const dispatch = useDispatch();
  
  // SELECTORS
  const movies = useSelector(store => store.movies);
  const genres = useSelector(store => store.genres);

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
              onClick={navigateToMovieDetails}
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
