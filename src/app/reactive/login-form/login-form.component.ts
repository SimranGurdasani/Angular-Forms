import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  ngOnInit(){
    this.loginForm.valueChanges.subscribe((value)=>{
      console.log(value)
      console.log(this.loginForm)
      console.log(this.loginForm.get('username')?.touched)
    })
  }

  loginForm = new FormGroup(
    {
    username: new FormControl('',[Validators.required,Validators.minLength(5)]),
    password: new FormControl('',[Validators.required])
    }
  )

  getControl(key:any){
    return this.loginForm.get(key)
  }



}
