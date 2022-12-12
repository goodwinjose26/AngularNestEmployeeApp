import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.css']
})
export class MytaskComponent {

  empcode:any=""
  data:any=[]
  constructor(private api:ApiService,private route:Router){
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
  
  status="Completed"
  update=(empcode:any)=>{

    let data:any={
      "empcode":empcode,
      "status":this.status
    }
    this.api.updateStatus(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
  
          alert("Updated");
          this.route.navigate(['/mytask'])
        } 
        else {
        
          alert("invalid input");
        }
      }
    )
  
  }
  
  }