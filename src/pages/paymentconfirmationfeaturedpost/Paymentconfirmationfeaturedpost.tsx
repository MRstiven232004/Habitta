// PaymentConfirmationFeaturedPost.tsx
import React from "react";
import "./paymentconfirmationfeaturedpost.css";

const PaymentConfirmationFeaturedPost: React.FC = () => {
  return (
    <div className="paymentconfirmationfeaturedpost-container">
      <h1 className="paymentconfirmationfeaturedpost-title">Confirmación de Pago</h1>
      <p className="paymentconfirmationfeaturedpost-subtitle">Publicación Destacada</p>

      <div className="paymentconfirmationfeaturedpost-card">
        <h2>¡Pago Exitoso!</h2>
        <p className="mensaje">
          Tu publicación destacada ha sido confirmada y estará activa por 30 días.
        </p>

        <div className="detalles">
          <p><span className="label">Plan:</span> Publicación Destacada</p>
          <p><span className="label">Duración:</span> 30 días</p>
          <p><span className="label">Precio:</span> $199 COP</p>
          <p><span className="label">Beneficios:</span></p>
          <ul className="feature-list">
            <li><span className="check">✔</span> Hasta 15 fotos</li>
            <li><span className="check">✔</span> Aparece como destacada</li>
            <li><span className="check">✔</span> Mayor visibilidad</li>
            <li><span className="check">✔</span> Etiqueta de destacado</li>
          </ul>
        </div>

        <button className="volver-button">Volver al inicio</button>
      </div>
    </div>
  );
};

export default PaymentConfirmationFeaturedPost;
