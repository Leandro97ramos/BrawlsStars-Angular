import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrawlersComponent } from './brawlers/brawlers.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateTierListComponent } from './create-tier-list/create-tier-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ShowDetailBrawlComponent } from './show-detail-brawl/show-detail-brawl.component';
import { ShowDetailRolComponent } from './show-detail-rol/show-detail-rol.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { MapsComponent } from './maps/maps.component';
import { GameModeComponent } from './game-mode/game-mode.component';



@NgModule({
  declarations: [
    AppComponent,
    BrawlersComponent,
    CreatePostComponent,
    CreateTierListComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ShowDetailBrawlComponent,
    ShowDetailRolComponent,
    HomeComponent,
    PostsComponent,
    RegisterComponent,
    MapsComponent,
    GameModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
