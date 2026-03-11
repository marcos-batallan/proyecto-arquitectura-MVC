/***** IMPLEMENTACIÓN DE LA PERSISTENCIA CON ARCHIVOS *****/

//Esta clase implementa el método obtenerTodos() que lee los datos desde superheroes.txt

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SuperheroesDataSource from './superheroesDataSource.mjs';
import Superheroe from '../models/superheroe.mjs';

const __filename = fileURLToPath (import.meta.url);
const __dirname = path.dirname (__filename);

export default class SuperheroesFileRepository extends SuperheroesDataSource {
    constructor () {
        super ();
        this.filePath = path.join (__dirname, '../superheroes.txt');
    }

    obtenerTodos () {
        const data = fs.readFileSync (this.filePath, 'utf-8');
        //Aquí se convierte el archivo JSON en un array de objetos de tipo Superhéroe
        const heroes = JSON.parse (data);

        return heroes.map(hero => new Superheroe(
            hero.id,
            hero.nombreSuperheroe,
            hero.nombreReal,
            hero.nombreSociedad,
            hero.edad,
            hero.planetaOrigen,
            hero.debilidad,
            hero.poder,
            hero.habilidadEspecial,
            hero.aliado,
            hero.enemigo
        ));
    }
}