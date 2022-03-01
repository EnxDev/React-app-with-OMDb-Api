import { useState } from "react";

export const SearchBar = ({onSearchChange}) => {
   const [search, setSearch] = useState('');

   const manageSearch = ({target}) => {
      const s = target.value.trim();
      setSearch(s)
      if(s.length > 1){
         onSearchChange(s);
      }
   }
    const searchMovies = (evt) =>{
        evt.preventDefault();
         if (search.length > 1) {
            onSearchChange(search)
        }
    }

   return(
      <div className="d-flex">
         <input className="form-control me-2" name="search" value={search} onChange={manageSearch} type="search" placeholder="Search"  aria-label="Search" />
         <a id="searchclear" className="glyphicon glyphicon-remove-circle form-control-feedback form-control-clear" style={{pointerEvents: 'auto', textDecoration: 'none', cursor: 'pointer'}}></a>  
         <button  onClick = {searchMovies} className="btn btn-outline-success" type="submit">Search</button>
      </div>
   );
}

export default SearchBar;