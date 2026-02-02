// Importamos los estilos específicos para la página de registro de propiedades.
import "./styleRegisterP.css";

/**
 * Página de Registro de Propiedades (Publicación)
 * Esta página contiene un formulario detallado para que los usuarios puedan subir
 * y publicar sus propiedades (casas, apartamentos, lotes) en la plataforma.
 */
function RegisterPropertyPage() {
  return (
    <>
      <div className="register-page">
        {/* Título y subtítulo principal */}
        <h3>Publicar Propiedades</h3>
        <p>Datos Principales de la Propiedad</p>

        <br />

        {/* =========================================
            SECCIÓN 1: INFORMACIÓN BÁSICA
           ========================================= */}
        <div className="card">
          <h4>Información Básica</h4>

          <p>Título del anuncio</p>
          <input
            type="text"
            placeholder="Ej: Hermoso apartamento en zona céntrica"
          />

          <p>Descripción</p>
          <input
            type="text"
            placeholder="Describe las características principales de la propiedad"
          />

          <div>
            {/* Selector: Tipo de propiedad */}
            <label htmlFor="propertyType">
              Tipo de propiedad <span aria-hidden="true">*</span>
            </label>
            <br />
            <select id="propertyType" name="propertyType" defaultValue="">
              <option value="" disabled>
                Selecciona
              </option>
              <option value="apartment">Apartamento</option>
              <option value="house">Casa</option>
              <option value="lot">Lote</option>
            </select>
            <br />

            {/* Selector: Tipo de operación (Venta/Arriendo) */}
            <label htmlFor="operationType">
              Tipo de operación <span aria-hidden="true">*</span>
            </label>
            <br />
            {/* Nota: Esta sección es provisional y podría cambiar en el futuro */}
            <select id="operationType" name="operationType" defaultValue="">
              <option value="" disabled>
                Selecciona
              </option>
              <option value="sale">Venta</option>
              <option value="rent">Arriendo</option>
            </select>
          </div>

          <br />

          {/* Fila de dos columnas para Precio y Área */}
          <div className="two-col">
            <div>
              <p>Precio (COP)</p>
              <input type="text" placeholder="00.00" />
            </div>
            <div>
              <p>Área (m²)</p>
              <input type="text" placeholder="0" />
            </div>
          </div>
        </div>

        <br />

        {/* =========================================
            SECCIÓN 2: UBICACIÓN
           ========================================= */}
        <div className="card">
          <h4>Ubicación</h4>

          <p>Dirección</p>
          <input type="text" placeholder="Calle 00 #00-00" />

          <div className="two-col">
            <div>
              <p>Ciudad</p>
              <input type="text" placeholder="Ej: Tunja" />
            </div>
            <div>
              <p>Departamento</p>
              <input type="text" placeholder="Ej: Boyacá" />
            </div>
          </div>

          <br />

          <div className="two-col">
            <div>
              <p>Barrio</p>
              <input type="text" placeholder="Ej: Centro" />
            </div>
            <div>
              <p>Código postal</p>
              <input type="text" placeholder="150001" />
            </div>
          </div>
        </div>

        <br />

        {/* =========================================
            SECCIÓN 3: CARACTERÍSTICAS
           ========================================= */}
        <div className="card">
          <h4>Características</h4>

          <div className="two-col">
            <div>
              <p>Habitaciones</p>
              <input type="text" placeholder="Ej: 1 principal, 2 auxiliares" />
            </div>
            <div>
              <p>Baños</p>
              <input type="text" placeholder="Ej: 3 baños" />
            </div>
          </div>

          <br />

          <div>
            {/* Nota: Faltaría agregar lógica para ocultar la opción 'Amoblado' si es un lote */}
            <label htmlFor="furnished">
              Amoblado <span aria-hidden="true">*</span>
            </label>
            <br />
            <select id="furnished" name="furnished" defaultValue="">
              <option value="" disabled>
                Selecciona
              </option>
              <option value="yes">Sí</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="parkingLot">
              Estacionamiento <span aria-hidden="true">*</span>
            </label>
            <br />
            <select id="parkingLot" name="parkingLot" defaultValue="">
              <option value="" disabled>
                Selecciona
              </option>
              <option value="yes">Sí</option>
              <option value="no">No</option>
            </select>
          </div>

          <br />

          <div className="two-col">
            <div>
              <p>Antigüedad (años)</p>
              <input type="text" placeholder="0" />
            </div>
            <div>
              <p>Estrato</p>
              <input type="text" placeholder="3" />
            </div>
          </div>

          <br />

          <div className="two-col">
            <div>
              {/* Estos campos son relevantes principalmente para casas o edificios */}
              <p>Pisos (Nivel de la propiedad)</p>
              <input type="text" placeholder="Ej: 2° piso" />
            </div>
            <div>
              <p>Total Pisos (Del edificio/casa)</p>
              <input type="text" placeholder="Ej: 5 pisos" />
            </div>
          </div>

          <br />

          {/* Checkboxes para características adicionales (Amenities) */}
          <fieldset>
            <legend>Características adicionales</legend>
            <div className="amenities-grid">
              <label>
                <input type="checkbox" name="amenities" value="pool" />
                Piscina
              </label>
              <label>
                <input type="checkbox" name="amenities" value="gym" />
                Gimnasio
              </label>
              <label>
                <input type="checkbox" name="amenities" value="garden" />
                Jardín
              </label>
              <label>
                <input type="checkbox" name="amenities" value="terrace" />
                Terraza
              </label>
              <label>
                <input type="checkbox" name="amenities" value="balcony" />
                Balcón
              </label>
              <label>
                <input type="checkbox" name="amenities" value="security24" />
                Seguridad 24/7
              </label>
              <label>
                <input type="checkbox" name="amenities" value="gamearea" />
                Área de juegos
              </label>
              <label>
                <input type="checkbox" name="amenities" value="eventroom" />
                Salón de eventos
              </label>
              <label>
                <input type="checkbox" name="amenities" value="kitchen" />
                Cocina equipada
              </label>
              <label>
                <input type="checkbox" name="amenities" value="management" />
                Tiene administración
              </label>
              <label>
                <input type="checkbox" name="amenities" value="closets" />
                Closets
              </label>
              <label>
                <input type="checkbox" name="amenities" value="ac" />
                Aire acondicionado
              </label>
              <label>
                <input type="checkbox" name="amenities" value="cafeteria" />
                Cafetería
              </label>
              <label>
                <input type="checkbox" name="amenities" value="pets" />
                Mascotas permitidas
              </label>
            </div>
          </fieldset>
        </div>

        <br />

        {/* =========================================
            SECCIÓN 4: FOTOGRAFÍAS
           ========================================= */}
        <div className="card">
          <h4>Fotos de la Propiedad</h4>
          <p>
            Sube hasta 15 imágenes de la propiedad para mostrarla en detalle
          </p>
          <input
            type="file"
            // placeholder="Elegir archivos" // Nota: 'placeholder' no funciona en input type="file" estándar
            multiple
            accept="image/*"
          />
        </div>

        <br />

        {/* Botones de Acción Final (Cancelar / Publicar) */}
        <div className="card actions">
          <button className="btn-cancel">Cancelar</button>
          <button className="btn-primary">Publicar Propiedad</button>
        </div>
      </div>
      {/* TODO: Faltan descargar y poner iconos correspondientes si se requieren */}
    </>
  );
}

export default RegisterPropertyPage;
