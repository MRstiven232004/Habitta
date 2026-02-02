// Importamos los estilos de la sección de promociones.
import "./promotion.css";

/**
 * Componente Promotion (Planes de Publicación)
 * Muestra las diferentes opciones que tienen los usuarios para destacar sus propiedades.
 * Compara los beneficios del plan gratuito vs el plan premium.
 */
function Promotion() {
  return (
    <div className="promotion-container">
      <h1 className="promotion-title">Planes de Publicación</h1>
      <p className="promotion-subtitle">
        Aumenta la visibilidad de tu propiedad
      </p>

      <div className="promotion-cards">
        {/* =========================================
            TARJETA 1: PLAN BÁSICO (Gratuito)
           ========================================= */}
        <div className="promotion-card basic">
          <h2>Publicación Básica</h2>
          <p className="price">$0 por 30 días</p>
          <ul className="feature-list">
            <li>
              <span className="check basic">✔</span> Publicación por 30 días
            </li>
            <li>
              <span className="check basic">✔</span> Hasta 7 fotos
            </li>
            <li>
              <span className="check basic">✔</span> Aparece en búsquedas
            </li>
          </ul>
          <button className="select-button orange">Seleccionar Plan</button>
        </div>

        {/* =========================================
            TARJETA 2: PLAN DESTACADO (Pago)
           ========================================= */}
        <div className="promotion-card featured">
          <h2>Publicación Destacada</h2>
          <p className="price">$199 por 30 días</p>
          <ul className="feature-list">
            <li>
              <span className="check featured">✔</span> Publicación por 30 días
            </li>
            <li>
              <span className="check featured">✔</span> Hasta 15 fotos
            </li>
            <li>
              <span className="check featured">✔</span> Aparece como destacada
            </li>
            <li>
              <span className="check featured">✔</span> Mayor visibilidad
            </li>
            <li>
              <span className="check featured">✔</span> Etiqueta de destacado
            </li>
          </ul>
          <button className="select-button teal">Seleccionar Plan</button>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
