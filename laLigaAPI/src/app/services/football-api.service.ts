import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, first, map, of } from 'rxjs';
import { TeamsResponse } from '../interfaces/teams-response';
import { Equipo } from '../model/equipo';
import { PlayerResponse } from '../interfaces/players-response';
import { Jugador } from '../model/jugador';

@Injectable({
  providedIn: 'root'
})
export class FootballAPIService {

  constructor(private http:HttpClient) { }

  private API_KEY = 'a6b7ff3a7e00c0b342ed95cac0260a7c';
  private urlBase:string = 'https://v3.football.api-sports.io/'; //league:140 season:2023

  getEquipos():Observable<Array<Equipo> | undefined>{
    const params = new HttpParams()
      .set('league', 140)
      .set('season', 2023);

    return this.http.get<TeamsResponse>(`${this.urlBase}/teams`,{
      headers: {"x-rapidapi-key": this.API_KEY,"x-rapidapi-host":"v3.football.api-sports.io"},
      params
    }).pipe(
      map(x=>{
        console.log(x);
        return x.response.map((res)=>{
          return new Equipo(res.team.id, res.team.name, res.team.founded, res.team.logo, res.venue.name);
        });
      }),
      catchError((error)=>{
        console.log(error);
        return of(undefined); // esto devuelve un observable con el valor undefined
      })
    );

  }

  getJugadoresByEquipo(idEquipo:number):Observable<Array<Jugador> | undefined>{
    const params = new HttpParams()
      .set('team', idEquipo)
      .set('season', 2023);

    return this.http.get<PlayerResponse>(`${this.urlBase}/players`,{
      headers: {"x-rapidapi-key": this.API_KEY,"x-rapidapi-host":"v3.football.api-sports.io"},
      params
    }).pipe(
      map(x=>{
        console.log(x);
        return x.response.map((res)=>{
          return new Jugador(res.player.id, res.player.name, res.player.lastname, res.player.photo, res.player.age, res.player.height, res.player.weight);
        });
      }),
      catchError((error)=>{
        console.log(error);
        return of(undefined); // esto devuelve un observable con el valor undefined
      })
    );
  }
}
