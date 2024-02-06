import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { MapsService } from '../../services/map/maps.service';

@Component({
  selector: 'app-maps-detail',
  templateUrl: './maps-detail.component.html',
  styleUrls: ['./maps-detail.component.css']
})
export class MapsDetailComponent implements OnInit {
  private id: number;
  public map: any;

  constructor(private route: ActivatedRoute, private service: MapsService) { 
    this.id = 0;
    this.map = {};
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.service.getMap(this.id).subscribe({
        next: response => this.map = response,
        error: err => console.log(err),
        complete: () => console.log(this.map)
      })
    });
  }

}
