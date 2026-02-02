// Importamos el hook personalizado que gestiona toda la lógica del formulario de inicio de sesión.
import { useLoginForm } from "./hooks/useLoginForm";
// Importamos los estilos específicos para el login.
import "./Login.css";

/**
 * Componente Login (Formulario de Inicio de Sesión)
 * Este componente muestra los campos necesarios para que un usuario entre a su cuenta.
 * Utiliza un hook para manejar el estado de los inputs y el envío del formulario.
 */
function Login() {
  // Obtenemos los valores y funciones necesarios desde nuestro hook.
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    togglePasswordVisibility,
    handleSubmit,
  } = useLoginForm();

  return (
    // Formulario que ejecuta 'handleSubmit' cuando se intenta enviar.
    <form className="login-form" onSubmit={handleSubmit}>
      {/* Grupo de entrada para el Correo Electrónico */}
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          // Actualizamos el estado 'email' cada vez que el usuario escribe.
          onChange={(e) => setEmail(e.target.value)}
          placeholder="correo@gmail.com"
          required // Campo obligatorio
        />
      </div>

      {/* Grupo de entrada para la Contraseña */}
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <div className="password-input">
          <input
            // Cambiamos entre tipo 'text' y 'password' para mostrar u ocultar la contraseña.
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required // Campo obligatorio
          />
          {/* Botón para alternar la visibilidad de la contraseña (el ojo) */}
          <button
            type="button" // Tipo 'button' para evitar que envíe el formulario por accidente.
            className="toggle-password"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
      </div>

      {/* Botón principal para enviar el formulario */}
      <button type="submit" className="submit-button">
        Iniciar Sesión
      </button>
    </form>
  );
}

export default Login;
