import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BrawlersService {
  private url = 'http://localhost:3333/api/brawls';

  private totalBrawlers: any[]=[];

  constructor(private http: HttpClient) { }

  public getItemsBrawls(page = 1, itemsPerPage = 10): Observable<any[]> {
    return this.getBrawlers().pipe(
      switchMap((data: any[]) => {
        this.totalBrawlers = data;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const items = [];

        for (let i = startIndex; i < endIndex; i++) {
         // console.log('Respuesta de la API:', this.totalBrawlers.length);
          
          if (i < this.totalBrawlers.length) {
           // console.log("entro");
            
            items.push(this.totalBrawlers[i]);
          }
        }

        return of(items);
      })
    );
  }

  public getFilteredBrawls(filter: string): Observable<any[]> {
    return this.getBrawlers().pipe(
      map((data: any[]) => {
        console.log("filtro en getFilter: ", filter);
        if (filter != "All") {
          const filteredBrawls = data.filter(map => map.class.name == filter);
          return filteredBrawls;
        }
        return data;
      })
    );
  }


  public getBrawlers(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      map((data: any[]) => {
        return Object.values(data)[0] || []; // Retorna los datos como es habitual, devuelve un array vacío si no hay datos
      })
    );
  }

  public getBrawler(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`).pipe(
      map((data: any) => {
      
        console.log(data);
        
        return data || {}; // Retorna los datos como es habitual, devuelve un objeto vacío si no hay datos
      })
    );

  }
}
