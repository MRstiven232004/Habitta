import "./navbar.css";
import logoSF from "../../assets/images/logoSF.png";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <div className="navbar__logo">
          <img src={logoSF} alt="Habitta logo" className="navbar__logo-img" />
        </div>
        {/* Navigation Links */}
        <nav className="navbar__links">
          <ul>
            <li>
              <Link to="/src/pages/home/Home.tsx">Inicio</Link>
            </li>
            <li>
              <Link to="/src/pages/properties/Properties.tsx">Propiedades</Link>
            </li>
            <li>
              <Link to="/">Favoritos</Link>
            </li>
            <li>
              <Link to="/">Herramientas</Link>
            </li>
          </ul>
        </nav>

        {/* Publish and User Icons */}
        <div className="navbar__actions">
          <button className="navbar__publish-btn">
            <li>
              <Link to ="/src/pages/registerpropeties/RegisterPropeties.tsx">+Publicar</Link>
              </li>
          </button>
          <button className="navbar__user-btn">
            <span>👤</span>
          </button>
        </div>
      </div>
      <Outlet></Outlet>
    </nav>
  );
}

export default Navbar;
