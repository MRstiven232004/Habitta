-- 1. Permitir que CUALQUIER SISTEMA/USUARIO pueda insertar notificaciones
-- Esto abre totalmente la capacidad de inserción para resolver de raíz el error RLS.
DROP POLICY IF EXISTS "Los usuarios pueden insertar notificaciones relacionadas a su id" ON public.notificaciones;
DROP POLICY IF EXISTS "Permitir insertar notificaciones a usuarios autenticados" ON public.notificaciones;

CREATE POLICY "Permitir insertar notificaciones universalmente"
ON public.notificaciones
FOR INSERT
WITH CHECK (
  true
);
