import CardPropetie from "../../components/cardPropetie/Card_propietie";
import "./favorites.css";

// Componente de Página de Favoritos
function Favorites() {
  // Aquí puedes agregar lógica para obtener las propiedades favoritas
  // Por ahora, mostramos las tarjetas de propiedades como ejemplo

  return (
    <>
      <h1 className="favorites-title">Favoritos</h1>
      <p id="descripcionFavoritos">
        Tus propiedades favoritas guardadas
      </p>

      {/* Contenedor Principal */}
      <div className="favorites-page">
        <CardPropetie />
      </div>
    </>
  );
}

export default Favorites;