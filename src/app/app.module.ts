import { NgModule } from '@angular/core';
import { BrowserModule,   } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { BrawlersComponent } from './brawlers/brawlers.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { CardIconBrawlsComponent } from './brawlers/card-icon-brawls/card-icon-brawls.component';
import { BrawlerDetailComponent } from './brawlers/brawler-detail/brawler-detail.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { ScrollInfiniteComponent } from './reutilizables/scroll-infinite/scroll-infinite.component';
import { LoadingComponent } from './reutilizables/loading/loading.component';
import { MapsDetailComponent } from './maps/maps-detail/maps-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BrawlersComponent,
    //CardIconBrawlsComponent,
    BrawlerDetailComponent,
    HomeComponent,
    MapsComponent,
    ScrollInfiniteComponent,
    LoadingComponent,
    MapsDetailComponent,
    
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
