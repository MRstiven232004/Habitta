// Importamos los estilos del pie de página.
import "./footer.css";
// Importamos los datos dinámicos que alimentan el footer (secciones, redes sociales, etc).
import {
  footerSections,
  countries,
  socialMedia,
  contactInfo,
} from "./footerData";
import logoHabitta from "../../assets/images/logoCF.png";

/**
 * Componente Footer (Pie de Página)
 * Muestra información de contacto, enlaces de navegación, paises de operación y redes sociales.
 * Se divide en secciones: Izquierda (Logo/Info), Centro (Enlaces), Medio (Paises), Abajo (Redes/Legal).
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* =========================================
            SECCIÓN IZQUIERDA: LOGO Y DESCRIPCIÓN
           ========================================= */}
        <div className="footer__left">
          <div className="footer__logo-section">
            <img
              src={logoHabitta}
              alt="Logo de Habitta"
              className="footer__logo"
            />
            <h2 className="footer__title">Habitta</h2>
          </div>

          <p className="footer__description">{contactInfo.description}</p>

          {/* Información de Contacto */}
          <div className="footer__contact">
            <div className="footer__contact-item">
              <span className="footer__icon">✉️</span>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__icon">📞</span>
              {/* Eliminamos espacios del teléfono para el link 'tel:' */}
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                {contactInfo.phone}
              </a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__icon">📍</span>
              <span>{contactInfo.location}</span>
            </div>
          </div>
        </div>

        {/* =========================================
            SECCIÓN CENTRAL: ENLACES DE NAVEGACIÓN
           ========================================= */}
        <div className="footer__center">
          {footerSections.map((section) => (
            <div key={section.title} className="footer__section">
              <h3 className="footer__section-title">{section.title}</h3>
              <ul className="footer__links">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          SECCIÓN MEDIO: PAÍSES DE OPERACIÓN
         ========================================= */}
      <div className="footer__countries-section">
        <p className="footer__countries-label">Operamos en:</p>
        <div className="footer__countries">
          {countries.map((country) => (
            <button key={country} className="footer__country-btn">
              {country}
            </button>
          ))}
        </div>
      </div>

      {/* =========================================
          SECCIÓN INFERIOR: REDES Y LEGAL
         ========================================= */}
      <div className="footer__bottom">
        <div className="footer__social">
          <p className="footer__social-label">Síguenos en:</p>
          <div className="footer__social-icons">
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-icon"
                aria-label={social.name}
              >
                {getSocialIcon(social.name)}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__legal">
          <a href="#" className="footer__legal-link">
            Política de privacidad
          </a>
          <span className="footer__legal-separator">|</span>
          <a href="#" className="footer__legal-link">
            Términos de uso
          </a>
          <span className="footer__legal-separator">|</span>
          <a href="#" className="footer__legal-link">
            Cookies
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__copyright">
        <p>
          © 2024 Habitta. Todos los derechos reservados. Hecho con ❤️ para
          Latinoamérica.
        </p>
      </div>
    </footer>
  );
}

/**
 * Función auxiliar para obtener el icono de cada red social.
 * Retorna un emoji o un icono genérico si no encuentra la red social.
 */
function getSocialIcon(name: string) {
  const icons: { [key: string]: string } = {
    facebook: "📘",
    instagram: "📷",
    youtube: "▶️",
  };
  return icons[name] || "🔗";
}

export default Footer;
