import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';

const APIKEY="648661dc";
const APIURL ='http://www.omdbapi.com';

const fetchMovies = async (search = 'The godfather') => {
  const response = await fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search).then(res => res.json());
  console.log(response)
  const { Search: movies, totalResults: totalCount } = response;
  return { movies, totalCount };
}


function App() {
     
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const callApi = async () => {
      const data = await fetchMovies();
      setMovies(data.movies);
      setTotalCount(data.totalCount);
    }
    callApi();
    return () => {
     
    }
  }, []);

  return (
   <>
   <NavBar />
    <div className="App container-fluid">
      <header className="App-header">
         <h1> MY FAVORITE MOVIES</h1>
         <MovieList movies={movies} />
      </header>
    </div>
   </>
  );

}

export default App;