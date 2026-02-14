import { useState } from "react";
import { useAuth } from "@application/context/AuthContext";
import { useNavigate } from "react-router-dom";

/**
 * Hook para el formulario de registro.
 * Conecta con Supabase Auth a través del AuthContext.
 */
export function useRegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await signUp(email, password, fullName);
      // Redirigir al inicio después del registro exitoso
      navigate("/");
    } catch (err) {
      const mensaje =
        err instanceof Error ? err.message : "Error al registrarse";
      setError(mensaje);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return {
    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    togglePasswordVisibility,
    handleSubmit,
    error,
    loading,
  };
}
