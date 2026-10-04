# Pokémon Explorer

Trabajo Práctico Individual 2 - Consumo de APIs Asíncronas

Aplicación web interactiva desarrollada con JavaScript ES6+, PokeAPI, Bootstrap 5 y SweetAlert2.

## Descripción

Pokémon Explorer permite consultar información de Pokémon utilizando la API pública PokeAPI.

La aplicación realiza peticiones asíncronas mediante `fetch` y `async/await`, mostrando la información obtenida dinámicamente mediante tarjetas de Bootstrap.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Bootstrap 5
- SweetAlert2
- PokeAPI

## Funcionalidades

- Carga inicial de un catálogo de Pokémon.
- Búsqueda de Pokémon por nombre o ID.
- Renderizado dinámico de tarjetas.
- Visualización de imagen, nombre, ID, altura, peso y tipo.
- Indicador de carga mediante Spinner de Bootstrap.
- Botón para volver al catálogo inicial.
- Búsqueda mediante el botón o la tecla Enter.
- Validación de búsquedas vacías.
- Manejo de Pokémon inexistentes mediante SweetAlert2.
- Manejo de errores de las peticiones HTTP.

## Asincronía

Las peticiones a PokeAPI se realizan utilizando `fetch` junto con `async/await`.

Se utilizan `try/catch` para el manejo de errores y `finally` para ocultar el indicador de carga una vez finalizada la petición, independientemente de si fue exitosa o produjo un error.

## Arquitectura

El código JavaScript está organizado por capas para separar responsabilidades:

```text
tobias-gomez-tp2/
│
├── css/
│   └── styles.css
│
├── js/
│   ├── components/
│   │   └── pokemonUI.js
│   │
│   ├── helpers/
│   │   └── sweetAlert.js
│   │
│   ├── services/
│   │   └── pokemonService.js
│   │
│   └── main.js
│
├── index.html
└── README.md
```

### Services

`pokemonService.js` contiene las funciones encargadas de comunicarse con PokeAPI mediante `fetch`.

### Components

`pokemonUI.js` se encarga del renderizado dinámico de las tarjetas y de la manipulación visual del contenido.

### Helpers

`sweetAlert.js` centraliza las alertas de error utilizando SweetAlert2.

### Main

`main.js` funciona como orquestador principal de la aplicación, conectando los eventos del usuario con los servicios y componentes.

## API utilizada

PokeAPI:

https://pokeapi.co/

## Autor

Tobías Gomez