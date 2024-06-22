import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  // we r making obj of formcontrol
  // username= new FormControl();

  // init is a state of the component
  // this function is fired when the component is initialised
  // it is initialised after the constructor
  // valueChanges ek event hai jisko ye reactive-form component ne subscribe kiya hai
  ngOnInit(){
    console.log("hi")
    this.registerForm.valueChanges.subscribe((value:any)=>{
      console.log(this.registerForm)
      console.log(value)
      console.log(this.registerForm.get('username')?.touched)
    })
  }

  // instead of separately giving formcontrol to every element we creating formgroup...this works on the principle of observable
  registerForm = new FormGroup({
    // below for default values,use Validators aur FormControl k parameter m pass krenge
    username: new FormControl('',[Validators.required,Validators.minLength(5)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    address: new FormControl(),
    gender: new FormControl(),
    branch: new FormControl(),
  })
  submit(){
    // console.log(this.username.value)
  }

  // below is function for improving code readability
  getControl(key:any){
    return this.registerForm.get(key)
  }

  // below is the way to set values for EDIT but this method needs all keys
  setValuesToControls(){
    this.registerForm.setValue({
      username:'xyz@123',
      email:'a@gmail.com',
      address:'t',
      gender:'Female',
      branch:'CMPN'
    })
  }

  // below method we can give 1 or more parameters not necessary all
  // this.registerForm.patchValue({
  //   username:'test'
  // })

  // below way is for setting individual key
  // this.registerForm.get('username')?.setValue('simi')

  
  // template-driven mei 1)view to modal(html to ts):html m change hoga toh fir ngModel m jayega fir modal m change hoga
  // 2)modal to view(ts to html):ts m change hoga toh fir ngModel m jayega fir html m change hoga

  // lekin REACTIVE FORMS mei only ts m logic hai i.e form instance hai so from either from html to ts jayega ya viceversa cuz of observable ...it is preferred method for longer forms


}
