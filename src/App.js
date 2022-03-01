import './App.css';
import { useState, useEffect} from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';

const APIKEY="648661dc";
const APIURL ='http://www.omdbapi.com';

const fetchMovies = async (search = 'The godfather') => {
   if(search.length < 1){
      return;
   }
  const response = await fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search).then(res => res.json());
  console.log(response)
  const {Error: error , Search: movies, totalResults: totalCount } = response;
  return { error : error ?? '', movies, totalCount };
}

function App() {
     
   const [movies, setMovies] = useState([]);
   const [totalCount, setTotalCount] = useState(0);
   const [error, setError] = useState('');

   const callApi = async (search = "") => {
      const data = await fetchMovies(search);
      setError(data.error);
      if(!error.length){
         setMovies(data.movies);
         setTotalCount(data.totalCount);
      }else{
         setMovies([]);
         setTotalCount(0);
      }

   }
  useEffect(() => {

    callApi('Godfather');
    return () => {
     
    }
  }, []);

  return (
   <>
   <Navbar onSearchChange = {callApi}/>
    <div className="App container-fluid">
      <div className='row'>
         <h1 className='title'> MY FAVORITE MOVIES {totalCount ? '(' + totalCount + ')' : '' }</h1>
         {
            !error ? <MovieList movies = {movies} /> : <h2 className='red'> {error} </h2>
         }
      </div>   
    </div>
   </>
  );

}

export default App;