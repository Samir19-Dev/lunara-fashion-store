/* ==========================================================
   LUNARA FASHION STORE — Lógica de la página
   Catálogo, selección por referencias, carrito, formularios,
   navegación y chatbot de atención al cliente.
   ========================================================== */

/* ---------- 1. CONFIGURACIÓN EDITABLE ---------- */
const CONFIG = {
  // Cambia estos enlaces por las cuentas oficiales de la tienda
  instagram: 'https://www.instagram.com/lunarafashionstore',
  facebook: 'https://www.facebook.com/lunarafashionstore',
  tiktok: 'https://www.tiktok.com/@lunarafashionstore',
  whatsapp: 'https://wa.me/573001234567',
  whatsappNumero: '573001234567',
  email: 'contacto@lunarafashionstore.com',
  telefono: '+57 300 123 4567',
  envioCosto: 15000,
  envioGratisDesde: 250000
};

/* ---------- 2. CATÁLOGO (20 prendas de LUNARA) ---------- */
const PRODUCTOS = [
  {
    "id": 1,
    "nombre": "Blazer para Mujer Viscosa Poliéster Tafetán",
    "slug": "blazer-para-mujer-viscosa-poliester-tafetan",
    "archivo": "Blazer para Mujer Viscosa Poliéster Tafetán.webp",
    "tipo": "Blazer",
    "categoria": "Blazers",
    "genero": "mujer",
    "materiales": [
      "Viscosa",
      "Poliéster",
      "Tafetán"
    ],
    "color": "Verde petróleo oscuro",
    "colorHex": "#16212C",
    "descripcion": "Blazer de tafetán con caída estructurada, corte entallado y forro interior. Un básico elegante para ocasiones de día y de noche.",
    "colecciones": [
      "Chaquetas",
      "Prendas de temporada"
    ],
    "precio": 189900,
    "tallas": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colores": [
      {
        "nombre": "Verde petróleo",
        "hex": "#16212C"
      },
      {
        "nombre": "Verde pino",
        "hex": "#0B2121"
      }
    ],
    "stock": 25,
    "destacado": true,
    "imagenes": {
      "original": "images/Blazer para Mujer Viscosa Poliéster Tafetán.webp",
      "full": "images/thumbs/full/Blazer para Mujer Viscosa Poliéster Tafetán.webp",
      "card": "images/thumbs/card/Blazer para Mujer Viscosa Poliéster Tafetán.webp",
      "mini": "images/thumbs/mini/Blazer para Mujer Viscosa Poliéster Tafetán.webp"
    }
  },
  {
    "id": 2,
    "nombre": "Blusa Elegante Unicolor para Mujer",
    "slug": "blusa-elegante-unicolor-para-mujer",
    "archivo": "Blusa Elegante Unicolor para Mujer.webp",
    "tipo": "Blusa",
    "categoria": "Blusas",
    "genero": "mujer",
    "materiales": [
      "Unicolor"
    ],
    "color": "Negro",
    "colorHex": "#161616",
    "descripcion": "Blusa unicolor de caída suave y diseño minimalista. Versátil para el trabajo, la oficina o una salida casual.",
    "colecciones": [
      "Blusas casuales"
    ],
    "precio": 89900,
    "tallas": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colores": [
      {
        "nombre": "Negro",
        "hex": "#161616"
      }
    ],
    "stock": 25,
    "destacado": false,
    "imagenes": {
      "original": "images/Blusa Elegante Unicolor para Mujer.webp",
      "full": "images/thumbs/full/Blusa Elegante Unicolor para Mujer.webp",
      "card": "images/thumbs/card/Blusa Elegante Unicolor para Mujer.webp",
      "mini": "images/thumbs/mini/Blusa Elegante Unicolor para Mujer.webp"
    }
  },
  {
    "id": 3,
    "nombre": "Blusa para Mujer Viscosa Poliamida Arturo Calle",
    "slug": "blusa-para-mujer-viscosa-poliamida-arturo-calle",
    "archivo": "Blusa para Mujer Viscosa Poliamida Arturo Calle.webp",
    "tipo": "Blusa",
    "categoria": "Blusas",
    "genero": "mujer",
    "materiales": [
      "Viscosa",
      "Poliamida"
    ],
    "color": "Café / taupe",
    "colorHex": "#6E6358",
    "descripcion": "Blusa de la línea Arturo Calle en mezcla de viscosa y poliamida, con caída fluida y acabado satinado.",
    "colecciones": [
      "Blusas casuales"
    ],
    "precio": 119900,
    "tallas": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colores": [
      {
        "nombre": "Café",
        "hex": "#6E6358"
      },
      {
        "nombre": "Taupe",
        "hex": "#846E63"
      }
    ],
    "stock": 25,
    "destacado": false,
    "imagenes": {
      "original": "images/Blusa para Mujer Viscosa Poliamida Arturo Calle.webp",
      "full": "images/thumbs/full/Blusa para Mujer Viscosa Poliamida Arturo Calle.webp",
      "card": "images/thumbs/card/Blusa para Mujer Viscosa Poliamida Arturo Calle.webp",
      "mini": "images/thumbs/mini/Blusa para Mujer Viscosa Poliamida Arturo Calle.webp"
    }
  },
  {
    "id": 4,
    "nombre": "Buzo para Hombre Cuello Alto con Rib",
    "slug": "buzo-para-hombre-cuello-alto-con-rib",
    "archivo": "Buzo para Hombre Cuello Alto con Rib.webp",
    "tipo": "Buzo",
    "categoria": "Buzos",
    "genero": "hombre",
    "materiales": [
      "Rib"
    ],
    "color": "Azul noche",
    "colorHex": "#16214D",
    "descripcion": "Buzo de cuello alto en tejido rib con puños y ribete elástico. Cómodo, cálido y con estética urbana.",
    "colecciones": [
      "Suéteres"
    ],
    "precio": 129900,
    "tallas": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colores": [
      {
        "nombre": "Azul noche",
        "hex": "#16214D"
      },
      {
        "nombre": "Azul marino",
        "hex": "#162142"
      }
    ],
    "stock": 25,
    "destacado": true,
    "imagenes": {
      "original": "images/Buzo para Hombre Cuello Alto con Rib.webp",
      "full": "images/thumbs/full/Buzo para Hombre Cuello Alto con Rib.webp",
      "card": "images/thumbs/card/Buzo para Hombre Cuello Alto con Rib.webp",
      "mini": "images/thumbs/mini/Buzo para Hombre Cuello Alto con Rib.webp"
    }
  },
  {
    "id": 5,
    "nombre": "Camisa Business Unicolor para Hombre Silueta Regular Fit",
    "slug": "camisa-business-unicolor-para-hombre-silueta-regular-fit",
    "archivo": "Camisa Business Unicolor para Hombre Silueta Regular Fit.webp",
    "tipo": "Camisa",
    "categoria": "Camisas",
    "genero": "hombre",
    "materiales": [
      "Unicolor"
    ],
    "color": "Negro",
    "colorHex": "#161616",
    "descripcion": "Camisa de vestir unicolor con silueta regular fit, cuello estructurado y puños ajustables.",
    "colecciones": [
      "Camisas elegantes"
    ],
    "precio": 109900,
    "tallas": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colores": [
      {
        "nombre": "Negro",
        "hex": "#161616"
      }
    ],
    "stock": 25,
    "destacado": false,
    "imagenes": {
      "original": "images/Camisa Business Unicolor para Hombre Silueta Regular Fit.webp",
      "full": "images/thumbs/full/Camisa Business Unicolor para Hombre Silueta Regular Fit.webp",
      "card": "images/thumbs/card/Camisa Business Unicolor para Hombre Silueta Regular Fit.webp",
      "mini": "images/thumbs/mini/Camisa Business Unicolor para Hombre Silueta Regular Fit.webp"
    }
  },
  {
    "id": 6,
    "nombre": "Camiseta para Mujer 04229",
    "slug": "camiseta-para-mujer-04229",
    "archivo": "Camiseta para Mujer 04229.webp",
    "tipo": "Camiseta",
    "categoria": "Camisetas",
    "genero": "mujer",
    "materiales": [],
    "color": "Azul acero",
    "colorHex": "#4D6E8F",
    "descripcion": "Camiseta básica de algodón con corte recto, cuello redondo y costuras reforzadas. Un básico de closet.",
    "colecciones": [
      "Camisetas básicas"
    ],
    "precio": 49900,
    "tallas": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colores": [
      {
        "nombre": "Azul acero",
        "hex": "#4D6E8F"
      },
      {
        "nombre": "Azul denim",
        "hex": "#426384"
      }
    ],
    "stock": 25,
    "destacado": false,
    "imagenes": {
      "original": "images/Camiseta para Mujer 04229.webp",
      "full": "images/thumbs/full/Camiseta para Mujer 04229.webp",
      "card": "images/thumbs/card/Camiseta para Mujer 04229.webp",
      "mini": "images/thumbs/mini/Camiseta para Mujer 04229.webp"
    }
  },
  {
    "id": 7,
    "nombre": "Chaqueta en Cuero para Hombre Cuello Alto Puño Cremallera",
    "slug": "chaqueta-en-cuero-para-hombre-cuello-alto-puno-cremallera",
    "archivo": "Chaqueta en Cuero para Hombre Cuello Alto Puño Cremallera.webp",
    "tipo": "Chaqueta",
    "categoria": "Chaquetas",
    "genero": "hombre",
    "materiales": [
      "Cuero"
    ],
    "color": "Negro",
    "colorHex": "#161616",
    "descripcion": "Chaqueta en cuero con cuello alto, puños ajustados y cierre con cremallera. Pieza de temporada.",
    "colecciones": [
      "Chaquetas",
      "Prendas de temporada"
    ],
    "precio": 349900,
    "tallas": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colores": [
      {
        "nombre": "Negro",
        "hex": "#161616"
      },
      {
        "nombre": "Negro carbón",
        "hex": "#373737"
      }
    ],
    "stock": 25,
    "destacado": true,
    "imagenes": {
      "original": "images/Chaqueta en Cuero para Hombre Cuello Alto Puño Cremallera.webp",
      "full": "images/thumbs/full/Chaqueta en Cuero para Hombre Cuello Alto Puño Cremallera.webp",
      "card": "images/thumbs/card/Chaqueta en Cuero para Hombre Cuello Alto Puño Cremallera.webp",
      "mini": "images/thumbs/mini/Chaqueta en Cuero para Hombre Cuello Alto Puño Cremallera.webp"
    }
  },
  {
    "id": 8,
    "nombre": "Cárdigan para Mujer Acrílico Modal",
    "slug": "cardigan-para-mujer-acrilico-modal",
    "archivo": "Cárdigan para Mujer Acrílico Modal.webp",
    "tipo": "Cárdigan",
    "categoria": "Cárdigans",
    "genero": "mujer",
    "materiales": [
      "Acrílico",
      "Modal"
    ],
    "color": "Burdeos / vino oscuro",
    "colorHex": "#37212C",
    "descripcion": "Cárdigan abierto de tejido suave en mezcla acrílico-modal. Abrigo ligero ideal para las tardes frescas.",
    "colecciones": [
      "Suéteres",
      "Prendas de temporada"
    ],
    "precio": 99900,
    "tallas": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colores": [
      {
        "nombre": "Burdeos",
        "hex": "#37212C"
      },
      {
        "nombre": "Vino",
        "hex": "#2C1621"
      }
    ],
    "stock": 25,
    "destacado": false,
    "imagenes": {
      "original": "images/Cárdigan para Mujer Acrílico Modal.webp",
      "full": "images/thumbs/full/Cárdigan para Mujer Acrílico Modal.webp",
      "card": "images/thumbs/card/Cárdigan para Mujer Acrílico Modal.webp",
      "mini": "images/thumbs/mini/Cárdigan para Mujer Acrílico Modal.webp"
    }
  },
  {
    "id": 9,
    "nombre": "Jean para Mujer Denim Algodón Elastano",
    "slug": "jean-para-mujer-denim-algodon-elastano",
    "archivo": "Jean para Mujer Denim Algodón Elastano.webp",
    "tipo": "Jean",
    "categoria": "Jeans",
    "genero": "mujer",
    "materiales": [
      "Denim",
      "Algodón",
      "Elastano"
    ],
    "color": "Denim claro / beige",
    "colorHex": "#DCD1C6",
    "descripcion": "Jean de denim en mezcla de algodón y elastano, tono claro con lavado suave y corte alto.",
    "colecciones": [
      "Jeans clásicos"
    ],
    "precio": 139900,
    "tallas": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colores": [
      {
        "nombre": "Denim claro",
        "hex": "#DCD1C6"
      },
      {
        "nombre": "Beige crema",
        "hex": "#C6BBB0"
      }
    ],
    "stock": 25,
    "destacado": true,
    "imagenes": {
      "original": "images/Jean para Mujer Denim Algodón Elastano.webp",
      "full": "images/thumbs/full/Jean para Mujer Denim Algodón Elastano.webp",
      "card": "images/thumbs/card/Jean para Mujer Denim Algodón Elastano.webp",
      "mini": "images/thumbs/mini/Jean para Mujer Denim Algodón Elastano.webp"
    }
  },
  {
    "id": 10,
    "nombre": "Jean para Mujer en Denim Confortable Y Resistente",
    "slug": "jean-para-mujer-en-denim-confortable-y-resistente",
    "archivo": "Jean para Mujer en Denim Confortable Y Resistente.webp",
    "tipo": "Jean",
    "categoria": "Jeans",
    "genero": "mujer",
    "materiales": [
      "Denim"
    ],
    "color": "Azul grisáceo / denim medio",
    "colorHex": "#848FA5",
    "descripcion": "Jean de denim confortable y resistente, pensado para el uso diario con lavado medio y Tiago clásico.",
    "colecciones": [
      "Jeans clásicos"
    ],
    "precio": 149900,
    "tallas": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colores": [
      {
        "nombre": "Azul grisáceo",
        "hex": "#848FA5"
      },
      {
        "nombre": "Denim medio",
        "hex": "#79849A"
      }
    ],
    "stock": 25,
    "destacado": false,
    "imagenes": {
      "original": "images/Jean para Mujer en Denim Confortable Y Resistente.webp",
      "full": "images/thumbs/full/Jean para Mujer en Denim Confortable Y Resistente.webp",
      "card": "images/thumbs/card/Jean para Mujer en Denim Confortable Y Resistente.webp",
      "mini": "images/thumbs/mini/Jean para Mujer en Denim Confortable Y Resistente.webp"
    }
  },
  {
    "id": 11,
    "nombre": "Jean para Mujer Tiro Medio Bota Justa",
    "slug": "jean-para-mujer-tiro-medio-bota-justa",
    "archivo": "Jean para Mujer Tiro Medio Bota Justa.webp",
    "tipo": "Jean",
    "categoria": "Jeans",
    "genero": "mujer",
    "materiales": [
      "Denim"
    ],
    "color": "Gris oscuro / morado carbón",
    "colorHex": "#2C212C",
    "descripcion": "Jean de tiro medio y bota justa, con lavado oscuro y detalles de remaches en los bolsillos.",
    "colecciones": [
      "Jeans clásicos"
    ],
    "precio": 129900,
    "tallas": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colores": [
      {
        "nombre": "Gris oscuro",
        "hex": "#2C212C"
      },
      {
        "nombre": "Ciruela oscuro",
        "hex": "#37212C"
      }
    ],
    "stock": 25,
    "destacado": false,
    "imagenes": {
      "original": "images/Jean para Mujer Tiro Medio Bota Justa.webp",
      "full": "images/thumbs/full/Jean para Mujer Tiro Medio Bota Justa.webp",
      "card": "images/thumbs/card/Jean para Mujer Tiro Medio Bota Justa.webp",
      "mini": "images/thumbs/mini/Jean para Mujer Tiro Medio Bota Justa.webp"
    }
  },
  {
    "id": 12,
    "nombre": "Pantalón Casual Regular Fit para Hombre Tiro Alto Bota Recta Algodón Poliéster",
    "slug": "pantalon-casual-regular-fit-para-hombre-tiro-alto-bota-recta-algodon-poliester",
    "archivo": "Pantalón Casual Regular Fit para Hombre Tiro Alto Bota Recta Algodón Poliéster.webp",
    "tipo": "Pantalón",
    "categoria": "Pantalones",
    "genero": "hombre",
    "materiales": [
      "Algodón",
      "Poliéster"
    ],
    "color": "Café oscuro / marrón",
    "colorHex": "#6E584D",
    "descripcion": "Pantalón casual de tiro alto y bota recta en mezcla de algodón y poliéster, con cierre y cinturón.",
    "colecciones": [
      "Pantalones anchos"
    ],
    "precio": 139900,
    "tallas": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colores": [
      {
        "nombre": "Café oscuro",
        "hex": "#6E584D"
      },
      {
        "nombre": "Marrón",
        "hex": "#634D42"
      }
    ],
    "stock": 25,
    "destacado": false,
    "imagenes": {
      "original": "images/Pantalón Casual Regular Fit para Hombre Tiro Alto Bota Recta Algodón Poliéster.webp",
      "full": "images/thumbs/full/Pantalón Casual Regular Fit para Hombre Tiro Alto Bota Recta Algodón Poliéster.webp",
      "card": "images/thumbs/card/Pantalón Casual Regular Fit para Hombre Tiro Alto Bota Recta Algodón Poliéster.webp",
      "mini": "images/thumbs/mini/Pantalón Casual Regular Fit para Hombre Tiro Alto Bota Recta Algodón Poliéster.webp"
    }
  },
  {
    "id": 13,
    "nombre": "Pantalón Deportivo para Hombre 12918",
    "slug": "pantalon-deportivo-para-hombre-12918",
    "archivo": "Pantalón Deportivo para Hombre 12918.webp",
    "tipo": "Pantalón",
    "categoria": "Pantalones",
    "genero": "hombre",
    "materiales": [],
    "color": "Azul noche / gris azulado",
    "colorHex": "#21212C",
    "descripcion": "Pantalón deportivo de buena caída con cintura elástica y cordón. Cómodo para entrenar o para el día a día.",
    "colecciones": [
      "Ropa deportiva"
    ],
    "precio": 119900,
    "tallas": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colores": [
      {
        "nombre": "Azul noche",
        "hex": "#21212C"
      },
      {
        "nombre": "Gris azulado",
        "hex": "#212137"
      }
    ],
    "stock": 25,
    "destacado": false,
    "imagenes": {
      "original": "images/Pantalón Deportivo para Hombre 12918.webp",
      "full": "images/thumbs/full/Pantalón Deportivo para Hombre 12918.webp",
      "card": "images/thumbs/card/Pantalón Deportivo para Hombre 12918.webp",
      "mini": "images/thumbs/mini/Pantalón Deportivo para Hombre 12918.webp"
    }
  },
  {
    "id": 14,
    "nombre": "Pantalón Para Mujer Paoliamida Tejido Plano",
    "slug": "pantalon-para-mujer-paoliamida-tejido-plano",
    "archivo": "Pantalón Para Mujer Paoliamida Tejido Plano.webp",
    "tipo": "Pantalón",
    "categoria": "Pantalones",
    "genero": "mujer",
    "materiales": [
      "Paoliamida"
    ],
    "color": "Beige / camel claro",
    "colorHex": "#DCC6B0",
    "descripcion": "Pantalón en paoliamida de tejido plano y pierna amplia. Fresco y cómodo para los días de verano.",
    "colecciones": [
      "Pantalones anchos"
    ],
    "precio": 129900,
    "tallas": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colores": [
      {
        "nombre": "Beige",
        "hex": "#DCC6B0"
      },
      {
        "nombre": "Camel",
        "hex": "#D1BBA5"
      }
    ],
    "stock": 25,
    "destacado": false,
    "imagenes": {
      "original": "images/Pantalón Para Mujer Paoliamida Tejido Plano.webp",
      "full": "images/thumbs/full/Pantalón Para Mujer Paoliamida Tejido Plano.webp",
      "card": "images/thumbs/card/Pantalón Para Mujer Paoliamida Tejido Plano.webp",
      "mini": "images/thumbs/mini/Pantalón Para Mujer Paoliamida Tejido Plano.webp"
    }
  },
  {
    "id": 15,
    "nombre": "Pantalón para Mujer Poliéster Viscosa Tafetán",
    "slug": "pantalon-para-mujer-poliester-viscosa-tafetan",
    "archivo": "Pantalón para Mujer Poliéster Viscosa Tafetán.webp",
    "tipo": "Pantalón",
    "categoria": "Pantalones",
    "genero": "mujer",
    "materiales": [
      "Poliéster",
      "Viscosa",
      "Tafetán"
    ],
    "color": "Negro",
    "colorHex": "#161616",
    "descripcion": "Pantalón de vestir en mezcla de poliéster y viscosa con acabo taftán. Caída elegante para ocasiones especiales.",
    "colecciones": [
      "Pantalones de vestir"
    ],
    "precio": 159900,
    "tallas": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colores": [
      {
        "nombre": "Negro",
        "hex": "#161616"
      }
    ],
    "stock": 25,
    "destacado": true,
    "imagenes": {
      "original": "images/Pantalón para Mujer Poliéster Viscosa Tafetán.webp",
      "full": "images/thumbs/full/Pantalón para Mujer Poliéster Viscosa Tafetán.webp",
      "card": "images/thumbs/card/Pantalón para Mujer Poliéster Viscosa Tafetán.webp",
      "mini": "images/thumbs/mini/Pantalón para Mujer Poliéster Viscosa Tafetán.webp"
    }
  },
  {
    "id": 16,
    "nombre": "Pantalón para Mujer Sarga Lyocell Algodón Correa",
    "slug": "pantalon-para-mujer-sarga-lyocell-algodon-correa",
    "archivo": "Pantalón para Mujer Sarga Lyocell Algodón Correa.webp",
    "tipo": "Pantalón",
    "categoria": "Pantalones",
    "genero": "mujer",
    "materiales": [
      "Sarga",
      "Lyocell",
      "Algodón"
    ],
    "color": "Blanco / crema",
    "colorHex": "#DCDCD1",
    "descripcion": "Pantalón en sarga de lyocell y algodón con correa incluida. Fresco, ligero y de fácil combinación.",
    "colecciones": [
      "Pantalones de vestir"
    ],
    "precio": 139900,
    "tallas": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colores": [
      {
        "nombre": "Blanco",
        "hex": "#DCDCD1"
      },
      {
        "nombre": "Crema",
        "hex": "#DCD1C6"
      }
    ],
    "stock": 25,
    "destacado": false,
    "imagenes": {
      "original": "images/Pantalón para Mujer Sarga Lyocell Algodón Correa.webp",
      "full": "images/thumbs/full/Pantalón para Mujer Sarga Lyocell Algodón Correa.webp",
      "card": "images/thumbs/card/Pantalón para Mujer Sarga Lyocell Algodón Correa.webp",
      "mini": "images/thumbs/mini/Pantalón para Mujer Sarga Lyocell Algodón Correa.webp"
    }
  },
  {
    "id": 17,
    "nombre": "Pantalón para Mujer Tafetán Viscosa Poliéster Correa",
    "slug": "pantalon-para-mujer-tafetan-viscosa-poliester-correa",
    "archivo": "Pantalón para Mujer Tafetán Viscosa Poliéster Correa.webp",
    "tipo": "Pantalón",
    "categoria": "Pantalones",
    "genero": "mujer",
    "materiales": [
      "Tafetán",
      "Viscosa",
      "Poliéster"
    ],
    "color": "Terracota / coral tostado",
    "colorHex": "#A57963",
    "descripcion": "Pantalón de vestir en tafetán de viscosa y poliéster con correa. Tono terracota de tendencia.",
    "colecciones": [
      "Pantalones de vestir"
    ],
    "precio": 149900,
    "tallas": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colores": [
      {
        "nombre": "Terracota",
        "hex": "#A57963"
      },
      {
        "nombre": "Coral tostado",
        "hex": "#A56E58"
      }
    ],
    "stock": 25,
    "destacado": false,
    "imagenes": {
      "original": "images/Pantalón para Mujer Tafetán Viscosa Poliéster Correa.webp",
      "full": "images/thumbs/full/Pantalón para Mujer Tafetán Viscosa Poliéster Correa.webp",
      "card": "images/thumbs/card/Pantalón para Mujer Tafetán Viscosa Poliéster Correa.webp",
      "mini": "images/thumbs/mini/Pantalón para Mujer Tafetán Viscosa Poliéster Correa.webp"
    }
  },
  {
    "id": 18,
    "nombre": "Pantalón para Mujer Tafetán Viscosa Poliéster",
    "slug": "pantalon-para-mujer-tafetan-viscosa-poliester",
    "archivo": "Pantalón para Mujer Tafetán Viscosa Poliéster.webp",
    "tipo": "Pantalón",
    "categoria": "Pantalones",
    "genero": "mujer",
    "materiales": [
      "Tafetán",
      "Viscosa",
      "Poliéster"
    ],
    "color": "Café / marrón chocolate",
    "colorHex": "#795842",
    "descripcion": "Pantalón de vestir en tafetán de viscosa y poliéster. Tono café cálido con caída fluida.",
    "colecciones": [
      "Pantalones de vestir"
    ],
    "precio": 149900,
    "tallas": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colores": [
      {
        "nombre": "Café chocolate",
        "hex": "#795842"
      },
      {
        "nombre": "Marrón",
        "hex": "#6E4D37"
      }
    ],
    "stock": 25,
    "destacado": false,
    "imagenes": {
      "original": "images/Pantalón para Mujer Tafetán Viscosa Poliéster.webp",
      "full": "images/thumbs/full/Pantalón para Mujer Tafetán Viscosa Poliéster.webp",
      "card": "images/thumbs/card/Pantalón para Mujer Tafetán Viscosa Poliéster.webp",
      "mini": "images/thumbs/mini/Pantalón para Mujer Tafetán Viscosa Poliéster.webp"
    }
  },
  {
    "id": 19,
    "nombre": "Short para Mujer 04238",
    "slug": "short-para-mujer-04238",
    "archivo": "Short para Mujer 04238.webp",
    "tipo": "Short",
    "categoria": "Shorts",
    "genero": "mujer",
    "materiales": [],
    "color": "Gris claro con acentos terracota",
    "colorHex": "#DCDCDC",
    "descripcion": "Short de mezclilla en tono gris claro con detalles en terracota y cintura elástica.",
    "colecciones": [
      "Shorts de jean"
    ],
    "precio": 79900,
    "tallas": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colores": [
      {
        "nombre": "Gris claro",
        "hex": "#DCDCDC"
      },
      {
        "nombre": "Terracota",
        "hex": "#BB7958"
      }
    ],
    "stock": 25,
    "destacado": false,
    "imagenes": {
      "original": "images/Short para Mujer 04238.webp",
      "full": "images/thumbs/full/Short para Mujer 04238.webp",
      "card": "images/thumbs/card/Short para Mujer 04238.webp",
      "mini": "images/thumbs/mini/Short para Mujer 04238.webp"
    }
  },
  {
    "id": 20,
    "nombre": "Vestido para Mujer Viscosa con Forro",
    "slug": "vestido-para-mujer-viscosa-con-foro",
    "archivo": "Vestido para Mujer Viscosa con Forro.webp",
    "tipo": "Vestido",
    "categoria": "Vestidos",
    "genero": "mujer",
    "materiales": [
      "Viscosa"
    ],
    "color": "Negro",
    "colorHex": "#161616",
    "descripcion": "Vestido de viscosa con forro, corte midi y espalda abierta. Versátil para el día y la noche.",
    "colecciones": [
      "Vestidos casuales",
      "Vestidos elegantes"
    ],
    "precio": 159900,
    "tallas": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colores": [
      {
        "nombre": "Negro",
        "hex": "#161616"
      }
    ],
    "stock": 25,
    "destacado": true,
    "imagenes": {
      "original": "images/Vestido para Mujer Viscosa con Forro.webp",
      "full": "images/thumbs/full/Vestido para Mujer Viscosa con Forro.webp",
      "card": "images/thumbs/card/Vestido para Mujer Viscosa con Forro.webp",
      "mini": "images/thumbs/mini/Vestido para Mujer Viscosa con Forro.webp"
    }
  }
];;

/* ---------- 3. COLECCIONES DE LA TIENDA ---------- */
const COLECCIONES = [
  { nombre: 'Blusas casuales', icon: '✿' },
  { nombre: 'Camisetas básicas', icon: '☰' },
  { nombre: 'Crop tops', icon: '✂' },
  { nombre: 'Camisas elegantes', icon: '✦' },
  { nombre: 'Jeans clásicos', icon: '◆' },
  { nombre: 'Pantalones anchos', icon: '▽' },
  { nombre: 'Pantalones de vestir', icon: '❋' },
  { nombre: 'Faldas cortas', icon: '◣' },
  { nombre: 'Faldas largas', icon: '▽' },
  { nombre: 'Vestidos casuales', icon: '❀' },
  { nombre: 'Vestidos elegantes', icon: '✿' },
  { nombre: 'Conjuntos de dos piezas', icon: '⧉' },
  { nombre: 'Shorts de jean', icon: '◺' },
  { nombre: 'Chaquetas', icon: '⌂' },
  { nombre: 'Suéteres', icon: '❄' },
  { nombre: 'Leggings', icon: '⋮' },
  { nombre: 'Enterizos', icon: '⌸' },
  { nombre: 'Ropa deportiva', icon: '⚽' },
  { nombre: 'Prendas de temporada', icon: '★' },
  { nombre: 'Accesorios de moda', icon: '✧' }
];

/* ---------- 4. UTILIDADES ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const COP = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });
const money = (n) => COP.format(n).replace(/\s/g, ' ');

// Acepta "archivo.webp" o "images/thumbs/mini/archivo.webp" y devuelve la ruta codificada
const imgSrc = (ruta) => {
  const limpio = String(ruta).replace(/^images\//, '');
  return 'images/' + limpio.split('/').map(encodeURIComponent).join('/');
};

// Tamaño de miniatura según el lugar donde se muestra la foto
const imgOf = (producto, medida = 'card') => {
  const set = producto && producto.imagenes;
  return imgSrc(set && set[medida] ? set[medida] : (producto ? producto.archivo : ''));
};

const escapeHTML = (str) => String(str).replace(/[&<>"']/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

const fechaLarga = () => new Date().toLocaleDateString('es-CO', {
  day: '2-digit', month: 'long', year: 'numeric'
});

/* ---------- 5. ESTADO DE LA APLICACIÓN ---------- */
const STATE = {
  carrito: [],
  refActual: PRODUCTOS[0].id,
  refsSeleccionadas: new Set(),
  filtro: 'Todos',
  busqueda: '',
  opciones: {}   // { idProducto: { talla, color } }
};

const STORAGE_KEY = 'lunara_carrito_v1';

function cargarCarrito() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    STATE.carrito = raw ? JSON.parse(raw) : [];
  } catch (e) {
    STATE.carrito = [];
  }
}

function guardarCarrito() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE.carrito));
  } catch (e) { /* almacenamiento no disponible */ }
}

const opcionDe = (id) => {
  if (!STATE.opciones[id]) {
    const p = PRODUCTOS.find((x) => x.id === id);
    STATE.opciones[id] = { talla: p.tallas[0], color: p.colores[0].nombre };
  }
  return STATE.opciones[id];
};

/* ---------- 6. COLECCIONES ---------- */
function renderColecciones() {
  const grid = $('#collectionsGrid');
  grid.innerHTML = COLECCIONES.map((c) => {
    const items = PRODUCTOS.filter((p) => p.colecciones.includes(c.nombre));
    const pronto = items.length === 0;
    return `
      <button class="collection ${pronto ? 'collection--soon' : ''}" type="button"
              ${pronto ? 'disabled' : `data-collection="${escapeHTML(c.nombre)}"`}>
        <span class="collection__icon" aria-hidden="true">${c.icon}</span>
        <span class="collection__name">${escapeHTML(c.nombre)}</span>
        <span class="collection__count">${pronto ? 'Próximamente' : items.length + (items.length === 1 ? ' prenda' : ' prendas')}</span>
      </button>`;
  }).join('');

  $$('[data-collection]', grid).forEach((btn) => {
    btn.addEventListener('click', () => {
      const nombre = btn.dataset.collection;
      const items = PRODUCTOS.filter((p) => p.colecciones.includes(nombre));
      STATE.filtro = 'Todos';
      STATE.busqueda = '';
      $('#searchInput').value = '';
      renderFiltros();
      renderCatalogo();
      const ids = items.map((p) => p.id);
      $$('#catalogGrid .product').forEach((card, i) => {
        card.hidden = !ids.includes(PRODUCTOS[i].id);
      });
      document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ---------- 7. FILTROS Y CATÁLOGO ---------- */
function renderFiltros() {
  const tipos = [...new Set(PRODUCTOS.map((p) => p.tipo))];
  const filtros = ['Todos', 'Destacados', 'Mujer', 'Hombre', ...tipos];
  $('#catalogFilters').innerHTML = filtros.map((f) => `
    <button class="filter ${STATE.filtro === f ? 'is-active' : ''}" type="button" data-filter="${escapeHTML(f)}">${escapeHTML(f)}</button>
  `).join('');

  $$('#catalogFilters .filter').forEach((btn) => {
    btn.addEventListener('click', () => {
      STATE.filtro = btn.dataset.filter;
      renderFiltros();
      renderCatalogo();
    });
  });
}

function coincideBusqueda(p) {
  if (!STATE.busqueda) return true;
  const q = STATE.busqueda.toLowerCase();
  const texto = [p.nombre, p.tipo, p.categoria, p.genero, p.descripcion, (p.materiales || []).join(' ')].join(' ').toLowerCase();
  return texto.includes(q);
}

function coincideFiltro(p) {
  switch (STATE.filtro) {
    case 'Todos': return true;
    case 'Destacados': return p.destacado;
    case 'Mujer': return p.genero === 'mujer';
    case 'Hombre': return p.genero === 'hombre';
    default: return p.tipo === STATE.filtro;
  }
}

function tarjetaProducto(p) {
  const opt = opcionDe(p.id);
  const tallas = p.tallas.map((t) => `
    <button class="size ${t === opt.talla ? 'is-active' : ''}" type="button"
            data-producto="${p.id}" data-talla="${escapeHTML(t)}">${escapeHTML(t)}</button>`).join('');

  const colores = p.colores.map((c) => `
    <button class="color ${c.nombre === opt.color ? 'is-active' : ''}" type="button"
            data-producto="${p.id}" data-color="${escapeHTML(c.nombre)}"
            title="${escapeHTML(c.nombre)}" aria-label="Color ${escapeHTML(c.nombre)}">
      <i style="background:${escapeHTML(c.hex)}"></i>
    </button>`).join('');

  const colorElegido = p.colores.find((c) => c.nombre === opt.color);

  return `
    <article class="product" data-id="${p.id}" data-tipo="${escapeHTML(p.tipo)}" data-genero="${escapeHTML(p.genero)}">
      <div class="product__media">
        <img src="${imgOf(p, 'card')}" alt="${escapeHTML(p.nombre)}" loading="lazy" decoding="async" width="520" height="650">
        ${p.destacado ? '<span class="product__tag product__tag--out">Destacado</span>' : `<span class="product__tag">${escapeHTML(p.categoria)}</span>`}
        <button class="product__fav" type="button" title="Marcar como favorito" aria-label="Marcar ${escapeHTML(p.nombre)} como favorito">♡</button>
        <button class="product__peek" type="button" data-peek="${p.id}">Ver detalle</button>
      </div>
      <div class="product__body">
        <span class="product__cat">${escapeHTML(p.categoria)} · ${escapeHTML(p.genero)}</span>
        <h3 class="product__name">${escapeHTML(p.nombre)}</h3>
        <span class="product__price">${money(p.precio)} <small>COP</small></span>
        <p class="product__desc">${escapeHTML(p.descripcion)}</p>

        <div class="sizes" role="group" aria-label="Talla de ${escapeHTML(p.nombre)}" title="Talla">${tallas}</div>

        <div class="product__row product__row--inline">
          <div class="colors" role="group" aria-label="Color de ${escapeHTML(p.nombre)}">${colores}</div>
          <span class="product__colorName" data-colorname="${p.id}">${escapeHTML(colorElegido ? colorElegido.nombre : '')}</span>
        </div>

        <div class="product__actions">
          <button class="btn btn--primary" type="button" data-add="${p.id}">Agregar al carrito</button>
        </div>
      </div>
    </article>`;
}

function renderCatalogo() {
  const grid = $('#catalogGrid');
  const visibles = PRODUCTOS.filter((p) => coincideFiltro(p) && coincideBusqueda(p));
  grid.innerHTML = visibles.map(tarjetaProducto).join('');
  $('#catalogEmpty').hidden = visibles.length > 0;
  activarEventosCatalogo();
}

function activarEventosCatalogo() {
  $$('#catalogGrid .size').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.producto);
      opcionDe(id).talla = btn.dataset.talla;
      btn.closest('.sizes').querySelectorAll('.size').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });

  $$('#catalogGrid .color').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.producto);
      opcionDe(id).color = btn.dataset.color;
      btn.closest('.colors').querySelectorAll('.color').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const etiqueta = $(`[data-colorname="${id}"]`);
      if (etiqueta) etiqueta.textContent = btn.dataset.color;
    });
  });

  $$('#catalogGrid [data-add]').forEach((btn) => {
    btn.addEventListener('click', () => agregarAlCarrito(Number(btn.dataset.add)));
  });

  $$('#catalogGrid [data-peek]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.peek);
      STATE.refActual = id;
      renderReferencias();
      document.getElementById('referencias').scrollIntoView({ behavior: 'smooth' });
    });
  });

  $$('#catalogGrid .product__fav').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('is-on');
      btn.textContent = btn.classList.contains('is-on') ? '♥' : '♡';
    });
  });
}

/* ---------- 8. REFERENCIAS (20 BOTONES) ---------- */
function renderReferencias() {
  const grid = $('#refsGrid');
  grid.innerHTML = PRODUCTOS.map((p) => `
    <button class="ref ${p.id === STATE.refActual ? 'is-active' : ''}" type="button" role="listitem" data-ref="${p.id}"
            aria-label="Referencia ${p.id}: ${escapeHTML(p.nombre)}">
      <img src="${imgOf(p, 'mini')}" alt="" loading="lazy" decoding="async" width="220" height="220">
      <span class="ref__num">${p.id}</span>
      <input class="ref__check" type="checkbox" data-check="${p.id}" aria-label="Seleccionar referencia ${p.id}">
    </button>`).join('');

  $$('#refsGrid .ref').forEach((btn) => {
    btn.addEventListener('click', (ev) => {
      if (ev.target.classList.contains('ref__check')) return;
      STATE.refActual = Number(btn.dataset.ref);
      renderDetalleReferencia();
    });
  });

  $$('#refsGrid .ref__check').forEach((chk) => {
    chk.addEventListener('change', () => {
      const id = Number(chk.dataset.check);
      chk.checked ? STATE.refsSeleccionadas.add(id) : STATE.refsSeleccionadas.delete(id);
      chk.closest('.ref').classList.toggle('is-selected', chk.checked);
      actualizarBotonSeleccionados();
    });
  });

  renderDetalleReferencia();
}

function renderDetalleReferencia() {
  const p = PRODUCTOS.find((x) => x.id === STATE.refActual);
  const cont = $('#refDetail');
  const opt = opcionDe(p.id);
  const elegida = STATE.refsSeleccionadas.has(p.id);

  cont.innerHTML = `
    <div class="refdetail__media">
      <img src="${imgOf(p, 'full')}" alt="${escapeHTML(p.nombre)}" loading="lazy" decoding="async" width="900" height="1200">
    </div>
    <h3 class="refdetail__name">${escapeHTML(p.nombre)}</h3>
    <div class="refdetail__meta">
      <span class="product__cat">Referencia ${String(p.id).padStart(2, '0')} · ${escapeHTML(p.categoria)}</span>
      <span class="refdetail__price">${money(p.precio)}</span>
    </div>
    <p class="refdetail__desc">${escapeHTML(p.descripcion)}</p>

    <span class="refdetail__label">Talla</span>
    <div class="sizes" id="refSizes">
      ${p.tallas.map((t) => `<button class="size ${t === opt.talla ? 'is-active' : ''}" type="button" data-ref-talla="${escapeHTML(t)}">${escapeHTML(t)}</button>`).join('')}
    </div>

    <span class="refdetail__label">Color</span>
    <div class="colors" id="refColors">
      ${p.colores.map((c) => `<button class="color ${c.nombre === opt.color ? 'is-active' : ''}" type="button" data-ref-color="${escapeHTML(c.nombre)}">
        <i style="background:${escapeHTML(c.hex)}"></i>${escapeHTML(c.nombre)}</button>`).join('')}
    </div>

    <label class="refdetail__select">
      <input type="checkbox" id="refCheck" ${elegida ? 'checked' : ''}>
      <span>${elegida ? 'Prenda seleccionada — puedes agregarla al carrito' : 'Seleccionar esta prenda'}</span>
    </label>

    <div class="refdetail__actions">
      <button class="btn btn--primary" type="button" id="refAdd">Agregar al carrito</button>
      <button class="btn btn--ghost" type="button" id="refCatalog">Ver en el catálogo</button>
    </div>`;

  $$('#refSizes .size').forEach((b) => b.addEventListener('click', () => {
    opt.talla = b.dataset.refTalla;
    $$('#refSizes .size').forEach((x) => x.classList.remove('is-active'));
    b.classList.add('is-active');
  }));

  $$('#refColors .color').forEach((b) => b.addEventListener('click', () => {
    opt.color = b.dataset.refColor;
    $$('#refColors .color').forEach((x) => x.classList.remove('is-active'));
    b.classList.add('is-active');
  }));

  $('#refCheck').addEventListener('change', (ev) => {
    const chk = $(`#refsGrid .ref__check[data-check="${p.id}"]`);
    if (chk) chk.checked = ev.target.checked;
    ev.target.checked ? STATE.refsSeleccionadas.add(p.id) : STATE.refsSeleccionadas.delete(p.id);
    if (chk) chk.closest('.ref').classList.toggle('is-selected', chk.checked);
    actualizarBotonSeleccionados();
    renderDetalleReferencia();
  });

  $('#refAdd').addEventListener('click', () => agregarAlCarrito(p.id));

  $('#refCatalog').addEventListener('click', () => {
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
  });

  actualizarBotonSeleccionados();
}

function actualizarBotonSeleccionados() {
  const n = STATE.refsSeleccionadas.size;
  const cont = $('#refDetail');
  let boton = $('#addSelected');
  if (n > 0 && !boton) {
    const div = document.createElement('div');
    div.className = 'refdetail__actions';
    div.innerHTML = `<button class="btn btn--soft" type="button" id="addSelected">Agregar ${n} seleccionada${n === 1 ? '' : 's'} al carrito</button>`;
    cont.appendChild(div);
    $('#addSelected').addEventListener('click', agregarSeleccionadas);
  } else if (n === 0 && boton) {
    boton.closest('.refdetail__actions').remove();
  } else if (boton) {
    boton.textContent = `Agregar ${n} seleccionada${n === 1 ? '' : 's'} al carrito`;
  }
}

function agregarSeleccionadas() {
  const ids = [...STATE.refsSeleccionadas];
  ids.forEach((id) => agregarAlCarrito(id, true));
  STATE.refsSeleccionadas.clear();
  $$('#refsGrid .ref__check').forEach((c) => { c.checked = false; c.closest('.ref').classList.remove('is-selected'); });
  actualizarBotonSeleccionados();
  renderDetalleReferencia();
  avisar(`Se agregaron ${ids.length} prenda${ids.length === 1 ? '' : 's'} al carrito.`);
}

/* ---------- 9. CARRITO DE COMPRAS ---------- */
const claveItem = (id, talla, color) => `${id}|${talla}|${color}`;

function agregarAlCarrito(id, silencioso = false) {
  const p = PRODUCTOS.find((x) => x.id === id);
  const opt = opcionDe(id);
  const clave = claveItem(id, opt.talla, opt.color);
  const existente = STATE.carrito.find((i) => i.clave === clave);

  if (existente) {
    existente.cantidad += 1;
  } else {
    STATE.carrito.push({
      clave,
      id: p.id,
      nombre: p.nombre,
      imagen: p.imagenes ? p.imagenes.mini : p.archivo,
      precio: p.precio,
      talla: opt.talla,
      color: opt.color,
      cantidad: 1
    });
  }

  guardarCarrito();
  renderCarrito();
  if (!silencioso) avisar(`"${p.nombre}" (${opt.talla}) se agregó al carrito.`);
}

function cambiarCantidad(clave, delta) {
  const item = STATE.carrito.find((i) => i.clave === clave);
  if (!item) return;
  item.cantidad += delta;
  if (item.cantidad <= 0) {
    STATE.carrito = STATE.carrito.filter((i) => i.clave !== clave);
  }
  guardarCarrito();
  renderCarrito();
}

function quitarDelCarrito(clave) {
  STATE.carrito = STATE.carrito.filter((i) => i.clave !== clave);
  guardarCarrito();
  renderCarrito();
}

function vaciarCarrito() {
  if (!STATE.carrito.length) return;
  STATE.carrito = [];
  guardarCarrito();
  renderCarrito();
  avisar('El carrito se vació.');
}

function totales() {
  const subtotal = STATE.carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
  const envio = subtotal === 0 || subtotal >= CONFIG.envioGratisDesde ? 0 : CONFIG.envioCosto;
  return { subtotal, envio, total: subtotal + envio };
}

function renderCarrito() {
  const cont = $('#cartItems');
  const vacio = $('#cartEmpty');
  const t = totales();

  if (!STATE.carrito.length) {
    cont.innerHTML = '';
    vacio.hidden = false;
  } else {
    vacio.hidden = true;
    cont.innerHTML = STATE.carrito.map((i) => `
      <article class="cartitem">
        <img class="cartitem__img" src="${imgSrc(i.imagen)}" alt="${escapeHTML(i.nombre)}" loading="lazy" width="220" height="293">
        <div>
          <h4 class="cartitem__name">${escapeHTML(i.nombre)}</h4>
          <p class="cartitem__opts">Talla: <b>${escapeHTML(i.talla)}</b> · Color: <b>${escapeHTML(i.color)}</b></p>
          <span class="cartitem__price">${money(i.precio * i.cantidad)}</span>
        </div>
        <div class="cartitem__side">
          <div class="qty">
            <button type="button" data-qty="-1" data-clave="${escapeHTML(i.clave)}" aria-label="Disminuir cantidad">−</button>
            <span>${i.cantidad}</span>
            <button type="button" data-qty="1" data-clave="${escapeHTML(i.clave)}" aria-label="Aumentar cantidad">+</button>
          </div>
          <button class="cartitem__remove" type="button" data-remove="${escapeHTML(i.clave)}">Eliminar</button>
        </div>
      </article>`).join('');

    $$('#cartItems [data-qty]').forEach((b) => b.addEventListener('click', () => {
      cambiarCantidad(b.dataset.clave, Number(b.dataset.qty));
    }));

    $$('#cartItems [data-remove]').forEach((b) => b.addEventListener('click', () => {
      quitarDelCarrito(b.dataset.remove);
    }));
  }

  $('#cartSubtotal').textContent = money(t.subtotal);
  $('#cartShipping').textContent = t.envio === 0 ? 'Gratis' : money(t.envio);
  $('#cartTotal').textContent = money(t.total);

  const badge = $('#cartBadge');
  const cantidad = STATE.carrito.reduce((s, i) => s + i.cantidad, 0);
  badge.textContent = cantidad;
  badge.dataset.count = cantidad;
  badge.classList.remove('is-bump');
  void badge.offsetWidth;
  badge.classList.add('is-bump');
}

/* ---------- 10. FORMULARIO DE PEDIDO ---------- */
const REGLAS = {
  requerido: (v) => v.trim().length > 0,
  telefono: (v) => /^[0-9\s+()-]{7,20}$/.test(v.trim()),
  correo: (v) => /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.trim()),
  clave: (v) => v.length >= 8 && /[A-Za-z]/.test(v) && /[0-9]/.test(v)
};

function campoValido(id, valor, regla) {
  const campo = document.getElementById(id);
  const contenedor = campo.closest('.field');
  const error = $(`[data-error-for="${id}"]`);
  const ok = REGLAS[regla](valor);
  contenedor.classList.toggle('is-invalid', !ok);
  if (error) {
    error.textContent = ok ? '' : MENSAJES_ERROR[id] || 'Revisa este campo.';
  }
  return ok;
}

const MENSAJES_ERROR = {
  ckName: 'Escribe tu nombre completo.',
  ckPhone: 'Ingresa un teléfono válido (mínimo 7 dígitos).',
  ckAddress: 'Indica la dirección de entrega.',
  ckCity: 'Indica la ciudad o municipio.',
  ckPayment: 'Selecciona un método de pago.',
  ctName: 'Escribe tu nombre.',
  ctEmail: 'Ingresa un correo electrónico válido.',
  ctSubject: 'Escribe el asunto de tu mensaje.',
  ctMessage: 'Escribe tu mensaje (mínimo 10 caracteres).',
  loginEmail: 'Ingresa un correo electrónico válido.',
  loginPass: 'La contraseña debe tener mínimo 8 caracteres, una letra y un número.',
  regName: 'Escribe tu nombre completo.',
  regEmail: 'Ingresa un correo electrónico válido.',
  regPass: 'La contraseña debe tener mínimo 8 caracteres, una letra y un número.',
  regPass2: 'Las contraseñas no coinciden.'
};

function revisarPedido() {
  const t = totales();
  const datos = {
    nombre: $('#ckName').value.trim(),
    telefono: $('#ckPhone').value.trim(),
    direccion: $('#ckAddress').value.trim(),
    ciudad: $('#ckCity').value.trim(),
    pago: $('#ckPayment').value,
    notas: $('#ckNotes').value.trim()
  };

  const campos = [
    campoValido('ckName', datos.nombre, 'requerido'),
    campoValido('ckPhone', datos.telefono, 'telefono'),
    campoValido('ckAddress', datos.direccion, 'requerido'),
    campoValido('ckPayment', datos.pago, 'requerido')
  ];

  if (campos.includes(false)) {
    avisar('Revisa los campos marcados en rojo antes de continuar.', true);
    return null;
  }

  if (!STATE.carrito.length) {
    avisar('Tu carrito está vacío. Agrega al menos una prenda.', true);
    return null;
  }

  return { datos, totales: t };
}

function abrirModal() {
  const info = revisarPedido();
  if (!info) return;

  const filas = STATE.carrito.map((i) => `
    <tr>
      <td>${escapeHTML(i.nombre)}<br><small style="color:var(--texto-soft)">Talla ${escapeHTML(i.talla)} · ${escapeHTML(i.color)} · ${i.cantidad} und.</small></td>
      <td style="text-align:right">${money(i.precio * i.cantidad)}</td>
    </tr>`).join('');

  const mod = $('#orderModal');
  $('#modalBody').innerHTML = `
    <table>
      <thead><tr><th>Prenda</th><th style="text-align:right">Valor</th></tr></thead>
      <tbody>${filas}</tbody>
      <tfoot>
        <tr><td>Subtotal</td><td style="text-align:right">${money(info.totales.subtotal)}</td></tr>
        <tr><td>Envío</td><td style="text-align:right">${info.totales.envio === 0 ? 'Gratis' : money(info.totales.envio)}</td></tr>
        <tr><td>Total</td><td style="text-align:right" class="order-total">${money(info.totales.total)}</td></tr>
      </tfoot>
    </table>
    <div class="order-data">
      <p><strong>Nombre:</strong> ${escapeHTML(info.datos.nombre)}</p>
      <p><strong>Teléfono:</strong> ${escapeHTML(info.datos.telefono)}</p>
      <p><strong>Dirección:</strong> ${escapeHTML(info.datos.direccion)}${info.datos.ciudad ? ' — ' + escapeHTML(info.datos.ciudad) : ''}</p>
      <p><strong>Método de pago:</strong> ${escapeHTML(info.datos.pago)}</p>
      ${info.datos.notas ? `<p><strong>Notas:</strong> ${escapeHTML(info.datos.notas)}</p>` : ''}
    </div>`;

  mod.hidden = false;
  document.body.style.overflow = 'hidden';
}

function confirmarPedido() {
  const info = revisarPedido();
  if (!info) { $('#orderModal').hidden = true; return; }

  const numero = 'LUN-' + Date.now().toString(36).toUpperCase().slice(-6);
  const total = info.totales.total;

  const mod = $('#orderModal');
  $('#modalBody').innerHTML = `
    <div class="order-ok">
      <span class="order-ok__icon" aria-hidden="true">✦</span>
      <h4>¡Gracias, ${escapeHTML(info.datos.nombre.split(' ')[0])}!</h4>
      <p>Tu pedido <strong>${numero}</strong> fue registrado correctamente.</p>
    </div>
    <div class="order-data">
      <p><strong>Fecha:</strong> ${fechaLarga()}</p>
      <p><strong>Prendas:</strong> ${STATE.carrito.reduce((s, i) => s + i.cantidad, 0)}</p>
      <p><strong>Entrega en:</strong> ${escapeHTML(info.datos.direccion)}${info.datos.ciudad ? ', ' + escapeHTML(info.datos.ciudad) : ''}</p>
      <p><strong>Pago:</strong> ${escapeHTML(info.datos.pago)}</p>
      <p><strong>Total a pagar:</strong> <span class="order-total">${money(total)}</span></p>
    </div>
    <p style="font-size:.86rem;color:var(--texto-soft);margin-top:1rem">
      Te contactaremos por el número ${escapeHTML(info.datos.telefono)} para confirmar la entrega.
      Puedes revisar tu pedido con el chatbot de la esquina inferior derecha.
    </p>`;

  $('#modalConfirm').textContent = 'Entendido';
  STATE.carrito = [];
  guardarCarrito();
  renderCarrito();
  $('#checkoutForm').reset();
  $('#checkoutNote').textContent = 'Pedido confirmado. Revisa tu correo o WhatsApp para el seguimiento.';
  $('#checkoutNote').className = 'checkout__note is-ok';
}

function avisar(texto, error = false) {
  const nota = $('#checkoutNote');
  if (!nota) return;
  nota.textContent = texto;
  nota.className = 'checkout__note ' + (error ? 'is-error' : 'is-ok');
  if (!error) {
    setTimeout(() => {
      if (nota.textContent === texto) nota.textContent = '';
    }, 4000);
  }
}

/* ---------- 11. FORMULARIO DE CONTACTO ---------- */
function initFormularioContacto() {
  const form = $('#contactForm');
  const status = $('#contactStatus');

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const valores = {
      ctName: $('#ctName').value,
      ctEmail: $('#ctEmail').value,
      ctSubject: $('#ctSubject').value,
      ctMessage: $('#ctMessage').value
    };

    const ok = [
      campoValido('ctName', valores.ctName, 'requerido'),
      campoValido('ctEmail', valores.ctEmail, 'correo'),
      campoValido('ctSubject', valores.ctSubject, 'requerido')
    ];

    const mensajeOk = valores.ctMessage.trim().length >= 10;
    const contMsg = $('#ctMessage').closest('.field');
    contMsg.classList.toggle('is-invalid', !mensajeOk);
    $('[data-error-for="ctMessage"]').textContent = mensajeOk ? '' : 'Escribe un mensaje de al menos 10 caracteres.';
    ok.push(mensajeOk);

    if (ok.includes(false)) {
      status.textContent = 'Revisa los campos marcados antes de enviar.';
      status.className = 'form__status is-error';
      return;
    }

    status.textContent = `¡Gracias ${valores.ctName.trim().split(' ')[0]}! Recibimos tu mensaje y te responderemos pronto.`;
    status.className = 'form__status is-ok';
    form.reset();
  });
}

/* ---------- 12. ACCESO Y REGISTRO ---------- */
function initAcceso() {
  const tabLogin = $('#tabLogin');
  const tabRegister = $('#tabRegister');
  const panelLogin = $('#loginForm');
  const panelRegister = $('#registerForm');

  const activar = (esLogin) => {
    tabLogin.classList.toggle('is-active', esLogin);
    tabRegister.classList.toggle('is-active', !esLogin);
    tabLogin.setAttribute('aria-selected', String(esLogin));
    tabRegister.setAttribute('aria-selected', String(!esLogin));
    panelLogin.hidden = !esLogin;
    panelRegister.hidden = esLogin;
  };

  tabLogin.addEventListener('click', () => activar(true));
  tabRegister.addEventListener('click', () => activar(false));

  panelLogin.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const status = $('#loginStatus');
    const email = $('#loginEmail').value;
    const pass = $('#loginPass').value;

    const ok = [
      campoValido('loginEmail', email, 'correo'),
      campoValido('loginPass', pass, 'clave')
    ];

    if (ok.includes(false)) {
      status.textContent = 'Revisa los datos ingresados.';
      status.className = 'form__status is-error';
      return;
    }

    status.textContent = 'Acceso validado. La autenticación real se realiza en el servidor, nunca desde el navegador.';
    status.className = 'form__status is-ok';
  });

  panelRegister.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const status = $('#registerStatus');
    const nombre = $('#regName').value;
    const email = $('#regEmail').value;
    const pass = $('#regPass').value;
    const pass2 = $('#regPass2').value;

    const ok = [
      campoValido('regName', nombre, 'requerido'),
      campoValido('regEmail', email, 'correo'),
      campoValido('regPass', pass, 'clave')
    ];

    const coinciden = pass === pass2 && pass2.length > 0;
    const cont2 = $('#regPass2').closest('.field');
    cont2.classList.toggle('is-invalid', !coinciden);
    $('[data-error-for="regPass2"]').textContent = coinciden ? '' : 'Las contraseñas no coinciden.';
    ok.push(coinciden);

    if (ok.includes(false)) {
      status.textContent = 'Revisa los datos ingresados.';
      status.className = 'form__status is-error';
      return;
    }

    status.textContent = '¡Cuenta creada! Recuerda: aquí no se guarda ninguna contraseña, eso lo hace el servidor.';
    status.className = 'form__status is-ok';
  });

  $$('[data-toggle-password]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.togglePassword);
      const visible = input.type === 'text';
      input.type = visible ? 'password' : 'text';
      btn.textContent = visible ? 'Ver' : 'Ocultar';
    });
  });
}

/* ---------- 13. CHATBOT DE ATENCIÓN AL CLIENTE ---------- */
const CHATBOT = {
  saludos: [
    '¡Hola! ✦ Bienvenido a LUNARA FASHION STORE. Soy tu asistente virtual. ¿En qué te ayudo?',
    '¡Hola! 💫 Soy el asistente de LUNARA. Puedo resolverte dudas sobre prendas, tallas, precios y pedidos.'
  ],
  opciones: [
    { etiqueta: 'Ver productos', clave: 'productos' },
    { etiqueta: 'Tallas y colores', clave: 'tallas' },
    { etiqueta: 'Precios', clave: 'precios' },
    { etiqueta: 'Mi pedido', clave: 'pedido' },
    { etiqueta: 'Ayuda para comprar', clave: 'ayuda' }
  ],
  respuestas: {
    productos: 'Tenemos 20 prendas en el catálogo: blusas, camisetas, camisas, jeans, pantalones, vestidos, chaquetas, suéteres, shorts y más. Te recomiendo ir a la sección Catálogo y usar los filtros por tipo, género o color.',
    tallas: 'Trabajamos con tallas XS a XL en ropa de mujer y S a XXL en ropa de hombre. En cada tarjeta de producto puedes ver las tallas y los colores disponibles antes de agregar al carrito. ¿Buscas una prenda o una talla en particular?',
    precios: 'Todos los precios están en pesos colombianos (COP). Los básicos como camisetas arrancan en $49.900, las blusas entre $89.900 y $119.900, los jeans entre $129.900 y $149.900 y las chaquetas de cuero en $349.900. El envío es gratis desde $250.000 de compra.',
    pedido: 'Para revisar un pedido: agrega las prendas al carrito, completa tus datos de entrega en la sección Carrito y presiona "Revisar pedido antes de confirmar". Recibirás un número de pedido y te contactaremos por WhatsApp.',
    ayuda: 'Con gusto te ayudo. Puedes escribirnos por WhatsApp al ' + CONFIG.whatsapp + ' o al ' + CONFIG.telefono + '. Atendemos de lunes a sábado, de 9:00 a.m. a 6:00 p.m.'
  }
};


function burbuja(texto, tipo = 'bot') {
  const div = document.createElement('div');
  div.className = 'bubble bubble--' + tipo;
  div.textContent = texto;
  $('#chatbotLog').appendChild(div);
  $('#chatbotLog').scrollTop = $('#chatbotLog').scrollHeight;
  return div;
}

function escribirChat(texto, tipo = 'bot') {
  const el = burbuja(texto, tipo);
  if (tipo === 'bot') {
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(6px)';
      setTimeout(() => { el.style.opacity = ''; el.style.transform = ''; }, 220);
    }, 10);
  }
}

function opcionesChatbot(claves) {
  const cont = $('#chatbotOptions');
  cont.innerHTML = claves.map((c) => {
    const op = CHATBOT.opciones.find((o) => o.clave === c);
    return `<button class="chatbot__opt" type="button" data-opcion="${c}">${escapeHTML(op ? op.etiqueta : c)}</button>`;
  }).join('');
  $$('#chatbotOptions .chatbot__opt').forEach((b) => b.addEventListener('click', () => {
    const clave = b.dataset.opcion;
    const op = CHATBOT.opciones.find((o) => o.clave === clave);
    escribirChat(op ? op.etiqueta : clave, 'user');
    setTimeout(() => responderChat(clave), 380);
  }));
}

function responderChat(texto) {
  const t = String(texto).toLowerCase();
  let respuesta = '';

  if (t.includes('hola') || t.includes('buenas') || t.includes('hey')) {
    respuesta = CHATBOT.saludos[Math.floor(Math.random() * CHATBOT.saludos.length)];
  } else if (t.includes('talla') || t.includes('color')) {
    respuesta = CHATBOT.respuestas.tallas;
  } else if (t.includes('precio') || t.includes('cuánto') || t.includes('cuanto') || t.includes('costo') || t.includes('valor')) {
    respuesta = CHATBOT.respuestas.precios;
  } else if (t.includes('pedido') || t.includes('envío') || t.includes('envio') || t.includes('entrega') || t.includes('compra')) {
    respuesta = CHATBOT.respuestas.pedido;
  } else if (t.includes('producto') || t.includes('prenda') || t.includes('catálogo') || t.includes('catalogo')) {
    respuesta = CHATBOT.respuestas.productos;
  } else if (t.includes('ayuda') || t.includes('asesor') || t.includes('asesor')) {
    respuesta = CHATBOT.respuestas.ayuda;
  } else if (t.includes('gracias')) {
    respuesta = '¡Con gusto! ¿Necesitas algo más? Estoy aquí para ayudarte. ✦';
  } else {
    respuesta = 'No estoy seguro de entender tu pregunta. Puedes usar los botones de arriba o escribirnos por WhatsApp al ' + CONFIG.whatsapp + '.';
  }

  setTimeout(() => {
    burbuja(respuesta);
    opcionesChatbot(CHATBOT.opciones.map((o) => o.clave));
  }, 250);
}

function initChatbot() {
  const panel = $('#chatbotPanel');
  const wrap = $('#chatbot');
  const toggle = $('#chatbotToggle');

  toggle.addEventListener('click', () => {
    const abierto = panel.hasAttribute('hidden');
    if (abierto) {
      panel.removeAttribute('hidden');
      wrap.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      if (!$('#chatbotLog').children.length) {
        burbuja(CHATBOT.saludos[0]);
        opcionesChatbot(CHATBOT.opciones.map((o) => o.clave));
      }
    } else {
      panel.setAttribute('hidden', '');
      wrap.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  $('#chatbotForm').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const input = $('#chatbotInput');
    const texto = input.value.trim();
    if (!texto) return;
    escribirChat(texto, 'user');
    input.value = '';
    setTimeout(() => responderChat(texto), 350);
  });
}

/* ---------- 14. NAVEGACIÓN, SCROLL Y ANIMACIONES ---------- */
function initNavegacion() {
  const nav = $('#mainNav');
  const navToggle = $('#navToggle');
  const header = $('#siteHeader');

  navToggle.addEventListener('click', () => {
    const abierto = nav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', abierto);
    navToggle.setAttribute('aria-expanded', String(abierto));
  });

  $$('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  }, { passive: true });

  const secciones = $$('main section[id]');
  const enlaces = $$('.nav__link');
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (!e.isIntersecting) return;
      enlaces.forEach((a) => a.classList.toggle('is-active', a.dataset.nav === e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  secciones.forEach((s) => observador.observe(s));

  $('#cartToggle').addEventListener('click', () => {
    document.getElementById('carrito').scrollIntoView({ behavior: 'smooth' });
  });
}

function initRevelar() {
  const elementos = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    elementos.forEach((e) => e.classList.add('is-visible'));
    return;
  }
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-visible');
      obs.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elementos.forEach((el) => {
    if (el.dataset.delay) el.style.setProperty('--d', el.dataset.delay);
    obs.observe(el);
  });
}

/* ---------- 15. ENLACES EDITABLES Y DATOS DE LA TIENDA ---------- */
function initEnlaces() {
  const pares = [
    ['#socialInstagram', CONFIG.instagram],
    ['#socialInstagram2', CONFIG.instagram],
    ['#socialFacebook', CONFIG.facebook],
    ['#socialFacebook2', CONFIG.facebook],
    ['#socialTiktok', CONFIG.tiktok],
    ['#socialTiktok2', CONFIG.tiktok],
    ['#socialWhatsapp', CONFIG.whatsapp],
    ['#socialWhatsapp2', CONFIG.whatsapp]
  ];
  pares.forEach(([sel, url]) => {
    const el = $(sel);
    if (el) el.href = url;
  });

  const mail = $('#mailLink');
  if (mail) {
    mail.href = 'mailto:' + CONFIG.email;
    mail.textContent = CONFIG.email;
  }

  const tel = $('#phoneLink');
  if (tel) {
    tel.href = 'tel:+' + CONFIG.whatsappNumero;
    tel.textContent = CONFIG.telefono;
  }

  $('#year').textContent = new Date().getFullYear();
}

/* ---------- 16. BÚSQUEDA Y EVENTOS GENERALES ---------- */
function initBusqueda() {
  const input = $('#searchInput');
  let temporizador;
  input.addEventListener('input', () => {
    clearTimeout(temporizador);
    temporizador = setTimeout(() => {
      STATE.busqueda = input.value.trim();
      renderCatalogo();
    }, 220);
  });
}

function initModal() {
  const modal = $('#orderModal');
  $$('[data-close-modal]').forEach((b) => b.addEventListener('click', cerrarModal));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarModal();
  });
  $('#reviewOrder').addEventListener('click', abrirModal);
  $('#checkoutForm').addEventListener('submit', (ev) => {
    ev.preventDefault();
    abrirModal();
  });
  $('#modalConfirm').addEventListener('click', () => {
    if ($('#modalConfirm').textContent.trim() === 'Confirmar pedido') {
      confirmarPedido();
    } else {
      cerrarModal();
    }
  });
}

function cerrarModal() {
  $('#orderModal').hidden = true;
  document.body.style.overflow = '';
  $('#modalConfirm').textContent = 'Confirmar pedido';
}

/* ---------- 17. ARRANQUE ---------- */
function init() {
  cargarCarrito();
  initEnlaces();
  renderColecciones();
  renderFiltros();
  renderCatalogo();
  renderReferencias();
  renderCarrito();
  initNavegacion();
  initRevelar();
  initBusqueda();
  initFormularioContacto();
  initAcceso();
  initChatbot();
  initModal();

  $('#clearCart').addEventListener('click', vaciarCarrito);
  $('#cartSubtotal').closest('.summary__list').insertAdjacentHTML('beforeend',
    '<li style="border:none;padding-top:.2rem;font-size:.78rem"><span>Impuestos incluidos · Envío gratis desde ' + money(CONFIG.envioGratisDesde) + '</span></li>');
}

document.addEventListener('DOMContentLoaded', init);
