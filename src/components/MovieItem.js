const MovieItem = ({movie}) => {

   return (

      <div className="card" style={{width: '18rem'}}>
        <img src={movie.Poster} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <a href={'movies/' + movie.imdbID} className="btn btn-primary">View Detail</a>
        </div>
      </div>
   );
}

export default MovieItem;