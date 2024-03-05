import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  private url = 'https://brawlsstars-node.onrender.com/api/maps';
  private totalMaps: any[] = [];
  constructor(private http: HttpClient) { }

  public getItemsMaps(page = 1, itemsPerPage = 10): Observable<any[]> {
    return this.getMaps().pipe(
      switchMap((data: any[]) => {
        this.totalMaps = data;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const items = [];
        for (let i = startIndex; i < endIndex; i++) {
          if (i < this.totalMaps.length) {
            items.push(this.totalMaps[i]);
          }
        }
        return of(items);
      })
    );
  }


  public getFilteredMaps(filter: string): Observable<any[]> {
    return this.getMaps().pipe(
      map((data: any[]) => {
        console.log("filtro en getFilter: ", filter);
        if (filter != "All") {
          const filteredMaps = data.filter(map => map.gameMode.name == filter);
          return filteredMaps;
        }
        return data;
      })
    );
  }

  public getMaps(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      map((data: any[]) => {
        //console.log(Object.values(data)[0]);
        return Object.values(data)[0] || []; // Retorna los datos como es habitual, devuelve un array vacío si no hay datos
      })
    );
  }

  public getMap(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`).pipe(
      map((data: any) => {
        return data || {}; // Retorna los datos como es habitual, devuelve un objeto vacío si no hay datos
      })
    );
  }
}
