# API-Cursos-Express

Esta es una API está creada con Node.js y Express, muestra la información básica de cursos de programación y matemáticas.

Funciones y rutas para acceder a la información

nota: se pueden ejecutar las mismas funciones para los cursos de matemáticas y programación los ejemplos están basados en los cursos de programación

--------------

* Esta API está creada para mostrar información de cursos, programación divididos en 2 rutas, programación y matemáticas, ruta base de la API donde se |    encontraran la información de la API y las rutas para acceder a la información
https://api-cursos-express-mlby-dev.fl0.io/

* Ruta donde podrás consultar todos los cursos tanto de programación como de matemáticas
https://api-cursos-express-mlby-dev.fl0.io/api/cursos/

* Muestra solo los cursos de programación o matemáticas
https://api-cursos-express-mlby-dev.fl0.io/api/cursos/programacion

* Lenguaje es un parámetro en el cual puedes enviar python o javascript, nota: los lenguajes de programación o temas, deben ingresarse en minúscula para facilitar la consulta
https://api-cursos-express-mlby-dev.fl0.io/api/cursos/programacion/lenguaje

ejemplo: https://api-cursos-express-mlby-dev.fl0.io/api/cursos/programacion/python

* Nivel es el segundo valor para encontrar un curso específico
https://api-cursos-express-mlby-dev.fl0.io/api/cursos/programacion/python/nivel

ejemplo: https://api-cursos-express-mlby-dev.fl0.io/api/cursos/programacion/python/basico

* se puede ordenar los resultados con un parámetro tipo consulta ?ordenar=vistas así los cursos de programación o matemáticas quedarán ordenados por la cantidad de vistas

ejemplo: https://api-cursos-express-mlby-dev.fl0.io/api/cursos/programacion/python/?ordenar=vistas 

--------------;

creada por Andres Felipe Prado V

GitHub: dakan2525  repositorio https://github.com/dakan2525/API-Cursos-Express

correo: andres25prado@gmail.com