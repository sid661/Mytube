import { Component} from '@angular/core';
import {FormControl,FormGroup,Validators,NgForm} from '@angular/forms'
import{} from '@angular/forms'

@Component({
  selector: 'app-uploadform2',
  templateUrl: './uploadform2.component.html',
  styleUrls: ['./uploadform2.component.css']
})
export class Uploadform2Component {
 
// uploadform2 = new FormGroup
// ({
//   title: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)])
// }) 

// uploaddata()
// {
//   console.log(this.uploadform2.value)
// }

// get title()
// {
//   return this.uploadform2.get('title')
// }

// constructor() { }

constructor() { }
addVideoDetails(uploadFormDetails:NgForm){
  console.log(uploadFormDetails.value);
  document.write("Your video has been uploaded successfully")
}

ngOnInit(): void {
}
Component(arg0: { selector: string; templateUrl: string; styleUrls: string[]; }) {
  throw new Error("Function not implemented.");
}
  
  // submitted=false;
  // fun1()
  // {
  //   this.submitted=true;
  // }
  // ngOnInit(): void {
  // }



}


