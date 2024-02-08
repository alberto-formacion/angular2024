import { Jugador } from "./jugador";

export class Equipo{
constructor(
  public nombre:string,
  public fundacion:number,
  public escudo:string,
  public jugadores?:Array<Jugador>){}
}
