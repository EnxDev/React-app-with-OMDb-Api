import SearchBar from "./Searchbar";

export const Menu = ({onSearchChange}) => {
   return(
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/movies">Movies</a>
         </li>
      </ul>
      {/* Search bar here */}
      <SearchBar onSearchChange={onSearchChange} />
      </div> 
   );
}

export default Menu;