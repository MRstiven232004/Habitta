/**
 * UserModal - Modal de menú de usuario
 *
 * Este componente muestra un menú desplegable con opciones del usuario
 * cuando se hace clic en el ícono de usuario en la barra de navegación
 */

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./userModal.css";

/**
 * Propiedades del componente UserModal
 */
interface UserModalProps {
  /** Indica si el modal está visible */
  isOpen: boolean;
  /** Función para cerrar el modal */
  onClose: () => void;
}

/**
 * Componente de modal de usuario
 * Muestra las opciones disponibles para el usuario autenticado
 */
const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  /**
   * Efecto para cerrar el modal al hacer clic fuera de él
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // No renderizar si el modal no está abierto
  if (!isOpen) return null;

  /**
   * Opciones del menú de usuario
   */
  const menuOptions = [
    {
      id: 1,
      label: "Panel de Usuario",
      icon: "/icons/UI/navbaricons/user-alt-1-svgrepo-com.svg", // Cambia esta ruta por el ícono que prefieras
      link: "/myPanel",
    },
    {
      id: 2,
      label: "Promociones",
      icon: "/icons/UI/navbaricons/star-alt-4-svgrepo-com.svg", // Cambia esta ruta por el ícono que prefieras
      link: "/promotion",
    },
    {
      id: 3,
      label: "PQRS",
      icon: "/icons/UI/shield-alt-1-svgrepo-com.svg", // Cambia esta ruta por el ícono que prefieras
      link: "/pqrs",
    },
    {
      id: 4,
      label: "Herramientas Financieras",
      icon: "/icons/UI/navbaricons/calculator-svgrepo-com.svg", // Cambia esta ruta por el ícono que prefieras
      link: "/tools",
    },
    {
      id: 5,
      label: "Panel Admin",
      icon: "/icons/UI/timer-svgrepo-com.svg", // Cambia esta ruta por el ícono que prefieras
      link: "/admin",
    },
    {
      id: 6,
      label: "Cerrar Sesión",
      icon: "/icons/UI/navbaricons/house-01-svgrepo-com.svg", // Cambia esta ruta por el ícono que prefieras
      link: "/auth",
      isLogout: true,
    },
  ];

  return (
    <div className="user-modal" ref={modalRef}>
      <div className="user-modal__container">
        {/* Lista de opciones del menú */}
        <ul className="user-modal__menu">
          {menuOptions.map((option) => (
            <li
              key={option.id}
              className={`user-modal__item ${option.isLogout ? "user-modal__item--logout" : ""}`}
            >
              <Link
                to={option.link}
                className="user-modal__link"
                onClick={onClose}
              >
                <span className="user-modal__icon">
                  <img
                    src={option.icon}
                    alt={option.label}
                    style={{ width: "20px", height: "20px" }}
                  />
                </span>
                <span className="user-modal__label">{option.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserModal;
