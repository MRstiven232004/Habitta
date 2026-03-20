import { supabase } from "@infrastructure/supabase/client";

/** API de favoritos — CRUD contra tabla `favoritos` */
export const favoritosApi = {
  /** Obtener IDs de propiedades favoritas de un usuario */
  getFavoritoIds: async (idusuario: number): Promise<number[]> => {
    const { data, error } = await supabase
      .from("favoritos")
      .select("idpropiedad")
      .eq("idusuario", idusuario);

    if (error) throw new Error(error.message);
    return (data ?? []).map((f: { idpropiedad: number }) => f.idpropiedad);
  },

  /** Agregar una propiedad a favoritos */
  addFavorito: async (
    idusuario: number,
    idpropiedad: number,
  ): Promise<void> => {
    const { error } = await supabase
      .from("favoritos")
      .insert({ idusuario, idpropiedad });

    if (error) throw new Error(error.message);
  },

  /** Quitar una propiedad de favoritos */
  removeFavorito: async (
    idusuario: number,
    idpropiedad: number,
  ): Promise<void> => {
    const { error } = await supabase
      .from("favoritos")
      .delete()
      .eq("idusuario", idusuario)
      .eq("idpropiedad", idpropiedad);

    if (error) throw new Error(error.message);
  },
  /** Obtener el conteo total de favoritos de una propiedad */
  getFavoritesCountByProperty: async (idpropiedad: number): Promise<number> => {
    const { count, error } = await supabase
      .from("favoritos")
      .select("*", { count: "exact", head: true })
      .eq("idpropiedad", idpropiedad);

    if (error) throw new Error(error.message);
    return count ?? 0;
  },
};
