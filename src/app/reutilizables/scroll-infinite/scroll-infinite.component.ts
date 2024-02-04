import { Component, HostListener, ElementRef, ViewChild, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-scroll-infinite',
  templateUrl: './scroll-infinite.component.html',
  styleUrls: ['./scroll-infinite.component.css']
})
export class ScrollInfiniteComponent implements OnChanges,AfterViewInit  {

  @Input() data: any = {};

  //DATOSINDEXADOS
  dataIndexed: any = {};

  tagFilter:any = [];

  @Input() route: string;

  isDataReady: boolean = false;


  styleClassMap: { [key: string]: string } = {
    'brawlers': 'brawlers-style',
    'maps': 'maps-style',
    
  };

  constructor() {
    this.data = [];
    this.dataIndexed = [];
    this.tagFilter = [];
    this.route = '';
  }

  /*Carrousel*/
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    90: {
      items: 1
    },
    100: {
      items: 2
    },
    101: {
      items: 3
    }
  },
  nav: true
}





  
  ngAfterViewInit(): void {
    //recargar el carrousel
    
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      //console.log('Datos recibidos en app-scroll-infinite:', this.data);
      this.tagFilter = [...new Set(this.data.map((item: any) => item.filter))];
      this.tagFilter.unshift('All');    
      console.log('Data:', this.data);
     // this.getItemsMaps();
  

    }
    //console.log('Datos recibidos en tags:', this.tagFilter);
  }
  
  filtrar = (tag: string): void => {
    console.log('Filtrar por:', tag);
    //si esta en all, mostrar todos los elementos
    if (tag === 'All') {
      this.isDataReady = true;
      return;
    }
    //filtrar por tag
    this.isDataReady = false;
    this.data = this.data.filter((item: any) => item.filter === tag);
    this.isDataReady = true;
    


   
  }

get isDataAvailable(): boolean {
  return this.data.length > 0;
}


}


/*



*/
