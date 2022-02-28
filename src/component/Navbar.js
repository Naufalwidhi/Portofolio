import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <span class="navbar-brand">My Portofolio</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <NavLink exact={true} activeClassName={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink exact={true} activeClassName={({ isActive }) => (isActive ? "active" : "")} to="/About" className="nav-link">
              About
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink exact={true} activeClassName={({ isActive }) => (isActive ? "active" : "")} to="/Experience" className="nav-link">
              Experience
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink exact={true} activeClassName={({ isActive }) => (isActive ? "active" : "")} to="/Projects" className="nav-link">
              Projects
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink exact={true} activeClassName={({ isActive }) => (isActive ? "active" : "")} to="/Contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
