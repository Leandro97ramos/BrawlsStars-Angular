import { Component, Input, OnChanges, SimpleChanges, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-scroll-infinite',
  templateUrl: './scroll-infinite.component.html',
  styleUrls: ['./scroll-infinite.component.css']
})
export class ScrollInfiniteComponent implements OnChanges, AfterViewInit {

  @Input() data: any = {};
  @Input() route: string;
  @Input() allFilters: string[] = [];
  @Output() filterSelected = new EventEmitter<string>();

  dataIndexed: any = {};

  tagFilter: any = [];

  isDataReady: boolean = false;

  isMobile: boolean;



  styleClassMap: { [key: string]: string } = {
    'brawlers': 'brawlers-style',
    'maps': 'maps-style',

  };

  constructor() {
    this.data = [];
    this.dataIndexed = [];
    this.tagFilter = [];
    this.allFilters = [];
    this.route = '';
    this.isMobile = false;
  }


  ngOnInit(): void {
    this.isMobile = this.checkIfMobile();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  onResize(): void {
    this.isMobile = this.checkIfMobile();
  }

  checkIfMobile(): boolean {
    return window.innerWidth < 575; // Cambia este valor según el tamaño de pantalla que desees
  }


  /*Tag Carrousel*/
  tagOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      10: {
        items: 2
      },
      20: {
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
      this.tagFilter = [...new Set(this.data.map((item: any) => this.allFilters.filter))];
      this.tagFilter.unshift('All');
      //console.log('Filter:', this.allFilters);
      // this.getItemsMaps();
      console.log('Datos recibidos en app-scroll-infinite:', this.data);


    }
    //console.log('Datos recibidos en tags:', this.tagFilter);
  }

  filtrar = (tag: string): void => {




  }

  onFilterClick(filter: string): void {
    this.filterSelected.next(filter);

    console.log('Filtrar por:', filter);


  }

  get isDataAvailable(): boolean {
    return this.data.length > 0;
  }


}


