import { Jugador } from "./jugador";

export class Equipo{
constructor(
  public id:number,
  public nombre:string,
  public fundacion:number,
  public escudo:string,
  public campo:string,
  public jugadores?:Array<Jugador>){}
}
