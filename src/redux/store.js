import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_GENRES", fetchAllGenres);
  //uncomment once details is ready
  // yield takeEvery("SAGA/FETCH_MOVIE_DETAILS",fetchMovieDetails);
}

// SAGA FETCH FUNCTIONS------------------------------------------------------------


// Need to make this get genre somehow
// probably server side when you send that hoe back or maybe even here
// write it in selecta 

// function* fetchMovieDetails(){
//   try{
//     const movieDetailsResponse = yield axios.get('/api/movies');
//     console.log(movieDetailsResponse);

//     yield put({
//       type:'SET_MOVIES',
//       payload: movieDetailsResponse.data
//     })
//   }
//   catch(error){
//     console.log('fetchMovieDetails error:', error)
//   }
// }

function* fetchAllGenres() {
  try {
    const genreResponse = yield axios.get("/api/genres");

    yield put({
      type: "SET_GENRES",
      payload: genreResponse.data,
    });
  } catch (error) {
    console.log("fetchAllGenres", error);
  }
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get("/api/movies");
    // Set the value of the movies reducer:
    yield put({
      type: "SET_MOVIES",
      payload: moviesResponse.data,
    });
  } catch (error) {
    console.log("fetchAllMovies error:", error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// REDUCERS----------------------------------------------------------------------

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};
const details = (state = {}, action) => {
  switch (action.type) {
    case "SET_MOVIE_DETAILS":
      return action.payload;
  }
  return state;
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,

    // details,
    // uncomment this once details is made
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
