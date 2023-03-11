import { Component, OnInit } from '@angular/core';
export interface Guest {
  name: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  guests: Guest [] = [{name: 'rushee603@gmail.com'},
  {name: 'harsh123@gmail.com'},
  {name: 'sid7@gmail.com'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
