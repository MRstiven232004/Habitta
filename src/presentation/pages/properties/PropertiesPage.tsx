// Importamos el componente de tarjeta de propiedad, que muestra la información de cada inmueble.
import CardPropetie from "../../components/cardPropetie/Card_propietie";
// Importamos los estilos específicos para la página de propiedades.
import "./styleProperties.css";

/**
 * Página de Propiedades
 * Esta sección muestra el listado completo de inmuebles disponibles, junto con una
 * barra de búsqueda y filtros detallados para refinar los resultados.
 */
function PropertiesPage() {
  return (
    <>
      <h1>Propiedades</h1>
      <p id="descripcionPropiedades">
        Encuentra tu hogar ideal entre miles de opciones verificadas
      </p>

      {/* Contenedor principal de la página */}
      <div className="properties-page">
        {/* =========================================
            BARRA DE BÚSQUEDA Y FILTROS SUPERIORES
           ========================================= */}
        <section className="search-bar">
          {/* Campo de búsqueda principal (Texto) */}
          <div className="search-input">
            <button className="search-icon" aria-hidden></button>
            <input
              type="search"
              placeholder="Buscar por ubicación, tipo de propiedad"
            />
          </div>

          {/* Filtros rápidos (Dropdowns) */}
          <div className="filters">
            {/* Filtro Tipo de Propiedad (Ej. Casa, Apartamento) */}
            <div className="filter-dropdown">
              <button className="filter pill">Casa ▼</button>
              <div className="dropdown-menu">
                <button className="dropdown-item">Casa</button>
                <button className="dropdown-item">Apartamento</button>
              </div>
            </div>
            {/* Filtro Rango de Precio */}
            <div className="filter-dropdown">
              <button className="filter pill">$0 - $100k ▼</button>
              <div className="dropdown-menu">
                <button className="dropdown-item">$0 - $100k</button>
                <button className="dropdown-item">$100k - $500k</button>
                <button className="dropdown-item">$500k - $1M</button>
              </div>
            </div>
          </div>

          {/* Botón de acción para buscar y controles de vista */}
          <div className="actions">
            <button className="btn-search">Buscar</button>
            <div className="view-toggles">
              {/* Botones para cambiar la vista (Lista, Cuadrícula, Mapa - iconos placeholders) */}
              <button className="icon"></button>
              <button className="icon"></button>
              <button className="icon"></button>
            </div>
          </div>

          {/* Opciones de ordenamiento (Parte inferior de la barra de búsqueda) */}
          <div className="search-bottom">
            <div className="sort">
              <span>Ordenar por:</span>
              <div className="sort-dropdown">
                <button className="pill current">Relevancia ▼</button>
                <div className="dropdown-menu">
                  <button className="dropdown-item">Relevancia</button>
                  <button className="dropdown-item">
                    Mayor a menor precio
                  </button>
                  <button className="dropdown-item">
                    Menor a mayor precio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="content-wrapper">
          {/* =========================================
              BARRA LATERAL DE FILTROS (Sidebar)
             ========================================= */}
          <aside className="filters-sidebar">
            <div className="filters-header">
              <h3>Filtros</h3>
              <button className="clear-filters">Limpiar</button>
            </div>

            {/* Filtro: Tipo de operación (Venta/Arriendo) */}
            <div className="filter-group">
              <label>Tipo de operación</label>
              <select defaultValue="">
                <option value="">Seleccionar</option>
                <option value="sale">Venta</option>
                <option value="rent">Arriendo</option>
              </select>
            </div>

            {/* Filtro: Tipo de propiedad */}
            <div className="filter-group">
              <label>Tipo de propiedad</label>
              <select defaultValue="">
                <option value="">Seleccionar</option>
                <option value="house">Casa</option>
                <option value="apartment">Apartamento</option>
                <option value="lot">Lote</option>
              </select>
            </div>

            {/* Filtro: Rango de precio (Slider) */}
            <div className="filter-group">
              <label>Rango de precio</label>
              <div className="range-container">
                <input
                  type="range"
                  className="range-slider"
                  min="0"
                  max="7560000000"
                  defaultValue="3780000000"
                />
                <div className="range-labels">
                  <span>$0 COP</span>
                  <span>$7.560.000.000 COP</span>
                </div>
              </div>
            </div>

            {/* Filtro: Área en metros cuadrados (Slider) */}
            <div className="filter-group">
              <label>Área (m²)</label>
              <div className="range-container">
                <input
                  type="range"
                  className="range-slider"
                  min="0"
                  max="870"
                  defaultValue="435"
                />
                <div className="range-labels">
                  <span>0 m²</span>
                  <span>870 m²</span>
                </div>
              </div>
            </div>

            {/* Filtro: Habitaciones (Botones de selección) */}
            <div className="filter-group">
              <label>Habitaciones</label>
              <div className="button-group">
                <button className="option-btn">1</button>
                <button className="option-btn">2</button>
                <button className="option-btn">3</button>
                <button className="option-btn">4+</button>
              </div>
            </div>

            {/* Filtro: Baños (Botones de selección) */}
            <div className="filter-group">
              <label>Baños</label>
              <div className="button-group">
                <button className="option-btn">1</button>
                <button className="option-btn">2</button>
                <button className="option-btn">3</button>
                <button className="option-btn">4+</button>
              </div>
            </div>

            {/* Botón para aplicar todos los filtros seleccionados */}
            <button className="btn-apply-filters">Aplicar filtros</button>
          </aside>

          {/* =========================================
              GRILLA DE RESULTADOS
             ========================================= */}
          <main className="properties-grid">
            {/* Aquí se renderizan las tarjetas de las propiedades encontradas */}
            <CardPropetie></CardPropetie>
            <br />

            {/* Paginación: Botones para navegar entre páginas de resultados */}
            <div className="button-page">
              <button className="page-btn">« Anterior</button>
              <button className="page-btn">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn">Siguiente »</button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default PropertiesPage;
