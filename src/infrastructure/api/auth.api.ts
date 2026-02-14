import { supabase } from "@infrastructure/supabase/client";
import type { Usuario } from "@domain/entities/Usuario";

/**
 * Traduce los mensajes de error de Supabase Auth de inglés a español.
 * Supabase retorna errores en inglés, pero la app es en español.
 */
function traducirError(mensajeIngles: string): string {
  const traducciones: Record<string, string> = {
    "User already registered":
      "Este correo ya está registrado. Intenta iniciar sesión.",
    "Invalid login credentials": "Correo o contraseña incorrectos.",
    "Email not confirmed":
      "Debes confirmar tu correo electrónico antes de iniciar sesión.",
    "Password should be at least 6 characters":
      "La contraseña debe tener al menos 6 caracteres.",
    "Unable to validate email address: invalid format":
      "El formato del correo electrónico no es válido.",
    "Signup requires a valid password": "Debes ingresar una contraseña válida.",
    "To signup, please provide your email":
      "Debes ingresar un correo electrónico.",
    "Email rate limit exceeded":
      "Has excedido el límite de intentos. Espera unos minutos.",
    "For security purposes, you can only request this once every 60 seconds":
      "Por seguridad, solo puedes intentar una vez cada 60 segundos.",
  };

  return traducciones[mensajeIngles] ?? mensajeIngles;
}

/**
 * API de autenticación — usa Supabase Auth + tabla `usuarios`.
 *
 * Flujo:
 * 1. signUp → supabase.auth.signUp() + INSERT en tabla `usuarios`
 * 2. signIn → supabase.auth.signInWithPassword() + UPDATE fechalogin
 * 3. signOut → supabase.auth.signOut()
 */
export const authApi = {
  /**
   * Registra un nuevo usuario.
   * Crea el usuario en Supabase Auth y luego inserta en la tabla `usuarios`.
   */
  signUp: async (
    email: string,
    password: string,
    nombre: string,
  ): Promise<Usuario> => {
    // 1. Crear usuario en Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      console.error("Error al registrar en Supabase Auth:", authError.message);
      throw new Error(traducirError(authError.message));
    }

    if (!authData.user) {
      throw new Error("No se pudo crear el usuario.");
    }

    // Detectar "éxito falso" — Supabase con confirmación de email desactivada
    // retorna un user pero con identities vacío si el email ya existe
    if (authData.user.identities && authData.user.identities.length === 0) {
      throw new Error(
        "Este correo ya está registrado. Intenta iniciar sesión.",
      );
    }

    // 2. Verificar si ya existe en la tabla `usuarios` (puede pasar si
    //    se registró antes pero el INSERT no se completó)
    const { data: existente } = await supabase
      .from("usuarios")
      .select("*")
      .eq("correo", email)
      .maybeSingle();

    if (existente) {
      return existente;
    }

    // 3. Insertar en la tabla `usuarios` para sincronizar
    const { data: usuario, error: dbError } = await supabase
      .from("usuarios")
      .insert({
        correo: email,
        nombre: nombre,
        contrasena: "managed_by_supabase_auth",
        telefono: null,
        fotoperfil: null,
        descripcion: null,
      })
      .select()
      .maybeSingle();

    if (dbError || !usuario) {
      console.error("Error al insertar en tabla usuarios:", dbError?.message);
      throw new Error(
        "Cuenta creada, pero hubo un problema al guardar tu perfil. " +
          "Verifica las políticas RLS de la tabla 'usuarios'.",
      );
    }

    return usuario;
  },

  /**
   * Inicia sesión con correo y contraseña.
   * Actualiza la fecha de último login en la tabla `usuarios`.
   */
  signIn: async (email: string, password: string): Promise<Usuario> => {
    // 1. Autenticar con Supabase Auth
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      console.error("Error al iniciar sesión:", authError.message);
      throw new Error(traducirError(authError.message));
    }

    // 2. Intentar actualizar fechalogin (si falla por RLS, no es crítico)
    await supabase
      .from("usuarios")
      .update({ fechalogin: new Date().toISOString() })
      .eq("correo", email);

    // 3. Obtener datos del usuario
    const { data: usuario, error: dbError } = await supabase
      .from("usuarios")
      .select("*")
      .eq("correo", email)
      .maybeSingle();

    if (dbError) {
      console.error("Error al obtener usuario:", dbError.message);
      throw new Error(
        "Sesión iniciada, pero no se pudo cargar tu perfil. " +
          "Verifica las políticas RLS de la tabla 'usuarios'.",
      );
    }

    if (!usuario) {
      // El usuario existe en Auth pero NO en tabla usuarios — auto-crear
      console.warn(
        "Usuario autenticado pero no existe en tabla 'usuarios'. Creando registro...",
      );

      const { data: nuevoUsuario, error: insertError } = await supabase
        .from("usuarios")
        .insert({
          correo: email,
          nombre: email.split("@")[0],
          contrasena: "managed_by_supabase_auth",
          telefono: null,
          fotoperfil: null,
          descripcion: null,
        })
        .select()
        .maybeSingle();

      if (insertError || !nuevoUsuario) {
        console.error("Error al auto-crear usuario:", insertError?.message);
        throw new Error(
          "Sesión iniciada, pero no se pudo crear tu perfil. " +
            "Verifica las políticas RLS de la tabla 'usuarios'.",
        );
      }

      return nuevoUsuario;
    }

    return usuario;
  },

  /**
   * Cierra la sesión del usuario actual.
   */
  signOut: async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error al cerrar sesión:", error.message);
      throw new Error(traducirError(error.message));
    }
  },

  /**
   * Obtiene la sesión actual (si existe).
   */
  getSession: async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Error al obtener sesión:", error.message);
      return null;
    }
    return data.session;
  },

  /**
   * Obtiene los datos del usuario de la tabla `usuarios` por correo.
   * Retorna null si no existe (no lanza error).
   */
  getUsuarioByCorreo: async (correo: string): Promise<Usuario | null> => {
    const { data, error } = await supabase
      .from("usuarios")
      .select("*")
      .eq("correo", correo)
      .maybeSingle();

    if (error) {
      console.error("Error al buscar usuario:", error.message);
      return null;
    }

    return data;
  },
};
