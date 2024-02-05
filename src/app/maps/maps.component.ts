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
  filter: string[];
  isLoading: boolean;
  currentPage: number;
  itemsPerPage: number;
  toggleLoading = () => this.isLoading = !this.isLoading;

  constructor(private service: MapsService) {
    this.maps = [];
    this.isLoading = false;
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.filter = [];
  }

  ngOnChanges(): void {
    
  }

  ngOnInit(): void {
    this.loadAllData();
    this.getAllFilters();
  }

  onScroll = () => {
    this.currentPage++;
    this.appendData();

  }

  getAllFilters(): void {
    //obtener todos los filtros
    this.service.getMaps().pipe(
      map((data: any[]) => {
          //obtengo todos los filtros
          const filters = data.map(item => item.gameMode.name);
          //agrego primero el filtro 'all'
          filters.unshift('all');
          return filters.filter((item, index) => filters.indexOf(item) === index);
      })
    ).subscribe({
      next: response => this.filter = response,
      error: err => console.log(err),
      complete: () => console.log('filters:', this.filter)
    });
      

  }
  

  loadAllData = (): void => {
    this.toggleLoading();

    this.service.getItemsMaps().pipe(
      map((response: any[]) => {
        const uniqueMaps = this.getUniqueMaps(response);
        return uniqueMaps.map(item => ({
          id: item.id,
          name: item.name,
          image: item.imageUrl,
          color: item.gameMode.color,
        }));
      })
    ).subscribe({
      next: response => this.maps = response,
      error: err => console.log(err),
      complete: () => {this.toggleLoading()}
    });
  };


  appendData = (): void => {
    //console.log('currentPage:', this.currentPage);
    this.toggleLoading();

    this.service.getItemsMaps(this.currentPage,this.itemsPerPage).pipe(
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


  handleFilterSelection(filter: string): void {
    // Aquí puedes realizar acciones específicas según el filtro seleccionado
    console.log(`Filtro seleccionado: ${filter}`);
    this.service.getFilteredMaps(filter).pipe(
      map((response: any[]) => {
        const uniqueMaps = this.getUniqueMaps(response);
        return uniqueMaps.map(item => ({
          id: item.id,
          name: item.name,
          image: item.imageUrl,
          color: item.gameMode.color,
        }));
      })
    ).subscribe({
      next: response => this.maps = response,
      error: err => console.log(err),
      complete: () => {this.toggleLoading(),console.log('maps:', this.maps)}
    });
    
      
  

  }




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


}




