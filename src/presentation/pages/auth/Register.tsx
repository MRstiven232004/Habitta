// Importamos nuestro hook personalizado para manejar la lógica de registro.
import { useRegisterForm } from "./hooks/useRegisterForm";
// Importamos los estilos del formulario de registro.
import "./Register.css";

/**
 * Componente Register (Formulario de Registro)
 * Permite a nuevos usuarios crear una cuenta en la plataforma.
 * Gestiona campos para nombre, correo y contraseña.
 */
function Register() {
  // Extraemos el estado y las funciones del hook.
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    togglePasswordVisibility,
    handleSubmit,
  } = useRegisterForm();

  return (
    // Ejecuta 'handleSubmit' al enviar el formulario.
    <form className="register-form" onSubmit={handleSubmit}>
      {/* Grupo: Nombre Completo */}
      <div className="form-group">
        <label htmlFor="fullName">Nombre Completo</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Juan Pérez"
          required // Obligatorio
        />
      </div>

      {/* Grupo: Correo Electrónico */}
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          required // Obligatorio
        />
      </div>

      {/* Grupo: Contraseña */}
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <div className="password-input">
          <input
            // Muestra u oculta los caracteres según el estado 'showPassword'
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            minLength={8} // Mínimo 8 caracteres para seguridad básica
            required
          />
          {/* Botón del ojo para ver la contraseña */}
          <button
            type="button"
            className="toggle-password"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
        {/* Texto de ayuda para la contraseña */}
        <small className="password-hint">Mínimo 8 caracteres</small>
      </div>

      {/* Botón de envío */}
      <button type="submit" className="submit-button">
        Crear Cuenta
      </button>
    </form>
  );
}

export default Register;
