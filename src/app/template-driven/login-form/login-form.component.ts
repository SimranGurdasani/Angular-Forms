import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  form = {
    email:'',
    password:''
  }

  submitForm(){
    console.log(this.form)
  }
}
