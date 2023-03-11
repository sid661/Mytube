import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  Registrationform = new FormGroup({

    name: new FormControl(''),
    email: new FormControl(''),
    phone:new FormControl(''),
    age: new FormControl('')
  })

  RegistrationData(){
  
    console.log(this.Registrationform.value)
  }

  get name(){
    return this.Registrationform.get('name');
  }
  get email(){
    return this.Registrationform.get('email');
  }
  get phone(){
    return this.Registrationform.get('phone');
  }
  get age(){
    return this.Registrationform.get('age');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
