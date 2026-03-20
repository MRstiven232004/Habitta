-- 1. Permitir que CUALQUIER USUARIO AUTENTICADO o GESTOR pueda insertar notificaciones
-- Esto soluciona el bloque RLS del administrador cuando intenta notificar a un usuario ("new row violates row-level security policy for table 'notificaciones'")
DROP POLICY IF EXISTS "Los usuarios pueden insertar notificaciones relacionadas a su id" ON public.notificaciones;
DROP POLICY IF EXISTS "Permitir insertar notificaciones a usuarios autenticados" ON public.notificaciones;

CREATE POLICY "Permitir insertar notificaciones a usuarios autenticados"
ON public.notificaciones
FOR INSERT
WITH CHECK (
  auth.role() = 'authenticated'
);
