import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrawlersComponent} from './brawlers/brawlers.component';
import { BrawlerDetailComponent } from './brawlers/brawler-detail/brawler-detail.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { MapsDetailComponent } from './maps/maps-detail/maps-detail.component';


const routes: Routes = [

  //home
  { path: 'home', component: HomeComponent },
  

//brawlers
  { path: 'brawlers', component: BrawlersComponent },

  { path: 'brawler/:id',component: BrawlerDetailComponent},

  //maps
  { path: 'maps', component: MapsComponent },
  { path: 'maps/:id',component: MapsDetailComponent},

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
