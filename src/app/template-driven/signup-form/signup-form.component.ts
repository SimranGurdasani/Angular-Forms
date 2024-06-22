import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = {
    fname:'',
    lname:'',
    email:'',
    password:'',
    confirmpwd:''
  }

  submitForm(signupForm:any):void{
    // console.log(this.form)
    console.log(signupForm)
  }
}
