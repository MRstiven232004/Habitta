// Importamos los estilos CSS específicos para la barra de navegación.
import "./navbar.css";
// Importamos la imagen del logo desde la carpeta de recursos.
import logoSF from "../../assets/images/logoSF.png";
// Importamos herramientas de 'react-router-dom' para manejar la navegación entre páginas.
// 'Link' nos permite crear enlaces y 'useLocation' nos dice en qué página estamos actualmente.
import { Link, useLocation } from "react-router-dom";
// Importamos el icono de notificaciones desde la carpeta pública.
import notificationIcon from "/public/notification-9-svgrepo-com.svg";

/**
 * Componente Navbar (Barra de Navegación)
 * Este componente muestra la barra superior que permite al usuario navegar por la aplicación.
 * Contiene el logo, los enlaces a las diferentes páginas, notificaciones y acciones de usuario.
 */
function Navbar() {
  // Obtenemos la información de la ubicación actual (la URL en la que estamos).
  // Esto nos sirve para saber qué botón del menú debe estar resaltado como "activo".
  const location = useLocation();

  // Renderizamos la estructura visual de la barra de navegación.
  return (
    // Contenedor principal de la barra de navegación.
    <nav className="navbar">
      {/* Contenedor interno que centra y organiza el contenido */}
      <div className="navbar__inner">
        {/* Sección del Logo: Al hacer clic lleva a la página de inicio */}
        <div className="navbar__logo">
          <Link to="/">
            <img
              src={logoSF}
              alt="Logo de Habitta"
              className="navbar__logo-img"
            />
          </Link>
        </div>

        {/* Sección de Enlaces de Navegación: Lista de páginas disponibles */}
        <nav className="navbar__links">
          <ul>
            {/* Botón de Inicio */}
            <li>
              <Link
                // Aplicamos la clase 'active' si la ruta actual es "/" (Inicio).
                // Esto cambia el estilo para mostrar al usuario dónde está.
                className={`navbar_link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                {/* Icono de la casa para Inicio */}
                <img
                  className="navbar_icon"
                  src="/src/presentation/assets/icons/UI/navbaricons/house-01-svgrepo-com.svg"
                  alt="Icono de inicio"
                />
                Inicio
              </Link>
            </li>

            {/* Botón de Propiedades */}
            <li>
              <Link
                // Si estamos en "/properties", resaltamos este enlace.
                className={`navbar_link ${location.pathname === "/properties" ? "active" : ""}`}
                to="/properties"
              >
                <img
                  className="navbar_icon"
                  src="/src/presentation/assets/icons/UI/navbaricons/glass-magnifier-search-zoom-alert-notification-svgrepo-com.svg"
                  alt="Icono de buscar propiedades"
                />
                Propiedades
              </Link>
            </li>

            {/* Botón de Favoritos */}
            <li>
              <Link
                // Si estamos en "/favorites", resaltamos este enlace.
                className={`navbar_link ${location.pathname === "/favorites" ? "active" : ""}`}
                to="/favorites"
              >
                <img
                  className="navbar_icon"
                  src="/src/presentation/assets/icons/UI/navbaricons/hearth-svgrepo-com.svg"
                  alt="Icono de favoritos"
                />
                Favoritos
              </Link>
            </li>

            {/* Botón de Herramientas */}
            <li>
              <Link
                // Si estamos en "/tools", resaltamos este enlace.
                className={`navbar_link ${location.pathname === "/tools" ? "active" : ""}`}
                to="/tools"
              >
                <img
                  className="navbar_icon"
                  src="/src/presentation/assets/icons/UI/navbaricons/calculator-svgrepo-com.svg"
                  alt="Icono de herramientas"
                />
                Herramientas
              </Link>
            </li>

            {/* Botón de Promociones */}
            <li>
              <Link
                // Si estamos en "/promotion", resaltamos este enlace.
                className={`navbar_link ${location.pathname === "/promotion" ? "active" : ""}`}
                to="/promotion"
              >
                <img
                  className="navbar_icon"
                  src="/src/presentation/assets/icons/UI/navbaricons/star-alt-4-svgrepo-com.svg"
                  alt="Icono de promociones"
                />
                Promociones
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sección de Notificaciones: Muestra un icono de campana */}
        <div id="notificationButton">
          <img
            id="notificationIcon"
            src={notificationIcon}
            alt="Notificaciones"
          />
        </div>

        {/* Sección de Acciones: Botón de publicar y perfil de usuario */}
        <div className="navbar__actions">
          {/* Botón para registrar una nueva propiedad */}
          <Link to="/registerpropeties" className="navbar__publish-btn">
            + Publicar
          </Link>
          {/* Botón del perfil del usuario (icono de persona) */}
          <button className="navbar__user-btn">
            <span>👤</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
