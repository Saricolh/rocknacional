const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://Saricolh.github.io",
  "baseurl": "/rocknacional",
  "title": "Rock Nacional de Colombia",
  "subtitle": "Rock en la prensa",
  "credits": "Por Sergio Rodríguez Gómez",
  "copyright": "Todos los derechos reservados, 2025",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "ubicación",
        "label": "Ubicación",
        "type": "text"
      },
      {
        "key": "fecha",
        "label": "Fecha",
        "type": "text"
      },
      {
        "key": "soporte",
        "label": "Soporte",
        "type": "text"
      },
      {
        "key": "autor",
        "label": "Autor",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "ubicación",
      "fecha",
      "soporte",
      "autor"
    ]
  }
};
export default config;