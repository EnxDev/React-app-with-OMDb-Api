import MovieItem from './MovieItem';

const MovieList = ({movies}) => {
   console.log(movies)
   return(         
      <div className="row">
         {
            movies.map( movie => <MovieItem key={movie.imdbID} movie = {movie} />)
         }
      </div>
   );
}

export default MovieList;