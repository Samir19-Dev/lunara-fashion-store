# LUNARA FASHION STORE

Sitio web estático de moda con catálogo de prendas para mujer y hombre, filtros, búsqueda, carrito de compras y formularios de contacto. Construido con HTML, CSS y JavaScript puro (sin frameworks ni dependencias de build).

- Repositorio: <https://github.com/Samir19-Dev/lunara-fashion-store>
- Idioma de la interfaz: español (Colombia, precios en COP)

## Características

- **Catálogo de 20 prendas** con nombre, materiales, descripción, tallas, colores, precio y stock.
- **Colecciones** y **filtros** por categoría, género y prendas destacadas.
- **Búsqueda** por nombre, material, tipo o descripción.
- **Carrito de compras** con selección de talla y color, control de cantidades y persistencia en `localStorage`.
- **Resumen del pedido** con subtotal, envío y total; envío gratis a partir de un monto configurable.
- **Checkout** con validación de datos y modal de confirmación (pedido simulado, sin pasarela de pago real).
- **Sección de referencias** con vista de detalle por producto.
- **Chatbot** de atención al cliente con respuestas sobre productos, tallas, precios, pedidos y envíos.
- **Formularios** de contacto, inicio de sesión y registro con validación en el navegador.
- **Diseño responsive** con paleta pastel, animaciones y respeto a `prefers-reduced-motion`.
- **Accesibilidad**: etiquetas ARIA, navegación por teclado y textos alternativos.

## Tecnologías

- HTML5
- CSS3 (variables, grid, flexbox, animaciones)
- JavaScript (ES6+, sin dependencias)
- Imágenes en formato WebP
- Tipografías de Google Fonts: Cormorant Garamond y Jost

## Estructura del proyecto

```
lunara-fashion-store/
├── index.html          # Estructura y contenido de la página
├── styles.css          # Estilos, variables y responsive
├── script.js           # Catálogo, carrito, filtros, chatbot y validaciones
├── images/
│   ├── *.webp          # Imágenes originales de las prendas
│   └── thumbs/
│       ├── card/       # Miniaturas para catálogo
│       ├── full/       # Imágenes de detalle
│       └── mini/       # Miniaturas pequeñas
└── .gitignore
```

## Cómo ejecutar

Al ser un sitio estático no requiere instalación ni compilación.

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Samir19-Dev/lunara-fashion-store.git
   ```

2. Abre `index.html` en el navegador, o levanta un servidor local (recomendado para evitar restricciones de `file://`):

   ```bash
   # Con Python
   python -m http.server 8000

   # Con Node.js
   npx serve .
   ```

   Luego visita `http://localhost:8000`.

## Configuración

Los datos de contacto, redes sociales y reglas de envío están en el objeto `CONFIG` al inicio de `script.js`:

```js
const CONFIG = {
  instagram: '...',
  facebook: '...',
  tiktok: '...',
  whatsapp: '...',
  whatsappNumero: '...',
  email: '...',
  telefono: '...',
  envioCosto: 15000,
  envioGratisDesde: 250000
};
```

Para modificar el catálogo, edita el arreglo `PRODUCTOS` en `script.js`. Cada producto incluye `id`, `nombre`, `tipo`, `categoria`, `genero`, `materiales`, `precio`, `tallas`, `colores`, `stock`, `destacado` e `imagenes`.

## Notas

- El carrito se guarda en el navegador con la clave `lunara_carrito_v1`.
- El inicio de sesión, el registro y la confirmación de pedido son **demostrativos**: no existe backend ni se almacenan contraseñas.
- Los precios se muestran en pesos colombianos (COP).
- Antes de publicar, reemplaza los enlaces de ejemplo de `CONFIG` por las cuentas y el número reales de la tienda.

## Autor

**Samir Julio** — [@Samir19-Dev](https://github.com/Samir19-Dev)
