Quiero que desarrolles una página web profesional para un emprendimiento de tarot y lecturas espirituales.

IMPORTANTE:
La página NO debe parecer una plantilla genérica de tarot.
Debe parecer una extensión directa de la identidad visual de Instagram del emprendimiento.

Voy a proporcionar capturas del feed de Instagram como referencia visual. Analizá cuidadosamente esas imágenes antes de diseñar:
- colores predominantes
- contraste
- tipografías
- composición
- uso de texturas
- iluminación
- estética de las cartas
- elementos astrales
- estilo de imágenes
- bordes
- sombras
- ornamentación
- proporciones
- personalidad visual de la marca

La identidad visual actualmente se caracteriza por:
- negro
- violeta oscuro
- fucsia/magenta
- dorado
- fondos oscuros
- atmósfera mística
- tarot
- estrellas
- oscuridad púrpura
- elementos astrales
- cartas de tarot
- una estética elegante y misteriosa
- el logo característico es un gato negro con estrellas blancas y un fondo/atmósfera púrpura
- en los videos de Instagram se utiliza principalmente la tipografía Cinzel

La web debe mantener esta identidad sin caer en un diseño infantil, exageradamente brillante o demasiado "fantasy".
Debe sentirse elegante, misteriosa, femenina, profesional y premium.

==================================================
OBJETIVO DE LA WEB
==================================================

La web debe servir como presentación del emprendimiento y principalmente como catálogo de servicios.

NO quiero un e-commerce tradicional con carrito y checkout.

El objetivo principal es que una persona:
1. entre a la web
2. conozca el emprendimiento
3. vea las lecturas disponibles
4. pueda conocer precios y detalles
5. tenga respuestas a preguntas frecuentes
6. pueda contactar fácilmente por WhatsApp para reservar/comprar

El catálogo inicialmente tendrá servicios de tarot/lecturas.

Servicios iniciales:

- Lectura de pareja — $5.000
- Lectura sobre tu relación — $8.000
- Lectura de 30 minutos — $8.000
- Lectura de 1 hora — $18.000
- Lectura de la expareja — $10.000

Más adelante se agregarán velas y posiblemente otros productos.

Por eso NO hardcodees el catálogo directamente en los componentes.

==================================================
ESTRUCTURA GENERAL
==================================================

La web debe tener:

HEADER

A la izquierda:
- logo del emprendimiento
- nombre de la marca si corresponde

A la derecha:
- Inicio
- Catálogo
- Preguntas frecuentes

En mobile:
- menú hamburguesa
- logo visible
- navegación cómoda para celular

El header debe ser elegante, oscuro y consistente con el feed.

==================================================
PÁGINA INICIO
==================================================

Crear una sección hero muy visual.

Debe transmitir inmediatamente:
- tarot
- misterio
- espiritualidad
- elegancia
- identidad de marca

No quiero un hero típico con una mujer genérica mirando cartas.

Usar el logo/gato y elementos visuales relacionados con el universo visual real de la marca.

Incluir un CTA principal:

"Ver lecturas"

y uno secundario:

"Consultar por WhatsApp"

La página de inicio también debe tener:

1. Presentación breve del emprendimiento
2. Qué tipo de lecturas realiza
3. Algunas lecturas destacadas
4. Una llamada a la acción hacia el catálogo
5. Preguntas frecuentes resumidas
6. CTA final para contactar por WhatsApp

==================================================
CATÁLOGO
==================================================

La sección Catálogo debe ser una de las partes más importantes de la página.

Quiero un diseño de catálogo visualmente atractivo.

En desktop:

SIDEBAR IZQUIERDO

El sidebar debe ser llamativo pero elegante.

Debe permitir filtrar por categorías.

Categorías iniciales:

- Lecturas
- Velas

Más adelante podrán agregarse:
- Rituales
- Productos
- Otros servicios

No asumir que todas esas categorías ya tienen productos.

El contenido principal debe mostrar tarjetas de productos/servicios.

Cada tarjeta debe poder mostrar:

- imagen
- nombre
- descripción corta
- precio
- categoría
- botón "Ver detalles"
- botón "Consultar por WhatsApp"

Ejemplo:

LECTURA DE PAREJA
$5.000

[Ver detalles]

Al entrar al detalle:

- imagen grande
- nombre
- descripción completa
- precio
- información importante
- botón "Consultar por WhatsApp"

El botón de WhatsApp debe generar un mensaje prearmado mencionando el servicio seleccionado.

Ejemplo:

"Hola! Quisiera consultar por la Lectura de pareja de $5.000."

No realizar pagos dentro de la web inicialmente.

==================================================
BASE DE DATOS
==================================================

NO hardcodear los productos.

Quiero que el proyecto esté preparado para utilizar una base de datos.

La arquitectura debe permitir posteriormente administrar:

- productos
- categorías
- precios
- descripciones
- imágenes
- disponibilidad
- productos destacados
- orden de aparición

Modelo conceptual inicial:

Category
- id
- name
- slug
- description
- active
- created_at
- updated_at

Product
- id
- category_id
- name
- slug
- short_description
- description
- price
- image_url
- active
- featured
- sort_order
- created_at
- updated_at

La relación debe ser:

Category 1 ---- N Product

No crear una arquitectura innecesariamente compleja.

==================================================
SEGURIDAD
==================================================

La aplicación debe estar diseñada siguiendo buenas prácticas de seguridad.

MUY IMPORTANTE:

No confiar nunca en datos enviados desde el frontend.

No construir SQL concatenando strings.

Utilizar consultas parametrizadas / ORM / query builder seguro.

Validar y sanitizar entradas.

Aplicar:
- validación de tipos
- validación de longitud
- validación de precios
- validación de IDs
- protección contra SQL Injection
- protección XSS
- protección CSRF cuando corresponda
- manejo seguro de errores
- no exponer credenciales
- no colocar secretos ni API keys en el frontend

Las credenciales y variables sensibles deben utilizar variables de entorno.

Nunca devolver información sensible de la base de datos al cliente.

Si se implementa un backend/API, separar claramente:
- frontend
- backend
- acceso a datos

==================================================
ADMINISTRACIÓN DEL CATÁLOGO
==================================================

Aunque inicialmente la web solamente sea pública, diseñá la arquitectura pensando en que posteriormente quiero poder administrar el catálogo.

Por ejemplo, posteriormente podría existir:

/admin

donde pueda:
- crear producto
- editar producto
- eliminar/desactivar producto
- modificar precio
- cambiar imagen
- modificar categoría
- marcar como destacado

NO es obligatorio implementar todo el panel administrativo ahora si eso complica innecesariamente la primera versión.

Pero la arquitectura debe permitir incorporarlo posteriormente sin rehacer toda la aplicación.

==================================================
WHATSAPP
==================================================

El objetivo final de los productos es llevar al cliente a WhatsApp.

Cada producto debe tener un botón de consulta.

El número de WhatsApp NO debe estar repetido por toda la aplicación.

Debe existir una única configuración:

WHATSAPP_NUMBER

y desde allí construir los enlaces.

El mensaje debe generarse dinámicamente según el producto.

Ejemplo:

Hola! Quisiera consultar por la Lectura de pareja.

Codificar correctamente el mensaje para URL.

NO implementar pagos.

==================================================
PREGUNTAS FRECUENTES
==================================================

Crear una sección FAQ elegante y fácil de utilizar.

Utilizar acordeones.

Inicialmente dejar preparada la estructura para preguntas como:

- ¿Cómo se realiza una lectura?
- ¿Cómo puedo reservar?
- ¿Cómo se paga?
- ¿Cuánto dura una lectura?
- ¿Las lecturas son presenciales o virtuales?
- ¿Cómo recibo mi lectura?
- ¿Puedo consultar por WhatsApp antes de reservar?

IMPORTANTE:
No inventar respuestas específicas sobre el emprendimiento si no fueron proporcionadas.

Dejar esas respuestas como contenido fácilmente editable.

==================================================
DISEÑO
==================================================

La estética debe inspirarse directamente en las capturas proporcionadas.

Paleta conceptual:

NEGRO
VIOLETA OSCURO
FUXIA / MAGENTA
DORADO
BLANCO / BLANCO CÁLIDO

No utilizar colores aleatorios.

El dorado debe utilizarse principalmente como acento.

El fucsia/violeta puede utilizarse para:
- glow
- hover
- botones secundarios
- detalles
- iluminación

El negro debe dominar el fondo.

Evitar exceso de gradientes.

Utilizar sombras y glow de manera sutil.

La estética debe recordar a:
- cartas de tarot
- noche
- estrellas
- universo
- misterio
- elegancia

pero sin convertir la web en una caricatura de "magia".

==================================================
TIPOGRAFÍA
==================================================

La identidad utiliza Cinzel.

Utilizar Cinzel principalmente para:
- títulos
- nombres importantes
- headings
- elementos destacados

Para textos largos utilizar una tipografía complementaria altamente legible.

No utilizar Cinzel para absolutamente todo.

La jerarquía tipográfica debe ser clara.

==================================================
LOGO
==================================================

El logo representa un gato negro con estrellas blancas dentro de una estética púrpura.

El logo debe ocupar un lugar importante pero no dominar la pantalla.

Utilizarlo en:
- header
- hero
- footer

No modificar el logo.

No recrearlo artificialmente si existe un archivo original.

Si el archivo del logo no está disponible, dejar un placeholder claramente identificable.

==================================================
ANIMACIONES
==================================================

Usar animaciones sutiles.

Ejemplos:
- aparición progresiva
- hover suave
- glow muy leve
- partículas/estrellas extremadamente sutiles
- transición entre secciones

NO abusar de:
- partículas
- parallax
- animaciones constantes
- efectos que dificulten leer
- efectos que parezcan una plantilla barata

La página debe sentirse premium.

==================================================
RESPONSIVE
==================================================

La web debe estar diseñada primero pensando en desktop y mobile.

En mobile:

- header compacto
- menú hamburguesa
- catálogo en una sola columna
- sidebar convertido en filtros desplegables
- botones grandes
- textos legibles
- imágenes correctamente proporcionadas
- no permitir overflow horizontal

La experiencia móvil es MUY importante porque gran parte del tráfico probablemente provenga de Instagram y WhatsApp.

==================================================
ARQUITECTURA
==================================================

Elegí una arquitectura moderna y mantenible.

Preferencia:

Frontend:
- Next.js
- React
- TypeScript
- Tailwind CSS

Backend/database:
- Supabase/PostgreSQL

Si considerás que otra arquitectura es claramente mejor, explicá primero por qué.

No quiero una aplicación innecesariamente compleja.

Separar correctamente:

components/
app/
lib/
services/
types/
database/

Mantener el código modular.

Evitar componentes gigantes.

==================================================
SEO
==================================================

Preparar:

- title
- meta description
- Open Graph
- favicon
- metadata
- URLs amigables
- sitemap
- robots.txt

El sitio debe poder posicionarse posteriormente en Google.

==================================================
ACCESIBILIDAD
==================================================

Agregar:

- alt text
- contraste adecuado
- navegación por teclado
- botones accesibles
- labels
- estados de focus
- HTML semántico

==================================================
CATÁLOGO DE WHATSAPP
==================================================

IMPORTANTE:

Investigar antes de implementar una integración con WhatsApp Business.

No asumir que se puede simplemente extraer/scrapear el catálogo de la aplicación WhatsApp Business.

Quiero que analices si actualmente existe una API oficial de Meta que permita acceder al catálogo asociado a una WhatsApp Business Account.

Si existe una integración oficial viable:
- explicar qué credenciales requiere
- explicar qué permisos requiere
- explicar cómo obtener el WABA ID / catalog ID
- explicar cómo obtener los productos
- explicar las limitaciones
- diseñar la aplicación para poder integrarlo posteriormente

Si no existe una forma sencilla/adecuada para este proyecto:
- NO implementar scraping
- utilizar nuestra propia base de datos como fuente de verdad
- dejar preparada una futura sincronización/importación

No almacenar tokens de Meta en el frontend.

==================================================
IMPORTACIÓN DEL CATÁLOGO
==================================================

Quiero que la arquitectura permita eventualmente:

Meta/WhatsApp Catalog
        ↓
API oficial
        ↓
Backend
        ↓
Base de datos
        ↓
Web

Pero NO quiero que la web dependa obligatoriamente de WhatsApp para funcionar.

La web debe seguir funcionando aunque Meta esté caído o la integración esté deshabilitada.

==================================================
ESTILO DE COMPONENTES
==================================================

Las cards del catálogo deben parecer parte de la identidad visual.

No utilizar:
- cards blancas genéricas
- sombras grises
- botones Bootstrap
- diseño SaaS
- estilo ecommerce genérico
- colores azules predeterminados

Utilizar:
- fondos oscuros
- bordes sutiles
- dorado
- violeta
- fucsia
- detalles ornamentales
- glow controlado
- imágenes grandes
- jerarquía visual

==================================================
FOOTER
==================================================

Incluir:

- logo
- nombre del emprendimiento
- Instagram
- WhatsApp
- navegación
- copyright

Los links deben ser fácilmente editables desde configuración.

==================================================
IMPORTANTE SOBRE EL DESARROLLO
==================================================

No generes todo el proyecto de golpe sin verificar nada.

Trabajá por etapas:

FASE 1
Analizar las referencias visuales y definir:
- paleta
- tipografías
- layout
- componentes
- arquitectura

FASE 2
Crear estructura base del proyecto.

FASE 3
Crear Header + Home.

FASE 4
Crear catálogo con datos mock.

FASE 5
Crear modelo de base de datos.

FASE 6
Conectar catálogo a base de datos.

FASE 7
Agregar FAQ.

FASE 8
Agregar integración de WhatsApp.

FASE 9
Revisar responsive.

FASE 10
Revisar seguridad, accesibilidad, SEO y performance.

Después de cada fase:
- explicar qué se hizo
- indicar archivos creados/modificados
- indicar cómo probarlo
- indicar problemas pendientes

NO continuar acumulando código si existe un error previo.

==================================================
RESULTADO FINAL ESPERADO
==================================================

Quiero una web que cuando una persona proveniente del Instagram del emprendimiento entre, diga inmediatamente:

"Esta página pertenece al mismo tarot que vi en Instagram."

La identidad visual debe ser consistente con las referencias proporcionadas.

La web debe ser:
- elegante
- oscura
- mística
- femenina
- profesional
- moderna
- rápida
- responsive
- segura
- mantenible

Y el catálogo debe poder crecer posteriormente sin tener que rehacer toda la aplicación.

Antes de comenzar a programar, analizá las imágenes de referencia y proponé la estructura visual exacta de la página.