// Importamos el Navbar y el Footer, que son componentes comunes en casi todas las páginas.
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

// 'Outlet' es un componente especial de React Router que actúa como un marcador de posición.
// Aquí es donde se dibujarán las páginas hijas (Home, Properties, etc.) según la ruta actual.
// 'useLocation' nos dice en qué URL estamos.
import { Outlet, Link, useLocation } from "react-router-dom";

// Estilos específicos para el diseño general.
import "./Layout.css";

/**
 * Componente Layout (Diseño Base)
 * Este componente define la estructura principal de la aplicación.
 * Generalmente incluye la Barra de Navegación arriba, el contenido en medio y el Footer abajo.
 */
export default function Layout() {
  // Obtenemos la ubicación actual.
  const location = useLocation();

  // Verificamos si estamos en la página de autenticación ("/auth").
  // Esto es útil para ocultar el Navbar y el Footer en esa página específica si así lo deseamos.
  const isAuthPage = location.pathname === "/auth";

  return (
    <>
      {/* Mostramos el Navbar solo si NO estamos en la página de autenticación */}
      {!isAuthPage && <Navbar />}

      {/* Contenedor principal donde cambiará el contenido de las páginas */}
      <main style={{ width: "100%", boxSizing: "border-box" }}>
        {/* 'Outlet' renderiza el componente correspondiente a la ruta actual (ej. Home o Properties) */}
        <Outlet />
      </main>

      {/* Mostramos el Footer solo si NO estamos en la página de autenticación */}
      {!isAuthPage && <Footer />}

      {/* 
        Botón Flotante de Autenticación 
        Solo lo mostramos cuando NO estamos ya en la página de autenticación.
        Permite ir rápidamente al Login/Registro.
      */}
      {!isAuthPage && (
        <Link to="/auth" className="floating-auth-button">
          {/* Icono de usuario SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </Link>
      )}
    </>
  );
}
