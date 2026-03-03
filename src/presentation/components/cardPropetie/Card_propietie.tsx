import "./cardStyle.css";
import { useNavigate } from "react-router-dom";
import type { Property } from "@domain/entities/Property";

const homeIcon = "/icons/UI/navbaricons/house-01-svgrepo-com.svg";
const fallbackImage = "/images/auth/dream_home_1.png";

// Props del componente
interface CardPropetieProps {
  property: Property;
  /** ¿Es favorito del usuario actual? */
  isFav?: boolean;
  /** Callback al hacer click en el corazón */
  onToggleFav?: (idpropiedad: number) => void;
  /** ¿El usuario actual es el dueño de esta propiedad? */
  isOwner?: boolean;
  /** Callback al hacer click en eliminar */
  onDelete?: (idpropiedad: number) => void;
}

// Componente de tarjeta de propiedad individual
function CardPropetie({
  property,
  isFav = false,
  onToggleFav,
  isOwner = false,
  onDelete,
}: CardPropetieProps) {
  const navigate = useNavigate();

  // Formatear precio en pesos colombianos
  const formatPrice = (price: number | null) => {
    if (!price) return "Precio no disponible";
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Determinar badges según el estado de publicación y tipo de operación
  const badges = [];
  if (property.estadoPublicacion === "destacada") badges.push("Destacada");
  if (property.tipoOperacion) badges.push(property.tipoOperacion);

  return (
    <div className="property-card">
      <div className="property-card__image-container">
        <img
          src={property.fotoUrl || fallbackImage}
          alt={property.titulo || "Propiedad"}
          className="property-card__img"
        />
        {/* Badges */}
        {badges.length > 0 && (
          <div className="property-card__badges">
            {badges.map((badge, i) => (
              <span
                key={i}
                className={`badge badge--${badge === "Destacada" ? "featured" : "type"}`}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        {/* Botones de acción */}
        <div className="property-card__actions">
          {/* Botón de eliminar (solo para propiedades propias) */}
          {isOwner && onDelete && (
            <button
              className="action-btn action-btn--delete"
              title="Eliminar propiedad"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(property.idpropiedad);
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 6h18" />
                <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                <path d="M10 11v6" />
                <path d="M14 11v6" />
              </svg>
            </button>
          )}

          {/* Botón de favoritos (siempre visible) */}
          <button
            className={`action-btn ${isFav ? "action-btn--fav-active" : ""}`}
            title={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
            onClick={(e) => {
              e.stopPropagation();
              if (onToggleFav) {
                onToggleFav(property.idpropiedad);
              } else {
                navigate("/auth");
              }
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill={isFav ? "#ec4899" : "none"}
                stroke={isFav ? "#ec4899" : "#374151"}
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="property-card__body">
        <h3 className="property-card__title">
          {property.titulo || "Sin título"}
        </h3>
        <p className="property-card__location">
          {/* Mostrar ubicación: ciudad, departamento */}
          {[property.ciudad, property.departamento]
            .filter(Boolean)
            .join(", ") || "Ubicación no especificada"}
        </p>
        <p className="property-card__type">
          {property.tipoPropiedad || "Tipo no especificado"}
        </p>
        <p className="property-card__price">{formatPrice(property.precio)}</p>
        <div className="property-card__features">
          {property.habitaciones && (
            <span className="feature-item">
              <img src={homeIcon} alt="Habitaciones" className="feature-icon" />
              {property.habitaciones}
            </span>
          )}
          {property.banos && (
            <span className="feature-item">
              <img src={homeIcon} alt="Baños" className="feature-icon" />
              {property.banos}
            </span>
          )}
          {property.area && (
            <span className="feature-item">
              <img src={homeIcon} alt="Área" className="feature-icon" />
              {property.area} m²
            </span>
          )}
        </div>
        <button
          className="property-card__btn-details"
          onClick={() =>
            navigate(`/propertydetailspage/${property.idpropiedad}`)
          }
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
}

export default CardPropetie;
