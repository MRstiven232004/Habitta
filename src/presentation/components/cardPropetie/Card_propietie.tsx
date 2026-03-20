import { useState } from "react";
import "./cardStyle.css";
import { useNavigate, Link } from "react-router-dom";
import type { Property } from "@domain/entities/Property";

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
  /** ¿Versión compacta para listas? */
  compact?: boolean;
}

// Componente de tarjeta de propiedad individual
function CardPropetie({
  property,
  isFav = false,
  onToggleFav,
  isOwner: _isOwner = false,
  onDelete: _onDelete,
  compact = false,
}: CardPropetieProps) {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  // Formatear precio en pesos colombianos
  const formatPrice = (price: number | null) => {
    if (!price) return "Precio no disponible";
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Determinar badges
  const badges = [];
  if (property.estadoPublicacion === "destacada") badges.push("Destacada");
  if (property.tipoOperacion) {
    const label = property.tipoOperacion.toLowerCase() === "arriendo" ? "Alquiler" : property.tipoOperacion;
    badges.push(label);
  }

  return (
    <div className={`property-card ${compact ? 'property-card--compact' : ''}`}>
      {/* Listón de Destacada (Premium Obligatorio) */}
      {(property.estadoPublicacion === "destacada" && property.ownerPlan?.toLowerCase() === "premium") && (
        <div className="premium-ribbon">
          <span>Destacada</span>
        </div>
      )}
      
      <div className="property-card__image-container">
        <Link to={`/propertydetailspage/${property.idpropiedad}`} style={{ display: 'block', height: '100%' }}>
          {(() => {
            const src = property.fotoUrl || fallbackImage;
            const isVideo = src.toLowerCase().includes(".mp4") || src.toLowerCase().includes("/video/");
            return (
              <img
                src={isVideo ? fallbackImage : src}
                alt={property.titulo || "Propiedad"}
                className="property-card__img"
              />
            );
          })()}
        </Link>

        {/* Badges (solo en modo normal) */}
        {!compact && badges.length > 0 && (
          <div className="property-card__badges">
            {badges.map((badge, i) => (
              <span key={i} className={`badge badge--${badge === "Destacada" ? "featured" : "type"}`}>
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Acciones (Ocultas en compact) */}
        {!compact && (
          <div className="property-card__actions">
            <button
              className="action-btn"
              title="Compartir"
              onClick={(e) => {
                e.stopPropagation();
                if (navigator.share) {
                  navigator.share({
                    title: property.titulo ?? "Propiedad",
                    url: window.location.origin + `/propertydetailspage/${property.idpropiedad}`,
                  });
                }
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V12"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
            </button>
            <button
              className={`action-btn ${isFav ? "action-btn--fav-active" : ""}`}
              title={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
              onClick={(e) => {
                e.stopPropagation();
                onToggleFav ? onToggleFav(property.idpropiedad) : navigate("/auth");
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill={isFav ? "#ff3040" : "none"} stroke={isFav ? "#ff3040" : "currentColor"} strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
          </div>
        )}
      </div>

      <div className="property-card__body">
        <div className="property-card__header-main">
          <h3 className="property-card__title" style={{ textTransform: 'capitalize' }}>
            {property.titulo || "Sin título"}
          </h3>
          {compact && (
            <span className="compact-operation-badge">{badges[1] || property.tipoOperacion}</span>
          )}
        </div>
        
        <p className="property-card__type" style={{ textTransform: 'capitalize', fontSize: '0.85rem', color: '#64748b', fontWeight: 600, margin: '4px 0 2px' }}>
          {property.tipoPropiedad || "Tipo no especificado"}
        </p>
        
        <p className="property-card__location" style={{ textTransform: 'capitalize', margin: 0, fontSize: '0.8rem', color: '#9ca3af' }}>
          {[property.ciudad, property.departamento].filter(Boolean).join(", ") || "Ubicación no especificada"}
        </p>

        {/* Si no es compacto, mostrar expansor y lógica original */}
        {!compact ? (
          <>
            <button 
              className="property-card__expand-btn desktop-hide" 
              onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
              aria-label="Expandir información"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            <div className={`property-card__expandable ${isExpanded ? "expanded" : ""}`}>
              <div className="property-card__col1">
                <p className="property-card__price">{formatPrice(property.precio)}</p>
                <div className="property-card__features">
                  {property.habitaciones && <span className="feature-item"><span className="feature-value">{property.habitaciones}</span></span>}
                  {property.banos && <span className="feature-item"><span className="feature-value">{property.banos}</span></span>}
                  {property.area && <span className="feature-item"><span className="feature-value">{property.area} m²</span></span>}
                </div>
                <Link to={`/propertydetailspage/${property.idpropiedad}`} className="property-card__btn-details">
                  Ver detalles
                </Link>
              </div>

              <div className="property-card__col2">
                <div className="col2-info"><span className="col2-label">Dirección:</span> <span className="col2-value" style={{ textTransform: 'capitalize' }}>{property.direccion || "No especificada"}</span></div>
                <div className="col2-info"><span className="col2-label">Teléfono:</span> <span className="col2-value">{property.telefonoContacto || "No disponible"}</span></div>
                {property.caracteristicasNombres && property.caracteristicasNombres.length > 0 && (
                  <div className="col2-info col2-info--badges">
                    <span className="col2-label">Adicionales:</span>
                    <div className="col2-badges">
                      {property.caracteristicasNombres.map((c, idx) => (
                        <span key={idx} className="col2-badge" style={{ textTransform: 'capitalize' }}>{c}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          /* Footer compacto para modo lista */
          <div className="property-card__compact-footer">
            <div className="property-card__price-compact">
              {formatPrice(property.precio)}
            </div>
            <div className="property-card__stats-compact">
              {property.habitaciones && <span>{property.habitaciones} Hab</span>}
              {property.banos && <span>{property.banos} Bq</span>}
              {property.area && <span>{property.area} m²</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardPropetie;
