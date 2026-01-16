import "./navbar.css";
import logoSF from "../../assets/images/logoSF.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <div className="navbar__logo">
          <Link to="/" ><img src={logoSF} alt="Habitta logo" className="navbar__logo" /></Link>
        </div>

        {/* Navigation Links */}
        <nav className="navbar__links">
          <ul>
            <li className="navbar__link"><img className="navbar_icon" src="/src/assets/icons/home-1393-svgrepo-com.svg" alt="" />
              <Link to="/" >Inicio</Link>
            </li>
            <li className="navbar__link"> <img className="navbar_icon" src="/src/assets/icons/glass-magnifier-search-zoom-alert-notification-svgrepo-com.svg" alt="" />
              <Link to="/properties" >Propiedades</Link>
            </li>
            <li className="navbar__link"><img className="navbar_icon" src="/src/assets/icons/hearth-svgrepo-com.svg" alt="" />
              <Link to="/favorites" >Favoritos</Link>
            </li>
            <li className="navbar__link"> <img className="navbar_icon" src="/src/assets/icons/calculator-svgrepo-com.svg" alt="" />
              <Link to="/tools" >Herramientas</Link>
            </li>
            <li className="navbar__link"> <img className="navbar_icon" src="/src/assets/icons/star-alt-4-svgrepo-com.svg" alt="" />
              <Link to="/promotion" >Promociones</Link>
            </li>
          </ul>
        </nav>
        
        {/* Publish and User Icons */}
        <img id="notificationIcon" src="/src/assets/icons/notification-9-svgrepo-com.svg" alt="" />

        {/* Publish and User Icons */}
        <div className="navbar__actions">
          <Link to="/registerpropeties" className="navbar__publish-btn">
            +Publicar
          </Link>
          <button className="navbar__user-btn">
            <span>👤</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
