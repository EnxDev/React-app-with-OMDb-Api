import Menu from "./Menu";

export const NavBar = ({onSearchChange}) => {

   return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
            {/* Component Menù here */}
            <Menu onSearchChange = {onSearchChange} />
        </div>
      </nav>
   );
   
}
export default NavBar;