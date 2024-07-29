import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { FormsModule } from '@angular/forms';
import { ApparelComponent } from './apparel/apparel.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { GiftsComponent } from './gifts/gifts.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    AboutComponent,
    WhatsnewComponent,
    HomeComponent,
    RegisterComponent,
    ApparelComponent,
    ElectronicsComponent,
    GiftsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
