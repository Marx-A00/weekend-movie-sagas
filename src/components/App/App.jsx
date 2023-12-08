import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Details from "../Details/Details";
function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Router>
        <Header />

        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/Details">

          <Details />

        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
