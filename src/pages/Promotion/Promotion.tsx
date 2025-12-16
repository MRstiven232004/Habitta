import "./promotion.css";
<<<<<<< Updated upstream
=======
import { useNavigate } from "react-router-dom";

>>>>>>> Stashed changes
function Promotion() {
  const navigate = useNavigate();

  return (
    <div className="promotion-container">
      <h1 className="promotion-title">Planes de Publicación</h1>
      <p className="promotion-subtitle">Aumenta la visibilidad de tu propiedad</p>

      <div className="promotion-cards">
        {/* Publicación Básica */}
        <div className="promotion-card basic">
          <h2>Publicación Básica</h2>
          <p className="card-description">Publicación estándar de tu propiedad</p>
          <p className="price">$0 por 30 días</p>
          <ul className="feature-list">
            <li><span className="check">✔</span> Publicación por 30 días</li>
            <li><span className="check">✔</span> Hasta 7 fotos</li>
            <li><span className="check">✔</span> Aparece en búsquedas</li>
          </ul>
          <button className="select-button orange">Seleccionar Plan</button>
        </div>

        {/* Publicación Destacada */}
        <div className="promotion-card featured">
          <h2>Publicación Destacada</h2>
          <p className="card-description">Publicación destacada con mayor visibilidad</p>
          <p className="price">$199 por 30 días</p>
          <ul className="feature-list">
            <li><span className="check">✔</span> Publicación por 30 días</li>
            <li><span className="check">✔</span> Hasta 15 fotos</li>
            <li><span className="check">✔</span> Aparece como destacada</li>
            <li><span className="check">✔</span> Mayor visibilidad</li>
            <li><span className="check">✔</span> Etiqueta de destacado</li>
          </ul>
          {/* 🔹 Este botón conecta con la página de confirmación */}
          <button
            className="select-button teal"
            onClick={() => navigate("/confirmacion")}
          >
            Seleccionar Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
