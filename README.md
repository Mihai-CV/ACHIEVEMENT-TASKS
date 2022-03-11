<h1>to-Achieve</h1>

<div style="display: flex">
    <img src="https://i.ytimg.com/vi/Ix-v724UimU/maxresdefault.jpg" style="width: 50%">
</div>

# Descripción del proyecto

Una pagina de gestion de tareas personales y de grupos. La idea principal es poder crear una lista de tareas y poder enfocarla como si cada tarea fuese un logro diario al que tu mismo le estableces una importancia determinada. Cada tarea dentra asignada una puntuacion que se te sumará a un score global al realizarla al final del dia. Ejemplo:

- Leer 20 paginas (5 puntos)
- Comer sano (10 puntos)
- Hacer ejercicio (20 puntos)

Si estas unos dias sin cumplir ninguna de tus tareas el score se reestablecera a 0 y empezaras de nuevo. Tendras un historial con tus mejores puntuaciones para poder desglosarlo y ver los diferentes tramos de tiemnpo en los que has cumplido con tus objetivos.

Ademas de esto tambien habrá la posiblidad de adjuntar notas o tarjetas en un entorno donde las puedas mover y colocar como quieras.

# Developmente

## Project structure

```
final-project
    │
    |   packages
    |    ├── front
    │    |    ├── ...
    │    |    └── package.json
    |    |
    |    └── api
    |         ├── ...
    |         └── package.json
    │
    ├── .gitignore
    ├── .eslintrc.json
    ├── package.json
    ├── lerna.json
    └── README.md
```

## Technologies

> El proyecto esta desarrollado con el gestor de paquetes **Yarn** y programado en **Typescript**. Para la organizacion global de los microservicion se ha usado **Lerna** y para la guia de estilos **Eslint**.

|       FRONT       |   API   |
| :---------------: | :-----: |
|       React       | Mongodb |
|      Next.js      | Fastify |
|      Parcel       | Nodemon |
| react-sweet-state |  Auth0  |
|                   |   SWR   |

# Deployment

```console
git clone https://github.com/Mihai-CV/ACHIEVEMENT-TASKS.git
cd ACHIEVEMENT-TASKS
yarn install
yarn run dev
```
