import { Component } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

  name=""
  designation=""
  salary=""
  emailid=""
  id=""
  phnumber=""
  website=""
  yop=""

  readvalues=()=>{

    let data:any={
      "name":this.name,
      "designation":this.designation,
      "salary":this.salary,
      "emailid":this.emailid,
      "id":this.id,
      "phnumber":this.phnumber,
      "website":this.website,
      "yop":this.yop
    }

    console.log(data)
  }

}
