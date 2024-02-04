import { Component, OnInit } from '@angular/core';
import { BrawlersService } from '../services/brawler/brawlers.service';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-brawlers',
  templateUrl: './brawlers.component.html',
  styleUrls: ['./brawlers.component.css']
})
export class BrawlersComponent implements OnInit {

  brawlers: any[];
  isLoading: boolean;
  currentPage: number;
  itemsPerPage: number;
  toggleLoading = () => this.isLoading = !this.isLoading;

  constructor(private service: BrawlersService) {
    this.brawlers = [];
    this.isLoading = false;
    this.currentPage = 1; 
    this.itemsPerPage = 10;
  }

  ngOnInit(): void {
    this.loadData();
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
          complete: () => this.toggleLoading()
      })  
    

  }


  appendData = ():void => {

    this.toggleLoading();
    //console.log(`brawls: ${this.brawlers.length}`);

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
      complete: () => this.toggleLoading()
    })

  }


  onScroll = () => {
    if (this.brawlers.length != 76) {

      this.currentPage++;
      this.appendData();
    }
  }


}

