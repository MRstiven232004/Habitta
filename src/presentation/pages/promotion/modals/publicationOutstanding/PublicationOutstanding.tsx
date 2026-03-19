import React, { type FC } from "react";
import "./publicationOutstanding.css";

interface PublicationOutstandingProps {
  isOpen: boolean;
  onClose: () => void;
  onPublish?: () => void;
}

const PublicationOutstanding: FC<PublicationOutstandingProps> = ({
  isOpen,
  onClose,
  onPublish,
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="outstanding-modal-overlay" onClick={handleOverlayClick}>
      <div className="outstanding-modal-content">
        <div className="outstanding-modal-header">
          <div className="plan-icon-container" style={{ margin: "0 auto 1rem auto", backgroundColor: "#E6F9F8", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: "110px", height: "110px" }}>
            <svg width="109" height="111" viewBox="0 0 109 111" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "105px", height: "105px" }}>
              <path d="M32.7305 60.5987V58.5987L32.7241 58.5987L32.7305 60.5987ZM30.6079 56.4433L29.219 55.0042C29.1761 55.0457 29.135 55.089 29.096 55.134L30.6079 56.4433ZM57.5477 30.44L58.9367 31.879C58.9639 31.8527 58.9904 31.8257 59.0161 31.7979L57.5477 30.44ZM59.888 31.6127L61.7813 32.2573C61.7904 32.2304 61.799 32.2034 61.807 32.1761L59.888 31.6127ZM54.6633 46.9597L56.521 47.7006C56.5337 47.6688 56.5455 47.6367 56.5566 47.6043L54.6633 46.9597ZM57.2212 50.4013V48.4013L57.2151 48.4013L57.2212 50.4013ZM76.2695 50.4013V52.4013H76.2759L76.2695 50.4013ZM78.3921 54.5567L79.781 55.9958C79.8239 55.9543 79.865 55.911 79.904 55.866L78.3921 54.5567ZM51.4523 80.56L50.0633 79.121C50.0361 79.1473 50.0096 79.1743 49.9839 79.2021L51.4523 80.56ZM49.112 79.3873L47.2188 78.7427C47.2096 78.7696 47.201 78.7966 47.193 78.8239L49.112 79.3873ZM54.3367 64.0403L52.479 63.2994C52.4663 63.3312 52.4545 63.3633 52.4434 63.3957L54.3367 64.0403ZM54.0208 61.6913L55.626 60.4982L54.0208 61.6913ZM51.7788 60.5987V62.5987L51.7849 62.5987L51.7788 60.5987ZM32.7305 60.5987L32.7241 58.5987C32.5611 58.5992 32.4096 58.5559 32.2883 58.4846L31.2745 60.2086L30.2607 61.9326C31.0117 62.3742 31.8699 62.6014 32.7369 62.5987L32.7305 60.5987ZM31.2745 60.2086L32.2883 58.4846C32.1679 58.4138 32.0905 58.3239 32.0477 58.24L30.2666 59.1498L28.4855 60.0595C28.8872 60.846 29.5088 61.4904 30.2607 61.9326L31.2745 60.2086ZM30.2666 59.1498L32.0477 58.24C32.0057 58.1578 31.9935 58.0762 32.0031 58.0005L30.0188 57.7502L28.0345 57.4999C27.9232 58.3824 28.0829 59.2714 28.4855 60.0595L30.2666 59.1498ZM30.0188 57.7502L32.0031 58.0005C32.0127 57.9241 32.0468 57.8369 32.1199 57.7525L30.6079 56.4433L29.096 55.134C28.5202 55.7989 28.1457 56.6181 28.0345 57.4999L30.0188 57.7502ZM30.6079 56.4433L31.9969 57.8823L58.9367 31.879L57.5477 30.44L56.1588 29.001L29.219 55.0042L30.6079 56.4433ZM57.5477 30.44L59.0161 31.7979C58.909 31.9137 58.7832 31.9723 58.6701 31.9919L58.3287 30.0213L57.9873 28.0506C57.2672 28.1754 56.5906 28.5293 56.0794 29.0821L57.5477 30.44ZM58.3287 30.0213L58.6701 31.9919C58.5575 32.0114 58.4369 31.9964 58.3218 31.9388L59.2178 30.1507L60.1138 28.3626C59.4545 28.0322 58.7067 27.926 57.9873 28.0506L58.3287 30.0213ZM59.2178 30.1507L58.3218 31.9388C58.2051 31.8803 58.0845 31.7715 58.0082 31.6051L59.8263 30.7717L61.6444 29.9384C61.3245 29.2406 60.7748 28.6938 60.1138 28.3626L59.2178 30.1507ZM59.8263 30.7717L58.0082 31.6051C57.9304 31.4354 57.9141 31.236 57.969 31.0493L59.888 31.6127L61.807 32.1761C62.0255 31.4318 61.9657 30.6394 61.6444 29.9384L59.8263 30.7717ZM59.888 31.6127L57.9947 30.9682L52.77 46.3152L54.6633 46.9597L56.5566 47.6043L61.7813 32.2573L59.888 31.6127ZM54.6633 46.9597L52.8056 46.2188C52.5251 46.9222 52.4291 47.6845 52.5303 48.4372L54.5125 48.1707L56.4946 47.9041C56.4858 47.8386 56.4934 47.7699 56.521 47.7006L54.6633 46.9597ZM54.5125 48.1707L52.5303 48.4372C52.6315 49.1896 52.9249 49.8975 53.374 50.5018L54.9792 49.3088L56.5844 48.1157C56.5304 48.0431 56.5035 47.9701 56.4946 47.9041L54.5125 48.1707ZM54.9792 49.3088L53.374 50.5018C53.8225 51.1052 54.411 51.5853 55.0804 51.9115L55.9566 50.1137L56.8327 48.3158C56.7212 48.2614 56.6389 48.1891 56.5844 48.1157L54.9792 49.3088ZM55.9566 50.1137L55.0804 51.9115C55.7495 52.2376 56.4857 52.4036 57.2273 52.4013L57.2212 50.4013L57.2151 48.4013C57.0764 48.4018 56.9447 48.3703 56.8327 48.3158L55.9566 50.1137ZM57.2212 50.4013V52.4013H76.2695V50.4013V48.4013H57.2212V50.4013ZM76.2695 50.4013L76.2759 52.4013C76.4389 52.4008 76.5904 52.4441 76.7117 52.5154L77.7255 50.7914L78.7393 49.0674C77.9883 48.6258 77.1301 48.3986 76.2631 48.4013L76.2695 50.4013ZM77.7255 50.7914L76.7117 52.5154C76.8321 52.5862 76.9095 52.6761 76.9523 52.76L78.7334 51.8502L80.5145 50.9405C80.1128 50.154 79.4912 49.5096 78.7393 49.0674L77.7255 50.7914ZM78.7334 51.8502L76.9523 52.76C76.9943 52.8422 77.0065 52.9238 76.9969 52.9995L78.9812 53.2498L80.9655 53.5001C81.0768 52.6177 80.9171 51.7286 80.5145 50.9405L78.7334 51.8502ZM78.9812 53.2498L" fill="#00C4B4" />
            </svg>
          </div>
          <h2 className="outstanding-modal-title">Completar promoción</h2>
          <p className="outstanding-modal-subtitle">
            Selecciona la propiedad y método de pago
          </p>
        </div>

        <div className="outstanding-modal-body">
          <div className="form-group">
            <label className="form-label">Propiedad</label>
            <select className="form-input">
              <option disabled selected>
                Seleccione su Propiedad
              </option>
              {/* Cargar propiedades disponibles aquí */}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Método de pago</label>
            <input className="form-input" defaultValue="Transferencia Bancaria" />
          </div>

          <div className="summary-box">
            <div className="summary-row">
              <span className="summary-label">Plan:</span>
              <span>Publicación destacada</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Duración:</span>
              <span>30 días</span>
            </div>
            <div className="summary-row" style={{ marginTop: "15px" }}>
              <span className="summary-label">Total:</span>
              <span>$199</span>
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

export default PublicationOutstanding;
