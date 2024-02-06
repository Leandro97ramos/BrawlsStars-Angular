import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { BrawlersService } from '../../services/brawler/brawlers.service';

@Component({
  selector: 'app-brawler-detail',
  templateUrl: './brawler-detail.component.html',
  styleUrls: ['./brawler-detail.component.css']
})
export class BrawlerDetailComponent implements OnInit {
  private id: number;
  public brawler: any;
  constructor(private route: ActivatedRoute, private service: BrawlersService) {
      this.id = 0;
      
   }

  ngOnInit(): void {
    this.getData();
    this.getBrawler()
    
  }

  getData(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.service.getBrawler(this.id).subscribe({
        next: response => this.brawler = response,
        error: err => console.log(err),
        complete: () => console.log(this.brawler)
      })
    })
    
    
  }

  getBrawler(){
    console.log(this.brawler);
    
    return this.brawler;
  }

  hexToRgb(hex: string): string {
    // Elimina el "#" si está presente
    hex = hex.replace(/^#/, '');

    // Convierte el color hexadecimal a componentes RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Devuelve el resultado en formato "rgb(r, g, b)"
    return `rgb(${r}, ${g}, ${b}, 0.8 )`;
  }


}
