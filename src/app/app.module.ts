import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { SearchComponent } from './search/search.component';


const myroute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"add",
    component:AddemployeeComponent
  },
  {
    path:"search",
    component:SearchComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AddemployeeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
