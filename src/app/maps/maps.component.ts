import { Component, OnChanges, OnInit } from '@angular/core';
import { MapsService } from '../services/map/maps.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit, OnChanges {

  maps: any[];
  itemsMaps: any[];
  tagFilter: any[];
  isLoading: boolean;
  currentPage: number;
  itemsPerPage: number;
  toggleLoading = () => this.isLoading = !this.isLoading;

  constructor(private service: MapsService) {
    this.maps = [];
    this.itemsMaps = [];
    this.tagFilter = [];
    this.isLoading = false;
    this.currentPage = 1;
    this.itemsPerPage = 10;
  }

  ngOnChanges(): void {
    console.log('ngOnChanges', this.itemsMaps);
  }

  ngOnInit(): void {
    this.loadAllData();
    this.appendData();
  }

  onScroll = () => {
    this.currentPage++;
    
    this.appendData();

  }


  /*
    1.- Obtengo todos los mapas
    2.- Filtro los mapas por pagina

  */



  loadAllData = (): void => {
    this.toggleLoading();

    this.service.getMaps().pipe(
      map((response: any[]) => {
        const uniqueMaps = this.getUniqueMaps(response);
        return uniqueMaps.map(item => ({
          id: item.id,
          name: item.name,
          image: item.imageUrl,
          color: item.gameMode.color,
          filter: item.gameMode.name
        }));
      })
    ).subscribe({
      next: (response) => {
        //console.log('maps:', response);
        this.maps = response;
        //console.log('maps:', this.maps);
      },
      error: (err) => {
        console.error('Error loading data:', err);
        // Puedes agregar lógica adicional para manejar el error, mostrar un mensaje, etc.
      },
      complete: () => {
        this.toggleLoading();
        // Puedes realizar otras acciones después de completar la carga de datos
      }
    }).add(() => {
      this.getItemsMaps(this.currentPage, this.itemsPerPage).subscribe({
        next: (response) => {
          this.itemsMaps = response;
          console.log('itemsMaps:', this.itemsMaps);
        },
        error: (err) => {
          console.error('Error loading data:', err);
          // Puedes agregar lógica adicional para manejar el error, mostrar un mensaje, etc.
        },
        complete: () => {
          this.toggleLoading();
          // Puedes realizar otras acciones después de completar la carga de datos
        }
      });
    });
  };





  private getUniqueMaps(data: any[]): any[] {
    const uniqueMapSet = new Set<string>();
    const uniqueMaps = [];

    for (const item of data) {
      const mapKey = `${item.name}`;
      //console.log('mapKey:', mapKey);
      if (!uniqueMapSet.has(mapKey)) {
        uniqueMapSet.add(mapKey);
        uniqueMaps.push(item);
      }
    }

    return uniqueMaps;
  }

  appendData = (): void => {
    //console.log('currentPage:', this.currentPage);
    this.toggleLoading();
    console.log('currentPage:', this.currentPage);
    this.getItemsMaps(this.currentPage, this.itemsPerPage);
    console.log('itemsMaps:', this.itemsMaps);


  }

  getItemsMaps(page = 1, itemsPerPage = 10): Observable<any[]> {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    //le agrego los items a itemsMaps sin borrar los anteriores
    this.itemsMaps = [...this.itemsMaps, ...this.maps.slice(startIndex, endIndex)];
    
    
    console.log('Entra en getItemsMaps:', this.itemsMaps);
    return of(this.itemsMaps);
  }





/*
  getItemsMaps(page = 1, itemsPerPage = 10): Observable<any[]> {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    this.itemsMaps = this.maps.slice(startIndex, endIndex);
    console.log('startIndex:', this.itemsMaps);

    return of(this.itemsMaps);
  }
*/



}




/*
 
 loadData = (): void => {

   ngOnInit(): void {
   this.loadData();


 }

   this.toggleLoading();

   this.getItemsMaps(this.currentPage, this.itemsPerPage).pipe(
     map((response: any[]) => {
       const uniqueMaps = this.getUniqueMaps(response);
       return uniqueMaps.map(item => ({
         id: item.id,
         name: item.name,
         image: item.imageUrl,
         color: item.gameMode.color,
         filter: item.gameMode.name
       }));
     })
   ).subscribe({
     next: (response) => {
       this.maps = response;
     },
     error: (err) => {
       console.error('Error loading data:', err);
       // Puedes agregar lógica adicional para manejar el error, mostrar un mensaje, etc.
     },
     complete: () => {
       this.toggleLoading();
       // Puedes realizar otras acciones después de completar la carga de datos
     }
   });
 };
 
   appendData = ():void => {

   this.toggleLoading();

   this.service.getItemsMaps(this.currentPage, this.itemsPerPage).pipe(
   map((response: any[]) => {
     return response.map(item => ({
       id: item.id,
       name: item.name,
       image: item.imageUrl,
       color: item.gameMode.color,
     }));
   })
   ).subscribe({
     next: response => this.maps = [...this.maps, ...response],
     error: err => console.log(err),
     complete: () => this.toggleLoading()
   })

 }

 


 onScroll = () => {
  
     this.currentPage++;
     this.appendData();
   
 }

 
 
 
 */