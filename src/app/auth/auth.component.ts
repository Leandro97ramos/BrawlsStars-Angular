import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  action: string = 'login';
  constructor(private route: ActivatedRoute ) { 
   
  }

  ngOnInit(): void {
      this.action = this.route.snapshot.data["action"];
  }

}
