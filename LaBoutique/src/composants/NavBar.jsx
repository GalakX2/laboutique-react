import { NavLink, Link, Outlet } from "react-router";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* 1. Logo/Marque */}
      <div className="navbar-logo">
        <Link to="/">
          <span className="logo-text">LaBoutique</span>
        </Link>
      </div>

      {/* 2. Menu de Navigation */}
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Accueil
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/produits" className="navbar-link">
            Produits
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/categories" className="navbar-link">
            Catégories
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
