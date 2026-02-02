import Login from "./Login";
import Register from "./Register";
// Importamos un "hook" personalizado que maneja la lógica de la página de autenticación (estado, imágenes, etc.)
import { useAuthPage } from "./hooks/useAuthPage";
// Importamos los estilos específicos para esta página.
import "./Auth.css";

/**
 * Componente Auth (Página de Autenticación)
 * Este componente es el contenedor principal para el inicio de sesión y el registro.
 * Maneja el carrusel de fondo y las pestañas para cambiar entre Login y Registro.
 */
function Auth() {
  // Extraemos las variables y funciones que necesitamos desde nuestro hook personalizado.
  // activeTab: dice si estamos en 'login' o 'register'.
  // setActiveTab: función para cambiar entre pestañas.
  // currentImageIndex: índice de la imagen de fondo actual.
  // backgroundImages: lista de imágenes para el carrusel.
  const { activeTab, setActiveTab, currentImageIndex, backgroundImages } =
    useAuthPage();

  return (
    <div className="auth-container">
      {/* Carrusel de Fondo: Muestra imágenes que cambian automáticamente */}
      <div className="auth-carousel">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            // Añadimos la clase 'active' solo a la imagen actual para mostrarla con transición suave.
            className={`carousel-slide ${index === currentImageIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {/* Capa oscura para mejorar el contraste del texto sobre las imágenes */}
        <div className="carousel-overlay"></div>
      </div>

      {/* Tarjeta de Autenticación: El cuadro blanco central */}
      <div className="auth-card">
        <div className="auth-header">
          {/* Enlace para volver a la página de inicio */}
          <div className="home-link">
            <span className="home-icon">🏠</span>
            <a href="/">Volver al inicio</a>
          </div>
          <h1>Bienvenido a Habitta</h1>
          <p>Encuentra tu hogar ideal</p>
        </div>

        {/* Pestañas de Navegación (Login / Registro) */}
        <div className="auth-tabs">
          <button
            // Si la pestaña actual es 'login', le añadimos la clase 'active' para resaltarla.
            className={`tab-button ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Iniciar Sesión
          </button>
          <button
            // Si la pestaña actual es 'register', le añadimos la clase 'active'.
            className={`tab-button ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Registrarse
          </button>
        </div>

        {/* Contenido Dinámico: Muestra el formulario de Login o Registro según la pestaña elegida */}
        <div className="auth-content">
          {activeTab === "login" ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
}

export default Auth;
