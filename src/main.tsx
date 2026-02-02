// Importamos 'StrictMode' para activar comprobaciones adicionales y advertencias durante el desarrollo.
import { StrictMode } from "react";
// Importamos 'createRoot' para inicializar la aplicación de React en el DOM (el HTML).
import { createRoot } from "react-dom/client";

// Importamos el componente principal de nuestra aplicación.
import App from "./App.tsx";

// Importamos 'BrowserRouter' para habilitar la navegación sin recargar la página.
import { BrowserRouter } from "react-router-dom";

// Buscamos el elemento HTML con el id 'root' y montamos allí nuestra aplicación React.
// El signo de exclamación (!) al final indica a TypeScript que estamos seguros de que 'root' existe.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Envolvemos la App con BrowserRouter para que funcionen los enlaces y rutas */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
