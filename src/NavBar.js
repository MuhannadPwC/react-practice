import { Link } from "react-router-dom";

const NavBar = () => {
  return ( 
    <nav className="navbar">
      <h1>Blooggers</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" className="btn">New Bloog</Link>
      </div>
    </nav>
  );
}
 
export default NavBar;