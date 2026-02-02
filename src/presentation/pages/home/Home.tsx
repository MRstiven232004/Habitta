// Importamos 'useState' y 'useEffect' de React.
// 'useState' nos permite guardar datos que pueden cambiar (como el índice de la imagen actual).
// 'useEffect' nos permite ejecutar código automático, como el temporizador para cambiar imágenes.
import { useState, useEffect } from "react";

// Importamos el componente de tarjeta de propiedad para mostrar las destacadas.
import CardPropetie from "../../components/cardPropetie/Card_propietie";

// Importamos los estilos específicos para la página de inicio.
import "./home.css";

// 'Link' se usa para crear enlaces que navegan a otras partes de la app sin recargar la página.
import { Link } from "react-router-dom";

// Importamos iconos SVG para usarlos en las secciones de características y búsqueda.
import shieldIcon from "../../assets/icons/UI/shield-alt-1-svgrepo-com.svg";
import medallIcon from "../../assets/icons/UI/medal-ribbon-svgrepo-com.svg";
import peopleIcon from "../../assets/icons/UI/peoples-svgrepo-com.svg";
import timerIcon from "../../assets/icons/UI/timer-svgrepo-com.svg";
import searchIcon from "../../assets/icons/UI/navbaricons/glass-magnifier-search-zoom-alert-notification-svgrepo-com.svg";

// Importamos las imágenes que usaremos en el fondo del carrusel (slideshow).
// Estas imágenes están guardadas en nuestra carpeta de recursos.
import img1 from "../../assets/images/auth/dream_home_1.png";
import img2 from "../../assets/images/auth/dream_home_2.png";
import img3 from "../../assets/images/auth/dream_home_3.png";

// Creamos una lista (array) con todas las imágenes que vamos a mostrar en el fondo.
// Incluimos tanto las imágenes importadas como algunas URLs directas.
const backgroundImages = [
  img1,
  img2,
  img3,
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
];

/**
 * Componente Home (Página de Inicio)
 * Esta es la página principal que ven los usuarios al entrar.
 * Contiene el buscador principal, propiedades destacadas y razones para elegir la plataforma.
 */
function Home() {
  // 'currentImageIndex' guarda el número de la imagen que se está mostrando actualmente (0, 1, 2...).
  // 'setCurrentImageIndex' es la función que usamos para cambiar ese número.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Este efecto se ejecuta una vez al cargar la página para iniciar el cambio automático de imágenes.
  useEffect(() => {
    // Configuramos un temporizador que se dispara cada 5000 milisegundos (5 segundos).
    const timer = setInterval(() => {
      setCurrentImageIndex(
        // Calculamos el siguiente índice. El operador '%' (módulo) nos ayuda a volver al 0
        // cuando llegamos a la última imagen, creando un ciclo infinito.
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 5000);

    // Cuando el usuario sale de esta página, limpiamos el temporizador para no gastar recursos.
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Contenedor principal de la página de inicio */}
      <main className="home-container">
        {/* =========================================
            SECCIÓN HÉROE (Hero Section)
            Es la primera sección grande con la imagen de fondo y el buscador.
           ========================================= */}
        <section className="hero-section">
          {/* Carrusel de imágenes de fondo */}
          <div className="hero-slideshow">
            {/* Recorremos la lista de imágenes para crear un div para cada una */}
            {backgroundImages.map((image, index) => (
              <div
                key={index}
                // Si el índice coincide con el actual, le añadimos la clase clase 'active' para mostrarla.
                className={`hero-slide ${index === currentImageIndex ? "active" : ""}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
            {/* Capa oscura superpuesta para que el texto resalte sobre la imagen */}
            <div className="hero-overlay"></div>
          </div>

          {/* Contenido principal sobre la imagen (Texto y Buscador) */}
          <div className="hero-content">
            <h1>
              Encuentra tu <span className="text-primary">hogar ideal</span> en
              Latinoamérica
            </h1>
            <h3>
              Miles de propiedades esperándote. Compra, vende o alquila con la
              confianza que mereces.
            </h3>

            {/* TARJETA DE BÚSQUEDA (El cuadro blanco grande) */}
            <div className="search-card">
              {/* Pestañas para elegir tipo de operación */}
              <div className="search-tabs">
                <button className="tab active">Comprar</button>
                <button className="tab">Alquilar</button>
                <button className="tab">Vender</button>
              </div>

              {/* Campos de entrada de datos (Inputs) */}
              <div className="search-inputs">
                {/* Selector de tipo de propiedad */}
                <div className="input-group">
                  <label>Tipo de propiedad</label>
                  <select id="propertyType" name="propertyType" defaultValue="">
                    <option value="" disabled>
                      Selecciona
                    </option>
                    <option value="apartment">Apartamento</option>
                    <option value="house">Casa</option>
                    <option value="lot">Lote</option>
                  </select>
                </div>

                {/* Línea divisoria vertical estética */}
                <div className="divider"></div>

                {/* Campo de ubicación */}
                <div className="input-group flex-grow">
                  <label>Ubicación</label>
                  <input
                    id="location"
                    type="text"
                    placeholder="Ciudad, zona o código"
                  />
                </div>

                {/* Botón de buscar con icono */}
                <button className="search-btn">
                  <img
                    src={searchIcon}
                    alt="Search"
                    /* Invertimos el color del icono a blanco usando filtros CSS */
                    style={{
                      width: "20px",
                      height: "20px",
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                  Buscar
                </button>
              </div>

              {/* Etiquetas de búsquedas populares para acceso rápido */}
              <div className="popular-searches">
                <span className="label">Búsquedas populares:</span>
                <div className="tags">
                  <button>Apartamentos en Bogotá</button>
                  <button>Casas en Medellín</button>
                  <button>Oficinas Santiago</button>
                  <button>Casas Medellín</button>
                </div>
              </div>
            </div>

            {/* ESTADÍSTICAS RÁPIDAS (Números debajo del buscador) */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">25,000+</span>
                <span className="stat-label">Propiedades</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Ciudades</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50,000+</span>
                <span className="stat-label">Usuarios activos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12,000+</span>
                <span className="stat-label">Transacciones exitosas</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SECCIÓN PROPIEDADES DESTACADAS
            Muestra una selección de inmuebles importantes.
           ========================================= */}
        <section className="section-container prominent-section">
          <div className="section-header">
            <h4>Propiedades destacadas</h4>
            <h5>
              Descubre las mejores oportunidades inmobiliarias seleccionadas
              especialmente para ti
            </h5>
          </div>

          {/* Componente que renderiza las tarjetas de propiedades */}
          <CardPropetie />

          <div className="center-btn">
            <Link to="/properties" className="primary-btn-outline">
              Ver todas las propiedades
            </Link>
          </div>
        </section>

        {/* =========================================
            SECCIÓN CARACTERÍSTICAS (¿Por qué elegirnos?)
            Iconos y texto explicando los beneficios.
           ========================================= */}
        <section className="section-container features-section">
          <div className="section-header">
            <h4>¿Por qué elegir Habitta?</h4>
            <h5>
              La plataforma inmobiliaria más confiable de Latinoamérica,
              respaldada por tecnología y experiencia
            </h5>
          </div>

          <div className="features-grid">
            {/* Tarjeta de beneficio 1: Verificación */}
            <div className="feature-card">
              <div className="icon-box">
                <img
                  src={shieldIcon}
                  alt="Verificado"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <h3>Verificación garantizada</h3>
              <p>
                Todas las propiedades y usuarios pasan por un riguroso proceso
                de verificación
              </p>
            </div>

            {/* Tarjeta de beneficio 2: Asesoría */}
            <div className="feature-card">
              <div className="icon-box">
                <img
                  src={medallIcon}
                  alt="Experto"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <h3>Asesoría especializada</h3>
              <p>
                Contamos con expertos inmobiliarios en cada país para guiarte en
                tu decisión
              </p>
            </div>

            {/* Tarjeta de beneficio 3: Comunidad */}
            <div className="feature-card">
              <div className="icon-box">
                <img
                  src={peopleIcon}
                  alt="Comunidad"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <h3>Comunidad confiable</h3>
              <p>
                Miles de usuarios satisfechos que han encontrado su hogar ideal
                con nosotros
              </p>
            </div>

            {/* Tarjeta de beneficio 4: Soporte */}
            <div className="feature-card">
              <div className="icon-box">
                <img
                  src={timerIcon}
                  alt="Soporte"
                  style={{ width: "60px", height: "60px" }}
                />
              </div>
              <h3>Soporte 24/7</h3>
              <p>
                Nuestro equipo está disponible las 24 horas para resolver tus
                dudas
              </p>
            </div>
          </div>

          {/* Barra de certificaciones (logotipos de seguridad) */}
          <div className="certifications-bar">
            <span className="cert-label">
              Certificaciones y reconocimientos
            </span>
            <div className="cert-logos">
              <span className="cert-item">ISO 27001</span>
              <span className="cert-item">SSL Secured</span>
              <span className="cert-item">GDPR Compliant</span>
              <span className="cert-item">Trusted Partner</span>
            </div>
          </div>
        </section>

        {/* =========================================
            SECCIÓN DE LLAMADA A LA ACCIÓN (CTA)
            Invita al usuario a registrarse al final de la página.
           ========================================= */}
        <section className="cta-section">
          {/* Fondo animado también para esta sección */}
          <div className="cta-slideshow">
            {backgroundImages.map((image, index) => (
              <div
                key={`cta-${index}`}
                className={`cta-slide ${index === currentImageIndex ? "active" : ""}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
            <div className="cta-overlay"></div>
          </div>

          <div className="cta-content">
            <h1>¿Listo para encontrar tu próximo hogar?</h1>
            <h3>
              Únete a miles de personas que ya han encontrado su propiedad
              ideal. Crear tu cuenta es gratis y solo toma unos minutos.
            </h3>

            {/* Acciones del CTA: Botón e Input */}
            <div className="cta-actions">
              <Link to="/properties" className="cta-primary-btn">
                Crear cuenta gratis <span>→</span>
              </Link>
              <div className="cta-input-group">
                <input type="email" placeholder="Tu correo electrónico" />
              </div>
            </div>

            {/* Tarjetas informativas sobre versiones Web y Móvil */}
            <div className="app-cards-grid">
              <div className="app-card">
                <div className="app-icon"></div>
                <div className="app-info">
                  <strong>Versión Web</strong>
                  <span>Accede desde cualquier navegador</span>
                </div>
              </div>
              <div className="app-card">
                <div className="app-icon"></div>
                <div className="app-info">
                  <strong>App Móvil</strong>
                  <span>Próximamente en App Store y Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
