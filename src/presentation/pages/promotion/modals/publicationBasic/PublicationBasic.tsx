import React, { type FC } from "react";
import "./publicationBasic.css";

interface PublicationBasicProps {
  isOpen: boolean;
  onClose: () => void;
  onPublish?: () => void;
}

const PublicationBasic: FC<PublicationBasicProps> = ({ isOpen, onClose, onPublish }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="basic-modal-overlay" onClick={handleOverlayClick}>
      <div className="basic-modal-content">
        <div className="basic-modal-header">
          <div className="plan-icon-container" style={{ margin: "0 auto 1rem auto", width: "85px", height: "85px", backgroundColor: "#E6F9F8", padding: "12px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}>
            <svg
              className="plan-icon"
              width="44"
              height="48"
              viewBox="0 0 44 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.9439 3.55218V11.5503M39.5431 7.55122H32.3448M19.7784 5.17979C19.8555 4.72111 20.0745 4.30683 20.3976 4.00871C20.7207 3.71059 21.1274 3.54739 21.5474 3.54739C21.9673 3.54739 22.374 3.71059 22.6971 4.00871C23.0202 4.30683 23.2392 4.72111 23.3163 5.17979L25.2077 16.2931C25.342 17.0832 25.6876 17.81 26.1993 18.3786C26.711 18.9471 27.3651 19.3311 28.0762 19.4804L38.0782 21.5819C38.491 21.6675 38.8639 21.9109 39.1322 22.2699C39.4005 22.6289 39.5474 23.0808 39.5474 23.5474C39.5474 24.014 39.4005 24.4659 39.1322 24.8249C38.8639 25.1839 38.491 25.4273 38.0782 25.5129L28.0762 27.6144C27.3651 27.7637 26.711 28.1476 26.1993 28.7162C25.6876 29.2848 25.342 30.0116 25.2077 30.8017L23.3163 41.915C23.2392 42.3737 23.0202 42.788 22.6971 43.0861C22.374 43.3842 21.9673 43.5474 21.5474 43.5474C21.1274 43.5474 20.7207 43.3842 20.3976 43.0861C20.0745 42.788 19.8555 42.3737 19.7784 41.915L17.887 30.8017C17.7527 30.0116 17.4071 29.2848 16.8954 28.7162C16.3837 28.1476 15.7296 27.7637 15.0185 27.6144L5.01652 25.5129C4.60371 25.4273 4.23086 25.1839 3.96255 24.8249C3.69424 24.4659 3.54736 24.014 3.54736 23.5474C3.54736 23.0808 3.69424 22.6289 3.96255 22.2699C4.23086 21.9109 4.60371 21.6675 5.01652 21.5819L15.0185 19.4804C15.7296 19.3311 16.3837 18.9471 16.8954 18.3786C17.4071 17.81 17.7527 17.0832 17.887 16.2931L19.7784 5.17979ZM10.7499 39.5436C10.7499 41.7522 9.13856 43.5426 7.15081 43.5426C5.16306 43.5426 3.55167 41.7522 3.55167 39.5436C3.55167 37.335 5.16306 35.5445 7.15081 35.5445C9.13856 35.5445 10.7499 37.335 10.7499 39.5436Z"
                stroke="#35d2db"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="basic-modal-title">Publicación Básica</h2>
          <p className="basic-modal-subtitle">
            Seleccione la propiedad y método de pago
          </p>
        </div>

        <div className="basic-modal-body">
          <div className="form-group">
            <label className="form-label">Propiedad</label>
            <select className="form-input">
              <option disabled selected>
                Seleccione su Propiedad
              </option>
              {/* Aquí se cargarían las propiedades reales */}
            </select>
          </div>

          <div className="summary-box">
            <div className="summary-row">
              <span className="summary-label">Plan:</span>
              <span>Publicación Básica</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Duración:</span>
              <span>30 días</span>
            </div>
            <div className="summary-row" style={{ marginTop: "15px" }}>
              <span className="summary-label">Total:</span>
              <span>$0</span>
            </div>
          </div>

          <div className="modal-actions">
            <button className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button className="btn-publish" onClick={onPublish}>
              Publicar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationBasic;
