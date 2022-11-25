import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  data:any =[
    {
      "name":"Amal",
      "designation":"Trainee",
      "salary":30000,
      "emailid":"aaa@abc.com",
      "id":1234
    },
    {
      "name":"Joel",
      "designation":"Trainee",
      "salary":20000,
      "emailid":"jjj@abc.com",
      "id":1235
    },
    {
      "name":"Sanal",
      "designation":"MD",
      "salary":300000,
      "emailid":"aaa@abc.com",
      "id":1236
    },
    {
      "name":"Roy",
      "designation":"Trainee",
      "salary":30000,
      "emailid":"mmm@abc.com",
      "id":1237
    },
    {
      "name":"John",
      "designation":"Manager",
      "salary":40000,
      "emailid":"hhh@abc.com",
      "id":1238
    }
  ]
}
