import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {


  ngOnInit(){
    this.signupForm.valueChanges.subscribe((value:any)=>{
      console.log(value)
      console.log(this.signupForm.get('username')?.touched)
    })
  }

  signupForm = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(5)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required]),
    confirmpwd : new FormControl('')
  })

  getControl(key:any){
    return this.signupForm.get(key)
  }


}
