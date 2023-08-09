const express = require('express');
const { json } = require('express/lib/response.js');

const {matematicas} = require('../datos/cursos.js').infoCursos;

const routerMatematicas = express.Router();

// middleware  se ejecutan despues de recibir una solicutud y antes de enviar una respuesta 
// este tiene acceso a el objeto de req y res y la funcion next() que maneja el llamado a la proccima funcion middleware
routerMatematicas.use(express.json())

function ordenarVistas(resultados){
    resultados = resultados.sort((a, b) => a.vistas - b.vistas);
    return resultados
}

routerMatematicas.get('/', (req, res) => {
    res.json(matematicas);
});

routerMatematicas.get('/:tema', (req, res) => {
    
    const tema = req.params.tema
    const resultados = matematicas.filter(curso => curso.tema === tema)

    if (resultados.length === 0) {
        res.status(204).send(`No se encontraron resultados para el curso de ${tema}`)
    }

    if (req.query.ordenar === 'vistas') {
        return res.json(ordenarVistas(resultados));
    }

    res.json(resultados);
})

routerMatematicas.get('/:tema/:nivel', (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;

    const resultados = matematicas.filter(curso => curso.tema === tema && curso.nivel === nivel);

    if (resultados === 0) {
        res.status(204).send(`No se encontraron resultados para ${tema} con el nivel ${nivel}` )
    }

    if(req.query.ordenar === 'visitas'){
        res.json(ordenarVistas(resultados));
    }

    res.json(resultados)
})

routerMatematicas.post('/', (req, res) => {
    let cursoNuevo = req.body;
    matematicas.push(cursoNuevo);
    res.json(matematicas)
})

routerMatematicas.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;
    const indice = matematicas.findIndex(curso => curso.id == id)

    if (indice >= 0) {
        matematicas[indice] = cursoActualizado;
    }else{
    res.status(404).send(`No se encontro un curso con el id ${id}`)
    }
    res.json(matematicas)
})

routerMatematicas.patch('/:id', (req, res) => {
    const infoActualizada = req.body;
    const id = req.params.id;
    const indice = matematicas.findIndex(curso => curso.id == id)
    const cursoAModificar = matematicas[indice]

    if (indice >= 0) {
        Object.assign(cursoAModificar, infoActualizada)
    }else{
        res.status(404).send(`No se encontro un curso con el id ${id}`)
    }
    res.json(matematicas)
})

routerMatematicas.delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = matematicas.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        matematicas.splice(indice, 1);
    }else{
        res.status(404).send(`No se encontro un curso con el id ${id}`)
    }
    res.json(matematicas)
})


module.exports = routerMatematicas;