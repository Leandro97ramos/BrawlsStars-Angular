import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrawlersComponent} from './brawlers/brawlers.component';
import { BrawlerDetailComponent } from './brawlers/brawler-detail/brawler-detail.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { MapsDetailComponent } from './maps/maps-detail/maps-detail.component';
import { PostsComponent } from './posts/posts.component';
//login

import { AuthComponent } from './auth/auth.component';

const routes: Routes = [

  //home
  { path: 'home', component: HomeComponent },
  

//brawlers
  //brawlers
  { path: 'brawlers', component: BrawlersComponent }, 
  { path: 'brawler/:id',component: BrawlerDetailComponent},

  //maps
  { path: 'maps', component: MapsComponent },
  { path: 'maps/:id',component: MapsDetailComponent},

  //posts
  { path: 'posts', component: PostsComponent},

  //login
  { path: 'login', component: AuthComponent, data: { action: 'login' }},
  { path: 'register', component: AuthComponent, data: { action: 'register' }},
  //defaul
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
