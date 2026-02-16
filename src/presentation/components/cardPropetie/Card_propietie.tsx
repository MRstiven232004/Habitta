
import React, { useState } from "react";
import "./cardStyle.css";
import PropertyDetailsModal from "./PropertyDetailsModal";
const heartIcon = "/icons/UI/navbaricons/hearth-svgrepo-com.svg";
const homeIcon = "/icons/UI/navbaricons/house-01-svgrepo-com.svg";
const house1 = "/images/auth/dream_home_1.png";
const house2 = "/images/auth/dream_home_2.png";
const house3 = "/images/auth/dream_home_3.png";

const properties = [
  {
    title: "Casa moderna en Polanco",
    location: "Polanco, Ciudad de México",
    price: "$3.200.000.000 COP",
    image: house1,
    features: [
      { label: "Habitaciones", value: 4 },
      { label: "Baños", value: 3 },
      { label: "Área", value: "250 m²" },
    ],
    description: "Casa moderna con acabados de lujo en Polanco, cerca de parques y centros comerciales.",
    badges: ["Destacada", "Venta"],
  },
  {
    title: "Apartamento de lujo",
    location: "Bogotá, Cundinamarca",
    price: "$2.500.000.000 COP",
    image: house2,
    features: [
      { label: "Habitaciones", value: 3 },
      { label: "Baños", value: 2 },
      { label: "Área", value: "180 m²" },
    ],
    description: "Apartamento de lujo en el corazón de Bogotá, con vista panorámica y excelentes amenidades.",
    badges: ["Renta"],
  },
  {
    title: "Casa Campestre",
    location: "Medellín, Antioquia",
    price: "$1.800.000.000 COP",
    image: house3,
    features: [
      { label: "Habitaciones", value: 5 },
      { label: "Baños", value: 4 },
      { label: "Área", value: "350 m²" },
    ],
    description: "Casa campestre rodeada de naturaleza, ideal para familias grandes y eventos al aire libre.",
    badges: ["Venta"],
  },
];

import { useNavigate } from "react-router-dom";

function CardPropetie() {
  const navigate = useNavigate();
  return (
    <>
      <div className="property-cards-grid">
        {properties.map((property, idx) => (
          <div className="property-card" key={idx}>
            <div className="property-card__image-container">
              <img
                src={property.image}
                alt={property.title}
                className="property-card__img"
              />
              {/* Badges */}
              <div className="property-card__badges">
                {property.badges.map((badge, i) => (
                  <span key={i} className={`badge badge--${badge === "Destacada" ? "featured" : "type"}`}>{badge}</span>
                ))}
              </div>
              {/* Action Buttons */}
              <div className="property-card__actions">
                <button className="action-btn" title="Agregar a favoritos">
                  <img src={heartIcon} alt="Favorito" className="icon-svg" />
                </button>
              </div>
            </div>
            <div className="property-card__body">
              <h3 className="property-card__title">{property.title}</h3>
              <p className="property-card__location">{property.location}</p>
              <p className="property-card__price">{property.price}</p>
              <div className="property-card__features">
                {property.features.map((f, i) => (
                  <span className="feature-item" key={i}>
                    <img src={homeIcon} alt={f.label} className="feature-icon" />
                    {f.value}
                  </span>
                ))}
              </div>
              <button className="property-card__btn-details" onClick={() => navigate("/property-details")}>Ver detalles</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardPropetie;
