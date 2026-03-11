/***** ABSTRACCION DE LA PERSISTENCIA *****/

//Este archivo define una abstracción que otras clases de persistencia deben implementar

export default class SuperheroesDataSource {
    //Este es un método abstracto para obtener todos los superhéroes
    obtenerTodos () {
        throw new Error ('Este método debe ser implementado por la subclase');
    }
}