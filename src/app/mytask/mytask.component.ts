import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.css']
})
export class MytaskComponent {

  empcode:any=""
  data:any=[]
  constructor(private api:ApiService){
    this.empcode=localStorage.getItem("userInfo")
    let data:any={
      "empcode":this.empcode
    }
    this.api.mytask(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
    )
  }
  }