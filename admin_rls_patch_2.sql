-- 3. Permitir a los usuarios LEER sus propias notificaciones (REQUERIDO PARA REALTIME)
DROP POLICY IF EXISTS "Los usuarios pueden leer sus propias notificaciones" ON public.notificaciones;

CREATE POLICY "Los usuarios pueden leer sus propias notificaciones"
ON public.notificaciones
FOR SELECT
USING (
  idusuario = (SELECT idusuario FROM public.usuarios WHERE correo = auth.email() LIMIT 1)
);
