import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">BuildGram</h1>

      <Link to="/">Home</Link>
    </nav>
  );
}

export default Navbar;