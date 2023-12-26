import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataBrawlsService {

  private url = 'http://localhost:3333/api/brawls';

  constructor(private http: HttpClient ) { }

  public getBrawlers(): Observable<any> {
    return this.http.get(this.url);
  }

  public getBrawler(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  


}
