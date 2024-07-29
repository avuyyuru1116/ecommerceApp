import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { ApparelComponent } from './apparel/apparel.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { GiftsComponent } from './gifts/gifts.component';

const routes: Routes = [
  {path:"", redirectTo:"home",  pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"whatsNew",component: WhatsnewComponent },
  {path:"about",component: AboutComponent },
  {path:"products",component: ProductsComponent ,
    children: [
      {
        path: "apparel", 
        component: ApparelComponent,
      },
      {
        path: "electronics",
        component: ElectronicsComponent
      },
      {
        path: "gifts",
        component: GiftsComponent
      }
    ]
   },
  {path :"login" , component: LoginComponent},
  {path :"register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
