import { Component, OnInit } from '@angular/core';
import { MapsService } from '../services/map/maps.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  maps: any[];
  filter: string[];
  isLoading: boolean;
  currentPage: number;
  itemsPerPage: number;
  filterSelected: string;
  toggleLoading = () => this.isLoading = !this.isLoading;

  constructor(private service: MapsService) {
    this.maps = [];
    this.filter = [];
    this.isLoading = false;
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.filterSelected = 'All';
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
          filters.unshift('All');
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
    if (this.filterSelected === 'All') {
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
  }

  handleFilterSelection(filter: string): void {
    // Aquí puedes realizar acciones específicas según el filtro seleccionado
    this.filterSelected = filter;
    this.service.getFilteredMaps(this.filterSelected).pipe(
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




