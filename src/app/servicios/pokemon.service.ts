import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

    private httpHeaders  = new HttpHeaders({ 'Content-Type': 'application/json'});

  
  
  private pokemonesUrl: String = "https://pokeapi.co/api/v2/pokemon/"
  private pokemonUrl: String = "https://pokeapi.co/api/v2/pokemon"
                             
  constructor(private http: HttpClient) {}


  

  getPokemons(): Observable<any[]> {
    return this.http.get(`${this.pokemonesUrl}`)
     .pipe(map(response => response as any[])
    );
  }

  getPokemonByUrl(url:string): Observable<any> {
    return this.http.get(`${url}`)
     .pipe(map(response => response as any)
    );
  } 

  getPokemonByIdOrName(idName:string): Observable<any> {
    return this.http.get(`${this.pokemonUrl}/${idName}`)
     .pipe(map(response => response as any)
    );
  }

  



  



  
}
