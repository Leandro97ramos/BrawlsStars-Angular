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

}
