-- =============================================================================
-- Paola Tarot — Datos iniciales del catálogo
--
-- Mismo contenido que FrontEnd/src/services/catalog.mock.ts.
-- Nombres y precios reales. Las descripciones no provistas quedan como
-- [COMPLETAR: ...] hasta tener el texto real.
--
-- UUID fijos: los mismos en desarrollo y producción, y en el mock.
-- Velas: no se carga hasta confirmar su catálogo.
-- =============================================================================

insert into public.categories (id, name, slug, description, active, sort_order) values
  ('0b6c1f2e-3a4d-4c5e-8f60-000000000001', 'Lecturas', 'lecturas', null, true, 1);

insert into public.products
  (id, category_id, name, slug, short_description, description, price, image_url, image_alt, details, active, featured, sort_order)
values
  (
    'a1d0c3b2-5e4f-4a6b-9c7d-000000000001',
    '0b6c1f2e-3a4d-4c5e-8f60-000000000001',
    'Lectura de pareja',
    'lectura-de-pareja',
    '[COMPLETAR: descripción corta de la lectura de pareja.]',
    '[COMPLETAR: descripción completa de la lectura de pareja.]',
    5000.00, null, null,
    '[{"label": "Reserva", "value": "Turnos con reserva previa"}]',
    true, true, 1
  ),
  (
    'a1d0c3b2-5e4f-4a6b-9c7d-000000000002',
    '0b6c1f2e-3a4d-4c5e-8f60-000000000001',
    'Lectura sobre tu relación',
    'lectura-sobre-tu-relacion',
    '5 preguntas enfocadas en tu pareja actual.',
    'Una sesión de 5 preguntas enfocadas en tu pareja actual: qué siente realmente por vos en este momento, qué piensa de la relación y hacia dónde quiere llevarla, cuáles son sus intenciones a corto y mediano plazo, qué pueden mejorar juntos y qué consejo tienen las cartas para la relación.',
    8000.00, null, null,
    '[{"label": "Sesión", "value": "5 preguntas"}, {"label": "Reserva", "value": "Turnos con reserva previa"}]',
    true, true, 2
  ),
  (
    'a1d0c3b2-5e4f-4a6b-9c7d-000000000003',
    '0b6c1f2e-3a4d-4c5e-8f60-000000000001',
    'Lectura de 30 minutos',
    'lectura-de-30-minutos',
    '[COMPLETAR: descripción corta de la lectura de 30 minutos.]',
    '[COMPLETAR: descripción completa de la lectura de 30 minutos.]',
    8000.00, null, null,
    '[{"label": "Duración", "value": "30 minutos"}, {"label": "Reserva", "value": "Turnos con reserva previa"}]',
    true, false, 3
  ),
  (
    'a1d0c3b2-5e4f-4a6b-9c7d-000000000004',
    '0b6c1f2e-3a4d-4c5e-8f60-000000000001',
    'Lectura de 1 hora',
    'lectura-de-1-hora',
    'Preguntas libres, mensajes y orientación para tu camino.',
    'Una sesión de preguntas libres: mensajes y orientación para tu camino, descubrí qué energías te rodean y consultá sobre cualquier tema que necesites aclarar.',
    18000.00, null, null,
    '[{"label": "Duración", "value": "1 hora"}, {"label": "Reserva", "value": "Turnos con reserva previa"}]',
    true, true, 4
  ),
  (
    'a1d0c3b2-5e4f-4a6b-9c7d-000000000005',
    '0b6c1f2e-3a4d-4c5e-8f60-000000000001',
    'Lectura de la expareja',
    'lectura-de-la-expareja',
    '[COMPLETAR: descripción corta de la lectura de la expareja.]',
    '[COMPLETAR: descripción completa de la lectura de la expareja.]',
    10000.00, null, null,
    '[{"label": "Reserva", "value": "Turnos con reserva previa"}]',
    true, false, 5
  );
