import { Component, OnInit } from '@angular/core';
import { BrawlersService } from '../services/brawler/brawlers.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-brawlers',
  templateUrl: './brawlers.component.html',
  styleUrls: ['./brawlers.component.css']
})
export class BrawlersComponent implements OnInit {

  brawlers: any[];
  filter: string[];
  isLoading: boolean;
  currentPage: number;
  itemsPerPage: number;
  filterSelected: string;
  toggleLoading = () => this.isLoading = !this.isLoading;

  constructor(private service: BrawlersService) {
    this.brawlers = [];
    this.filter = [];
    this.isLoading = false;
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.filterSelected = 'All';

  }

  ngOnInit(): void {
    this.loadData();
    this.getAllFilters();
  }

  onScroll = () => {
    this.currentPage++;
    this.appendData();

  }
  getAllFilters(): void {
    //obtener todos los filtros
    this.service.getBrawlers().pipe(
      map((data: any[]) => {
        //obtengo todos los filtros
        //console.log("data en getBrawlers: ", data);
        const filters = data.map(item => item.class.name);
        //agrego primero el filtro 'all'
        filters.unshift('All');
        return filters.filter((item, index) => filters.indexOf(item) === index);
      })
    ).subscribe({
      next: response => this.filter = response,
      error: err => console.log(err),
      complete: () => console.log('*---------*')
    });
  }


  loadData = (): void => {
    this.toggleLoading();
    this.service.getItemsBrawls(this.currentPage, this.itemsPerPage).pipe(
      map((response: any[]) => {
        return response.map(item => ({
          id: item.id,
          name: item.name,
          image: item.imageUrl,
          color: item.rarity.color,

        }));

      })
    ).subscribe({

      next: response => this.brawlers = response,
      error: err => console.log(err),
      complete: () => { this.toggleLoading() }
    })
  }


  appendData = (): void => {
    this.toggleLoading();
    //si no hay filtros seleccionados
    if (this.filterSelected === 'All') {
      this.service.getItemsBrawls(this.currentPage, this.itemsPerPage).pipe(
        map((response: any[]) => {
          return response.map(item => ({
            id: item.id,
            name: item.name,
            image: item.imageUrl,
            color: item.rarity.color,
          }));
        })
      ).subscribe({
        next: response => this.brawlers = [...this.brawlers, ...response],
        error: err => console.log(err),
        complete: () => { this.toggleLoading(), console.log('se ejecuta AppendData con la cantidad de :', this.brawlers.length, this.brawlers) }
      })
    }
  }


    handleFilterSelection(filter: string): void {
      // Aquí puedes realizar acciones específicas según el filtro seleccionado
      this.filterSelected = filter;
      this.service.getFilteredBrawls(this.filterSelected).pipe(
        map((response: any[]) => {
          return response.map(item => ({
            id: item.id,
            name: item.name,
            image: item.imageUrl,
            color: item.rarity.color,
          }));
        })
      ).subscribe({
        next: response => this.brawlers = response,
        error: err => console.log(err),
        complete: () => { this.toggleLoading(), console.log('brawlers:', this.brawlers) }
      });


    }

  }
