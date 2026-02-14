import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { supabase } from "@infrastructure/supabase/client";
import { authApi } from "@infrastructure/api/auth.api";
import type { Usuario } from "@domain/entities/Usuario";

/**
 * Interfaz del contexto de autenticación.
 * Expone el usuario actual, estados de carga, y funciones de auth.
 */
interface AuthContextType {
  usuario: Usuario | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, nombre: string) => Promise<void>;
  signOut: () => Promise<void>;
}

// Contexto con valor por defecto null
const AuthContext = createContext<AuthContextType | null>(null);

/**
 * Hook para acceder al contexto de autenticación.
 * Debe usarse dentro de un <AuthProvider>.
 */
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un <AuthProvider>");
  }
  return context;
}

/**
 * Proveedor de autenticación.
 * Envuelve la app y escucha cambios de sesión en Supabase Auth.
 *
 * Usa una bandera `isManualAction` para evitar que `onAuthStateChange`
 * interfiera cuando signIn/signUp están ejecutándose manualmente.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  // Bandera para evitar que onAuthStateChange interfiera con signIn/signUp
  const isManualAction = useRef(false);

  // Al montar: verificar si hay sesión activa
  useEffect(() => {
    const initAuth = async () => {
      try {
        const session = await authApi.getSession();
        if (session?.user?.email) {
          const user = await authApi.getUsuarioByCorreo(session.user.email);
          setUsuario(user);
        }
      } catch (err) {
        console.error("Error al inicializar auth:", err);
      } finally {
        setLoading(false);
      }
    };

    initAuth();

    // Escuchar cambios de autenticación (solo cuando NO es una acción manual)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      // Si estamos en una acción manual (signIn/signUp), no hacer nada aquí
      // para evitar queries duplicados y condiciones de carrera
      if (isManualAction.current) return;

      if (event === "SIGNED_IN" && session?.user?.email) {
        const user = await authApi.getUsuarioByCorreo(session.user.email);
        setUsuario(user);
      } else if (event === "SIGNED_OUT") {
        setUsuario(null);
      }
    });

    // Limpiar suscripción al desmontar
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Función de inicio de sesión
  const signIn = async (email: string, password: string) => {
    isManualAction.current = true;
    try {
      const user = await authApi.signIn(email, password);
      setUsuario(user);
    } finally {
      isManualAction.current = false;
    }
  };

  // Función de registro
  const signUp = async (email: string, password: string, nombre: string) => {
    isManualAction.current = true;
    try {
      const user = await authApi.signUp(email, password, nombre);
      setUsuario(user);
    } finally {
      isManualAction.current = false;
    }
  };

  // Función de cierre de sesión
  const signOut = async () => {
    isManualAction.current = true;
    try {
      await authApi.signOut();
      setUsuario(null);
    } finally {
      isManualAction.current = false;
    }
  };

  return (
    <AuthContext.Provider value={{ usuario, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
