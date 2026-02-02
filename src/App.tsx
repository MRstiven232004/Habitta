// Importamos los estilos globales de la aplicación.
import "./App.css";
// Importamos los componentes de enrutamiento de React Router.
// 'Routes' es el contenedor de todas las rutas y 'Route' define cada página individual.
import { Routes, Route } from "react-router-dom";

// Importamos el diseño principal (Layout) que contiene elementos comunes como el Navbar.
import Layout from "@presentation/components/layout/Layout";

// Importamos las páginas de la aplicación.
import Home from "@presentation/pages/home/Home";
import PropertiesPage from "@presentation/pages/properties/PropertiesPage";
import RegisterPropertyPage from "@presentation/pages/registerpropeties/RegisterPropertyPage";
import Promotion from "@presentation/pages/promotion_tmp/Promotion";
import Auth from "@presentation/pages/auth/Auth";

/**
 * Componente Principal App
 * Aquí definimos la estructura de navegación de la aplicación.
 * Usamos un sistema de rutas anidadas donde 'Layout' es el padre de todas las páginas.
 */
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Ruta índice: Es la página que se muestra por defecto al entrar a "/" (Home). */}
          <Route index element={<Home />} />

          {/* Página de listado de propiedades */}
          <Route path="properties" element={<PropertiesPage />} />

          {/* Página para registrar nuevas propiedades */}
          <Route path="registerpropeties" element={<RegisterPropertyPage />} />

          {/* Página de promociones */}
          <Route path="promotion" element={<Promotion />} />

          {/* Página de autenticación (Login/Registro) */}
          <Route path="auth" element={<Auth />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
