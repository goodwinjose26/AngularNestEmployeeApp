import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmploginComponent } from './emplogin/emplogin.component';
import { EmpnavbarComponent } from './empnavbar/empnavbar.component';
import { EmphomeComponent } from './emphome/emphome.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { TaskComponent } from './task/task.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { MytaskComponent } from './mytask/mytask.component'
const myRoute:Routes=[
  {
   path:"",
   component:AdminloginComponent
  },
  {
    path:"addemp",
    component:AddemployeeComponent
  },
  {
    path:"emphome",
    component:EmphomeComponent
  },
  {
    path:"emplogin",
    component:EmploginComponent
  },
  {
    path:"viewemp",
    component:ViewempComponent
  },
  {
    path:"addtask",
    component:TaskComponent
  },
  {
    path:"viewtask",
    component:ViewtaskComponent
  },
  {
    path:"mytask",
    component:MytaskComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminnavbarComponent,
    AdminloginComponent,
    AddemployeeComponent,
    EmploginComponent,
    EmpnavbarComponent,
    EmphomeComponent,
    ViewempComponent,
    TaskComponent,
    ViewtaskComponent,
    MytaskComponent
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
