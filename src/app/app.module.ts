import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
const myRoute:Routes=[
  {
   path:"",
   component:AdminloginComponent
  },
  {
    path:"addemp",
    component:AddemployeeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminnavbarComponent,
    AdminloginComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
