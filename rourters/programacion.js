const express = require('express');
const { json } = require('express/lib/response.js');

const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

routerProgramacion.use(express.json())

function ordenarVistas(resultados){
    resultados = resultados.sort((a, b) => a.vistas - b.vistas);
    return resultados
}

routerProgramacion.get('/', (req, res) => {
    res.json(programacion);
});

routerProgramacion.get('/:tema', (req, res) => {
    
    const tema = req.params.tema
    const resultados = programacion.filter(curso => curso.tema === tema)

    if (resultados.length === 0) {
        res.status(404).send(`No se encontraron resultados para el curso de ${tema}`)
    }

    if (req.query.ordenar === 'vistas') {
        return res.send(ordenarVistas(resultados))
    }

    res.json(resultados);
})

routerProgramacion.get('/:tema/:nivel', (req, res) => {
    
    const tema = req.params.tema;
    const nivel = req.params.nivel;

    const resultados = programacion.filter(curso => curso.tema === tema && curso.nivel === nivel)

    if (resultados.length === 0) {
        //el metodo send envia un mensaje que se mostrara en pantalla para indicar el error 
        return res.status(204).send(`No se encontraron resultados para el curso de "${tema}" para el nivel "${nivel}"`)
        //el metodo end puede usarse para responder sin un mensaje 
        // return res.status(404).end();
    }

    res.json(resultados);

})

// tener en cuenta que requiere una funcion middleware para que controle la convercion de la informacion que llega 
routerProgramacion.post('/', (req, res) => {
    let nuevoCurso = req.body;
    programacion.push(nuevoCurso);
    res.json(programacion);
})

routerProgramacion.put('/:id', (req, res) => {
    const id = req.params.id;
    const cursoActualizado = req.body;

    const indice = programacion.findIndex(curso => curso.id == id)

    if (indice >= 0) {
        programacion[indice] = cursoActualizado;
    }else{
        res.status(404).send(`No se pudo actualizar, porque no se encontro un curso con el id "${id}"`)
    }
    res.json(programacion);
})


routerProgramacion.patch('/:id', (req, res) => {
    const id = req.params.id;
    const infoActualizada = req.body;

    const indice = programacion.findIndex(curso => curso.id == id)
    const cursoAModificar = programacion[indice]

    if (indice >= 0) {
        //asignar a un objeto con la funcion assign solo los campos nuevos, recibe dos parametros el objeto a actualizar y otro objeto con la infomacion que quieres actualizar 
        Object.assign(cursoAModificar, infoActualizada);
    }else{
        res.status(404).send(`No se pudo actualizar, porque no se encontro un curso con el id "${id}"`)
    }
    res.json(programacion);

})


routerProgramacion.delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        programacion.splice(indice, 1);
    }else{
        res.status(404).send(`No se pudo eliminar, porque no se encontro un curso con el id "${id}"`)
    }
    // en ves de usar res.send() que envia una respuesta en el formato que venga la informacion podemos usar res.json() que convierte cualquier dato en json sin importar lo que este enviando dentro de los ()
    res.json(programacion);
})


module.exports = routerProgramacion;