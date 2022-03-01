import MovieItem from './MovieItem';

const MovieList = ({movies}) => {
                     console.log(movies);

   return(   
      <div className='container'>      
         <div className="row">
               {
                  movies ? movies.map( movie => <MovieItem key={movie.imdbID} movie = {movie} />) : ''
               }
         </div>
      </div>   
   );
}

export default MovieList;