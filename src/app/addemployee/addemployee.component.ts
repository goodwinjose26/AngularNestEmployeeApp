import { Component } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {



  name=""
  empcode=""
  address=""
  email=""
  phno=""
  username=""
  password=""


  constructor(private api:ApiService) {}

  regValues=()=>
  {
    
    
    let data:any={"name":this.name,"empcode":this.empcode,"address":this.address,"email":this.email,"phno":this.phno,"username":this.username,"password":this.password,"cpass":this.cpass}
    console.log(data)
    this.api.regValues(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success")
        {
          alert("added")
          this.name="",this.empcode="",this.address="",this.email="",this.phno="",this.username="",this.password="",this.cpass=""
        }
        else
        {
          alert("error")
        }
      }
    )
    
    
  }

}
