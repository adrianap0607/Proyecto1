# Calculadora con React

## Descripción de Proyecto

Se incorporó la funcionalidad de suma, resta, multiplicación, división, módulo, utilizar números decimales y negativos. Además, se tienen 2 restricciones, y es que no se puede hacer display a más de 9 carácteres en la pantalla, y tampoco se pueden tener números negativos como resultado de una operación, si ocurre esto se muestra un mensaje de error.

## Puntos Adicionales

El proyecto fue desarrollado con el objetivo de cumplir con las reglas de JS Standard Style, y se colocó la restricción adicional de no poder utilizar puntos y comas.

Esto se puede validar con:

`npm run lint`

Además, para documentar los comopnentes utilizados se incorporó un Storybook, este se puede visualizar al correr el siguiente comando:

`npm run storybook`

Por último, el proyecto cuenta con algunos tests, los cuales se pueden probar haciendo:

`npm run test`

---

## Correr Proyecto

A continuación, se detallarán las dos formas para poder probar la calculadora:

### Modo Desarrollo con Vite

1. Clonar el proyecto y abrirlo.
2. En la terminal instalar las dependencias con: `npm install`
3. Levantar el servidor de desarrollo: `npm run dev`, este por defecto se levanta en el puerto 5173, a menos que se indique lo contrario en el vite.config.js

### Utilizando Docker

En el proyecto buscar el archivo **docker-compose.example.yml** y guardarlo únicamente como **docker-compose.yml**, siempre verificar que el puerto que se indique para el frontend se tenga disponible, tras realizar este cambio, lo único que se debe hacer es correr el siguiente comando:

`docker-compose up --build`.

---
