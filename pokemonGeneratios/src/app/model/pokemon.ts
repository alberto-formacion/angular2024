import { Move, Type } from "../interfaces/pokemon-response";

export class Pokemon{
    constructor(
        public id: number,
        public nombre:string,
        public imagen?:string,
        public types?: Array<Type>,
        public moves?: Array<Move>
    ){}
}