import { Component, OnInit } from '@angular/core';
import { GetDataBrawlsService } from '../../services/get-data-brawls.service';

@Component({
  selector: 'app-card-icon-brawls',
  templateUrl: './card-icon-brawls.component.html',
  styleUrls: ['./card-icon-brawls.component.css']
})
export class CardIconBrawlsComponent implements OnInit {
  
  brawlers: any = [];

  constructor(private service: GetDataBrawlsService ) { 

  }

  ngOnInit(): void {
    this.getBrawlers();

    this.getFiveBrawlers();

  }



  getBrawlers(){
    this.service.getBrawlers().subscribe((data: any) => {
      this.brawlers = Object.values(data.list)
      console.log(this.brawlers)
    });
  }

  getFiveBrawlers(){
      console.log(this.brawlers)

  };

}
