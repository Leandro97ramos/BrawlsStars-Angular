import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrawlersComponent} from './brawlers/brawlers.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateTierListComponent } from './create-tier-list/create-tier-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowDetailBrawlComponent } from './show-detail-brawl/show-detail-brawl.component';
import { ShowDetailRolComponent } from './show-detail-rol/show-detail-rol.component';
import { PostsComponent } from './posts/posts.component';
import { MapsComponent } from './maps/maps.component';
import { GameModeComponent } from './game-mode/game-mode.component';
//import { ShowDetailPostComponent } from './show-detail-post/show-detail-post.component';
//import { ShowDetailTierListComponent } from './show-detail-tier-list/show-detail-tier-list.component';
const routes: Routes = [
//Aca van las rutas de los componentes
  //  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //brawlers
  { path: 'brawlers', component: BrawlersComponent },
  { path: 'brawlers/:id', component: ShowDetailBrawlComponent },
  //posts
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostsComponent},
  { path: 'create-post', component: CreatePostComponent },
  //maps
  { path: 'maps', component: MapsComponent },
  { path: 'maps/:id', component: MapsComponent },
  //tier-list  
  { path: 'tier-list', component: CreateTierListComponent },
  //{ path: 'tier-list/:id', component: ShowDetailTierListComponent },
 
  //Game-mode
  { path: 'game-mode', component: GameModeComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  //{ path: 'show-detail-rol', component: ShowDetailRolComponent },

  //defaul
  //{ path: '**', redirectTo: '/brawlers', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
