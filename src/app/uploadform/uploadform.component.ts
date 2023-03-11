import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-uploadform',
  templateUrl: './uploadform.component.html',
  styleUrls: ['./uploadform.component.css']
})
export class UploadformComponent implements OnInit {

  

  uploadform=new FormGroup({
    url:new FormControl('',[Validators.required,Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    title: new FormControl('',[Validators.required,Validators.maxLength(120)]),
    desc: new FormControl(''),
    durtion : new FormControl('',[Validators.required,Validators.pattern('/^(0[0-9]|1[0-9]):[0-9][0-9]:[0-9][0-9]$/')]),
    channel: new FormControl('',[Validators.required,Validators.minLength(1)]),
    audience: new FormControl(''),
    age:new FormControl(''),
    date: new FormControl('')
  })
  constructor() { }

   uploaddata(){
  
  console.log(this.uploadform.value)
}
get date(){
  return this.uploadform.get('date')
}
get url(){
  return this.uploadform.get('url')
}
get title(){
  return this.uploadform.get('title')
}
get desc(){
  return this.uploadform.get('desc')
}
get durtion(){
  return this.uploadform.get('durtion')
}
get channel(){
  return this.uploadform.get('channel')
}
get audience(){
  return this.uploadform.get('audience')
}
get age(){
  return this.uploadform.get('age')
}
  ngOnInit(): void {
  }




  
}
