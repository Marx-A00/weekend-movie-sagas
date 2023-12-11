import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

  const navigateToMovieDetails=(movieTitle,movieImage,id,movieDescription)=>{
    // when I call this function, I want to basically dispatch set movie details 
    // and then just grab that with a selector in details

  

    dispatch({
      type: "SAGA/FETCH_MOVIE_DETAILS",
      payload: movieTitle,movieImage,id
    })

    dispatch({
      type: "SET_MOVIE_TITLE",
      payload: {movieTitle,movieImage,movieDescription}
    })

    history.push('/Details');
  }
  
  const history = useHistory();
  const dispatch = useDispatch();
  
  // SELECTORS
  const movies = useSelector(store => store.movies);
  const genres = useSelector(store => store.genres);

  // for displaying all movies and getting all genres on page load
  useEffect(() => {
    getAllMovies();

  }, []);
  const getAllMovies = () =>{
    dispatch({
       type: 'FETCH_MOVIES'
       });
  };

  // const getAllGenres = ()=>{
  //   dispatch({
  //     type: 'FETCH_GENRES'
  //   });
  // };

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
              onClick={()=>
              navigateToMovieDetails(movie.title,movie.poster,movie.id,movie.description)}
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
