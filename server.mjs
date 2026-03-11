import express from 'express';

import { obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller } from './controllers/superheroesController.mjs';

const app = express ();
const PORT = 3005;

/***** Rutas *****/

//Solicitud (ej.): http://localhost:3005/superheroes/id/1
app.get ('/superheroes/id/:id', obtenerSuperheroePorIdController);

//Solicitud (ej.): http://localhost:3005/superheroes/atributo/nombreSuperheroe/spiderman 
// http://localhost:3005/superheroes/atributo/planetaOrigen/tierra
app.get ('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);

//Solicitud (ej.): http://localhost:3005/superheroes/edad/mayorA30
app.get ('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller)

//Levantar el servidor en el puerto 3005
app.listen (PORT, () => {
    console.log (`Servidor corriendo en el puerto ${PORT}`);
});