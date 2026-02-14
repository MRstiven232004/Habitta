import type { Property } from "@domain/entities/Property";
import "./cardStyle.css";

// Iconos
const heartIcon = "/icons/UI/navbaricons/hearth-svgrepo-com.svg";
const homeIcon = "/icons/UI/navbaricons/house-01-svgrepo-com.svg";

/**
 * Props del componente CardPropetie.
 * Recibe una propiedad individual desde Supabase.
 */
interface CardPropetieProps {
  property: Property;
}

/**
 * Formatea un número de precio en formato colombiano (COP).
 * Ejemplo: 3200000000 → "$3.200.000.000 COP"
 */
function formatPrecio(precio: number | null): string {
  if (precio === null || precio === undefined) return "Precio no disponible";
  return `$${precio.toLocaleString("es-CO")} COP`;
}

/**
 * Componente de tarjeta de propiedad.
 * Muestra la información de una propiedad individual con sus datos reales de Supabase.
 */
function CardPropetie({ property }: CardPropetieProps) {
  return (
    <div className="property-card">
      <div className="property-card__image-container">
        {/* Imagen placeholder — se reemplazará cuando se integre la tabla archivos */}
        <div
          className="property-card__img"
          style={{
            backgroundColor: "#2a2a3e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#888",
            fontSize: "0.9rem",
            minHeight: "200px",
          }}
        >
          Sin imagen
        </div>

        {/* Badges */}
        <div className="property-card__badges">
          {property.estado_publicacion && (
            <span className="badge badge--featured">
              {property.estado_publicacion}
            </span>
          )}
          {property.tipo && (
            <span className="badge badge--type">{property.tipo}</span>
          )}
        </div>

        {/* Botón de favorito */}
        <div className="property-card__actions">
          <button className="action-btn" title="Agregar a favoritos">
            <img src={heartIcon} alt="Favorito" className="icon-svg" />
          </button>
        </div>
      </div>

      <div className="property-card__body">
        <h3 className="property-card__title">
          {property.titulo ?? "Sin título"}
        </h3>
        {property.estrato && (
          <p className="property-card__location">Estrato {property.estrato}</p>
        )}

        <p className="property-card__price">{formatPrecio(property.precio)}</p>

        <div className="property-card__features">
          {property.habitaciones !== null && (
            <span className="feature-item">
              <img src={homeIcon} alt="Habitaciones" className="feature-icon" />
              {property.habitaciones}
            </span>
          )}
          {property.banos !== null && (
            <span className="feature-item">
              <img src={homeIcon} alt="Baños" className="feature-icon" />
              {property.banos}
            </span>
          )}
          {property.area !== null && (
            <span className="feature-item">
              <img src={homeIcon} alt="Área" className="feature-icon" />
              {property.area} m²
            </span>
          )}
        </div>

        <button className="property-card__btn-details">Ver detalles</button>
      </div>
    </div>
  );
}

export default CardPropetie;
