import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameModesService {

  private url = 'http://localhost:3333/api/brawls';

  private totalGameModes: any[]=[];


  constructor(private http: HttpClient ) { }


  public getItemsGameModes(page = 1, itemsPerPage = 10): Observable<any[]> {
    return this.getGameModes().pipe(
      switchMap((data: any[]) => {
        this.totalGameModes = data;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const items = [];

        for (let i = startIndex; i < endIndex; i++) {
         // console.log('Respuesta de la API:', this.totalGameModes.length);
          
          if (i < this.totalGameModes.length) {
           // console.log("entro");
            
            items.push(this.totalGameModes[i]);
          }
        }

        return of(items);
      })
    );
  }


  public getGameModes(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      map((data: any[]) => {
        return Object.values(data)[0] || []; // Retorna los datos como es habitual, devuelve un array vacío si no hay datos
      })
    );
  }


  public getGameMode(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`).pipe(
      map((data: any) => {
      
        console.log(data);
        
        return data || {}; // Retorna los datos como es habitual, devuelve un objeto vacío si no hay datos
      })
    );
  }













}
