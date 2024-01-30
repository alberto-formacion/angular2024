import { Actor } from "./actor";

export class Pelicula{
    constructor(
        public id:number,
        public titulo:string,
        public imagen: string,
        public sinopsis:string,
        public fechaEstreno:Date,
        public director:string,
        public actores:Array<Actor>,
        public puntuacion:number
    ){}
}