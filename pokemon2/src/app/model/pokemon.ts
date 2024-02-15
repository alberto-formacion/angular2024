import { Type } from "../interfaces/pokemon-response";

export class Pokemon {
  constructor(
    public id:number,
    public nombre:string,
    public imagen?:string,
    public tipos?:Array<Type>
  ){}
}
