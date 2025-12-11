import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function RegisterPropeties() {
  return (
    <>
      <Navbar></Navbar>

      <h1>Publicar Propriedades</h1>
      <h3>Datos Principales de la Propiedad</h3>

      <br />
      <div>
         <h4>Informacion Basica</h4>
        <p>Titulo del anuncio</p>
        <input
          type="text"
          placeholder="Ej: Hermoso apartamento en zona céntrica"
        />
        <p>Descripcion</p>
        <input
          type="text"
          placeholder="Describe las características de la propiedad"
        />
        <div>
            <label htmlFor="propertyType">tipo de propiedad <span aria-hidden="true">*</span></label>
               <br />
                <select id="propertyType" name="propertyType" defaultValue="">
                  <option value="" disabled>Selecciona</option>
                  <option value="apartment">Apartamento</option>
                  <option value="house">Casa</option>
                  <option value="lot">Lote</option>
                </select>
                <br />
                <label htmlFor="operationType">tipo de operación<span aria-hidden="true">*</span></label>
                <br />
                {/*esta seccion esta de forma provisional  */}
                <select id="operationType" name="operationType" defaultValue="">
                  <option value="" disabled>Selecciona</option>
                  <option value="sale">Venta</option>
                  <option value="rent">Arriendo</option>
                </select>
        </div>
        <br />
        <div>
           <p>Precio (COP)</p>
        <input
          type="text"
          placeholder="00.00"
        />
        <p>Àrea (m2)</p>
        <input
          type="text"
          placeholder="0"
        />
        </div>
      </div>
      <br />
      

      <Footer></Footer>
    </>
  );
}

export default RegisterPropeties;
