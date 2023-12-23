import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataMenu = 
  [ {
      name: 'Brawlers',
      link: '/'
    },
    {
      name: 'Mapas',
      link: '/maps'
    },
    {
      name: 'Modos de juego',
      link: '/Modes'
    }

  ];

}
