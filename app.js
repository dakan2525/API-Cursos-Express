const express = require('express');
const app = express();

const {infoCursos} = require('./datos/cursos.js');


const routerProgramacion = require('./rourters/programacion.js');
app.use('/api/cursos/programacion/', routerProgramacion);

const routerMatematicas = require('./rourters/matematicas.js');
app.use('/api/cursos/matematicas/', routerMatematicas)

app.get('/', (req, res) => {
    res.send('Esta es mi primera API creada con Node.js y Express, si quieres conocer sus funcionalidades y rutas. Consulta el documento README.md en la siguiente ruta https://github.com/dakan2525/API-Cursos-Express o descarga https://www.mediafire.com/file/rp8tqcpl5nfozy6/API-Cursos-Express.txt/file');
});

app.get('/api/cursos', (req, res) => {
    res.send(infoCursos);
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`)
})