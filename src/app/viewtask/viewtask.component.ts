import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent {


  constructor(private api:ApiService)
  {
    api.viewemp().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
data:any=[]
}
